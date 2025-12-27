# Portfolio Deployment Guide

This guide will help you deploy your portfolio to the web. We'll use **Vercel** (recommended) or **Netlify** as they're the easiest options for React apps.

## Prerequisites

1. A GitHub account (free)
2. Your portfolio code pushed to GitHub

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   cd "D:\My projects\1st year 2nd sem\paired\My-Port-Folio"
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   ```

2. **Create a GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., "my-portfolio")
   - **Don't** initialize with README

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Go to https://vercel.com
   - Sign up with your GitHub account

2. **Import Your Project**:
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a React app

3. **Configure Build Settings**:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Environment Variables** (if needed):
   - Add any environment variables here (like EmailJS keys)

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (Same as Vercel Step 1)

### Step 2: Deploy to Netlify

1. **Sign up/Login to Netlify**:
   - Go to https://www.netlify.com
   - Sign up with your GitHub account

2. **Import Your Project**:
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository

3. **Configure Build Settings**:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

4. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

5. **Fix Routing** (Important for React Router):
   - Go to Site Settings → Build & Deploy → Post Processing
   - Create a file `frontend/public/_redirects` with:
     ```
     /*    /index.html   200
     ```

---

## Option 3: Deploy to GitHub Pages

### Step 1: Install gh-pages

```bash
cd frontend
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these to your `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/my-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

---

## Important: Fix React Router for Production

Since you're using React Router, you need to handle client-side routing. Create this file:

**File**: `frontend/public/_redirects` (for Netlify)
```
/*    /index.html   200
```

**OR** for Vercel, create `frontend/vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Before Deploying - Checklist

- [ ] Update `public/index.html` title and meta description
- [ ] Test the build locally: `cd frontend && npm run build`
- [ ] Make sure all images are in `public/images/` folder
- [ ] Configure EmailJS credentials in `contactme.jsx`
- [ ] Test all routes work correctly
- [ ] Push code to GitHub

---

## Testing Your Build Locally

Before deploying, test your production build:

```bash
cd frontend
npm run build
npm install -g serve
serve -s build
```

Visit `http://localhost:3000` to test.

---

## Troubleshooting

### Images Not Loading
- Make sure all images are in `public/images/` folder
- Use `/images/filename.png` (not `./images/`)

### 404 Errors on Routes
- Add `_redirects` file (Netlify) or `vercel.json` (Vercel)

### Build Fails
- Check Node version (should be 14+)
- Run `npm install` in frontend folder
- Check for any console errors

---

## Recommended: Vercel

**Why Vercel?**
- ✅ Easiest setup
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Great performance
- ✅ Easy custom domain setup

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- React Router Deployment: https://reactrouter.com/en/main/start/overview#deploying

