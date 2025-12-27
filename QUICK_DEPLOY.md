# Quick Deployment Steps

## 🚀 Fastest Way: Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub
```bash
# Navigate to your project
cd "D:\My projects\1st year 2nd sem\paired\My-Port-Folio"

# Initialize git (if not done)
git init
git add .
git commit -m "Ready for deployment"

# Create repo on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Select your repository
5. **Important Settings:**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Click "Deploy"
7. Done! Your site is live 🎉

---

## ✅ Pre-Deployment Checklist

- [ ] Test build locally: `cd frontend && npm run build`
- [ ] Update EmailJS credentials in `contactme.jsx`
- [ ] Push code to GitHub
- [ ] Deploy to Vercel/Netlify

---

## 📝 Files Created for You

✅ `vercel.json` - For Vercel routing  
✅ `public/_redirects` - For Netlify routing  
✅ Updated `index.html` - Better SEO meta tags

---

## 🔧 Test Build Locally

```bash
cd frontend
npm run build
npm install -g serve
serve -s build
```

Visit http://localhost:3000 to test!

---

## 📚 Full Guide

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.

