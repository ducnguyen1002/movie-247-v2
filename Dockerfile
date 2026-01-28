# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install deps
RUN npm ci

# Copy source
COPY . .

# Build Astro
RUN npm run build


# ---------- Run stage ----------
FROM node:20-alpine

WORKDIR /app

# Install static server
RUN npm install -g serve

# Copy built files
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Serve static site
CMD ["serve", "-s", "dist", "-l", "3000"]
