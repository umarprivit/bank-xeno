# Vercel Deployment Checklist

## Pre-Deployment Checklist

### ✅ Code & Build
- [ ] All code is committed to Git
- [ ] Build runs successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] All components are responsive
- [ ] Form validation is working

### ✅ Environment Variables
- [ ] `.env` file is properly configured locally
- [ ] `.env` is added to `.gitignore` (don't commit secrets!)
- [ ] Environment variables are ready for Vercel:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

### ✅ Supabase Database
- [ ] `register_interest` table exists in Supabase
- [ ] RLS policies are configured
- [ ] Test form submission works locally

### ✅ Repository
- [ ] Code is pushed to GitHub/GitLab
- [ ] Repository is public or accessible to Vercel

## Deployment Steps

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository

### 2. Configure Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Add Environment Variables
In Vercel dashboard → Settings → Environment Variables:
```
VITE_SUPABASE_URL = https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY = your-anon-key-here
```

### 4. Deploy
- Click "Deploy"
- Wait for build to complete
- Your site will be live at: `https://your-project.vercel.app`

## Post-Deployment Testing

### ✅ Test Checklist
- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Navigation works
- [ ] Register Interest form submits successfully
- [ ] Data appears in Supabase dashboard
- [ ] Mobile responsiveness works
- [ ] Error handling works (try invalid email)

## Custom Domain (Optional)
1. Go to Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel

## Troubleshooting

### Common Issues:
1. **Build fails**: Check for TypeScript errors locally
2. **Environment variables not working**: Ensure they start with `VITE_`
3. **Form not submitting**: Check Supabase table exists and RLS policies
4. **404 on refresh**: `vercel.json` handles this with rewrites

### Debug Tools:
- Vercel deployment logs
- Browser console errors
- Supabase dashboard logs
