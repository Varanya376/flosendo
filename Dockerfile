# ----- Stage 1: Build -----
    FROM node:20-alpine as build

    # Create app directory
    WORKDIR /app
    
    # Copy dependency files first (better caching)
    COPY package*.json ./
    
    # Install dependencies
    RUN npm ci
    
    # Copy the rest of your app code
    COPY . .
    
    # Build the React app for production
    RUN npm run build
    
    # ----- Stage 2: Serve -----
    FROM nginx:stable-alpine
    
    # Copy the build output to Nginx's web folder
    COPY --from=build /app/build /usr/share/nginx/html
    
    # Expose port 80
    EXPOSE 80
    
    # Start Nginx when the container runs
    CMD ["nginx", "-g", "daemon off;"]
    