# Use the official NGINX base image from Docker Hub
FROM nginx:latest

# Copy your custom NGINX configuration file to the container
COPY nginx-config/ /etc/nginx/conf.d/

# Expose ports (default HTTP port 80)
EXPOSE 80

