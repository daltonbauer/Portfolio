# Deployment Guide for GitHub Pages

This guide will walk you through the process of deploying your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `username.github.io` (replace "username" with your actual GitHub username)
4. Make the repository public
5. Click "Create repository"

## Step 2: Upload Your Website Files

### Option 1: Using Git Command Line

1. Open your terminal/command prompt
2. Navigate to your website folder:
   \`\`\`
   cd path/to/your/website
   \`\`\`
3. Initialize a Git repository:
   \`\`\`
   git init
   \`\`\`
4. Add all files to the repository:
   \`\`\`
   git add .
   \`\`\`
5. Commit the files:
   \`\`\`
   git commit -m "Initial commit"
   \`\`\`
6. Add your GitHub repository as the remote origin:
   \`\`\`
   git remote add origin https://github.com/username/username.github.io.git
   \`\`\`
   (Replace "username" with your GitHub username)
7. Push your files to GitHub:
   \`\`\`
   git push -u origin main
   \`\`\`
   (If you're using an older version of Git, you might need to use `master` instead of `main`)

### Option 2: Using GitHub Web Interface

1. Go to your new repository on GitHub
2. Click "uploading an existing file" link
3. Drag and drop all your website files or use the file selector
4. Click "Commit changes"

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch (or "master" if that's what you used)
5. Click "Save"

## Step 4: Access Your Website

After a few minutes, your website will be available at:
\`\`\`
https://username.github.io
\`\`\`
(Replace "username" with your GitHub username)

## Updating Your Website

### To add new portfolio items:

1. Create a folder called `images/portfolio/` in your repository if it doesn't exist
2. Upload your new images to this folder
3. The website will automatically display your new work

### To update content:

1. Edit the relevant files (index.html, styles.css, etc.)
2. Commit and push your changes to GitHub
3. Your website will automatically update

## Troubleshooting

- If your website doesn't appear, check the GitHub Pages section in your repository settings to make sure it's enabled
- If images aren't displaying, check that the file paths are correct
- If you encounter any issues with deployment, check GitHub's status page or documentation
