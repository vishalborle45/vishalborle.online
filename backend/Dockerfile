# --- Stage 1: Build the Application ---
# Changed base image from alpine to slim to fix the npm exit handler bug
FROM node:20-slim AS builder

WORKDIR /usr/src/app

# Copy package management files
COPY package*.json ./

# Install all dependencies (including devDependencies like typescript)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Compile TypeScript to JavaScript 
RUN npm run build

# Prune node_modules down to only production-ready dependencies
RUN npm prune --production


# --- Stage 2: Final Production Runtime ---
# Match runtime to slim for stable production operations
FROM node:20-slim

WORKDIR /usr/src/app

# Set production environment optimization
ENV NODE_ENV=production

# Copy only production dependencies from builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy compiled JavaScript code from the dist folder
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/public ./public

# Copy package.json to reference runtime script targets
COPY --from=builder /usr/src/app/package*.json ./

# Expose the internal container port 
EXPOSE 3000

# Start the application using your entrypoint app.js
CMD ["node", "dist/app.js"]
