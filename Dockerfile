# ─────────────────────────────────────────────
# STAGE 1 — BUILD
# Use official Node LTS image to install deps
# and compile the React app into static assets.
# This stage is thrown away after build — it
# never ends up in the final image, keeping the
# production image lean.
# ─────────────────────────────────────────────
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy only package files first so Docker can
# cache the npm install layer. If source files
# change but package.json hasn't, Docker reuses
# the cached layer — faster subsequent builds.
COPY package.json package-lock.json ./

# Install all dependencies (including devDeps
# needed for the build step)
RUN npm ci --silent

# Copy the rest of the source code
COPY . .

# Build production-optimised static assets.
# Output goes to /app/build
RUN npm run build

# ─────────────────────────────────────────────
# STAGE 2 — RUNTIME
# Use lightweight Nginx Alpine image (~25 MB).
# Only the compiled static files from Stage 1
# are copied here — no Node, no source code,
# no devDependencies in the final image.
# ─────────────────────────────────────────────
FROM nginx:1.25-alpine AS runtime

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy compiled React build from Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx config that handles
# React SPA routing (all routes → index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
