# Use an official Node runtime as the parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the source code (TypeScript files) and tsconfig.json
# Adjust this if you're using a specific source directory like 'src'
COPY . .

# Compile TypeScript to JavaScript
# Make sure you have a 'build' script in package.json
RUN npm run build

# Make port 8080 available outside this container
EXPOSE 8080

# Run the app (JavaScript output from TypeScript compilation)
# Ensure your main file is named 'index.js' and located in 'dist'
CMD ["node", "dist/index.js"]
