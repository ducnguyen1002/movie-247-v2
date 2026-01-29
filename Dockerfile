# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Astro application
RUN npm run build

# Runtime Stage
FROM node:20-alpine AS runtime

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

# Ensure /app ownership is set to node user
RUN chown node:node /app

# Use the built-in 'node' user for security
USER node

# Copy package files for production install
COPY --from=builder --chown=node:node /app/package.json ./
COPY --from=builder --chown=node:node /app/package-lock.json* ./

# Install production dependencies only (omit devDependencies)
RUN npm ci --omit=dev

# Copy build output from the builder stage
COPY --from=builder --chown=node:node /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["node", "./dist/server/entry.mjs"]
