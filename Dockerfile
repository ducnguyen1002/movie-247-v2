# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json* ./

# Install dependencies (using npm ci for faster, more reliable builds)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Astro application
RUN npm run build

# Runtime Stage
FROM node:20-alpine AS runtime

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy build output from the builder stage
# With @astrojs/node in 'standalone' mode, dist contains all necessary files
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Use the built-in 'node' user for security (instead of root)
USER node

# Start the server
CMD ["node", "./dist/server/entry.mjs"]
