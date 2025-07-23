# Step 1: Use official Node.js image
FROM node:18-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the app's port
EXPOSE 3000

# Step 7: Set environment variables if needed
ENV NODE_ENV=staging

# Step 8: Start the app
CMD ["node", "src/server.js"]
