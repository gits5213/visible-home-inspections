# Next Steps After DNS Configuration

You've completed the initial setup! Here's what to do next:

## ✅ What You've Already Done

- [x] Added `CUSTOM_DOMAIN=true` secret in GitHub repository
- [x] Configured DNS records in Bluehost (A records for root domain, CNAME for www)
- [x] Added custom domain in GitHub Pages settings

## 🔄 Immediate Next Steps

### Step 1: Trigger a New Deployment

Since you've set up the `CUSTOM_DOMAIN=true` secret, you need to trigger a new deployment to rebuild the site without the basePath:

**Option A: Manual Trigger (Fastest)**
1. Go to your GitHub repository: `https://github.com/gits5213/visible-home-inspections`
2. Click on the **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** button (top right)
5. Select `main` branch
6. Click **Run workflow**

**Option B: Push a Commit**
```bash
# Make a small change (or just add a comment)
git add .
git commit -m "Trigger deployment with custom domain"
git push origin main
```

### Step 2: Verify Deployment

1. **Check GitHub Actions**
   - Go to **Actions** tab in your repository
   - Verify the workflow completed successfully
   - Check the build logs to ensure `CUSTOM_DOMAIN=true` was used

2. **Check Build Output**
   - In the build logs, verify that the site was built without basePath
   - Look for: "Build output verified" message

### Step 3: Wait for DNS Propagation

DNS changes can take:
- **Minimum**: 5-30 minutes
- **Maximum**: 24-48 hours

**Check DNS Propagation:**
1. Visit: https://www.whatsmydns.net
2. Enter your domain: `visiblehomeinspections.com`
3. Select record type: `A`
4. Verify it shows GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

**Or check locally:**
```bash
dig visiblehomeinspections.com A
```

### Step 4: Wait for SSL Certificate

After DNS propagates:
1. GitHub automatically provisions SSL certificates
2. This usually takes **5-10 minutes** after DNS propagates
3. Check SSL status:
   - Go to repository → **Settings** → **Pages**
   - Look for SSL certificate status (green checkmark when ready)

### Step 5: Enable HTTPS Enforcement

Once SSL certificate is provisioned:
1. Go to repository → **Settings** → **Pages**
2. Check the box **"Enforce HTTPS"**
3. This ensures your site always redirects to HTTPS

### Step 6: Test Your Site

Visit your custom domain and test:

- [ ] **Root domain**: `https://visiblehomeinspections.com`
- [ ] **www subdomain**: `https://www.visiblehomeinspections.com`
- [ ] **Home page** loads correctly
- [ ] **Navigation links** work (About, Contact, Services, etc.)
- [ ] **Images** load properly
- [ ] **Contact form** works
- [ ] **HTTPS** is enforced (check for green lock icon)
- [ ] **No console errors** (F12 → Console tab)

## 🔍 Verification Checklist

### DNS Verification
- [ ] A records point to GitHub Pages IPs (check with `dig` or online DNS checker)
- [ ] CNAME record for www points to `gits5213.github.io`
- [ ] DNS propagation complete (all locations show correct IPs)

### GitHub Pages Verification
- [ ] Custom domain shows in Settings → Pages
- [ ] SSL certificate is provisioned (green checkmark)
- [ ] "Enforce HTTPS" is enabled
- [ ] Latest deployment shows in Settings → Pages → Deployments

### Site Functionality
- [ ] Site loads on custom domain
- [ ] All pages accessible
- [ ] Assets (CSS, JS, images) load correctly
- [ ] No 404 errors
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works

## ⚠️ Common Issues & Solutions

### Issue: Site Still Shows GitHub Pages Subdomain Content

**Solution:**
- Verify `CUSTOM_DOMAIN=true` secret is set correctly
- Trigger a new deployment
- Check build logs to ensure secret was used

### Issue: DNS Not Propagating

**Solution:**
- Double-check DNS records in Bluehost are correct
- Wait longer (can take up to 48 hours)
- Verify you removed old A records pointing to Bluehost IPs
- Check DNS records using online DNS checker

### Issue: SSL Certificate Not Provisioned

**Solution:**
- Wait 10-15 minutes after DNS propagates
- Check GitHub Pages settings for SSL status
- Try accessing `http://` version first, then HTTPS
- Clear browser cache

### Issue: Site Shows Wrong Paths/Assets Not Loading

**Solution:**
- This means basePath is still being used
- Verify `CUSTOM_DOMAIN=true` secret exists
- Trigger a new deployment
- Check build logs to confirm secret was used

### Issue: www Subdomain Not Working

**Solution:**
- Verify CNAME record for `www` exists in Bluehost
- Check it points to `gits5213.github.io`
- Wait for DNS propagation
- In GitHub Pages settings, you can add both root and www domains

## 📊 Monitoring

### Check Deployment Status
- **GitHub Actions**: Repository → **Actions** tab
- **Deployment History**: Repository → **Settings** → **Pages** → **Deployments**

### Check DNS Status
- **Online DNS Checker**: https://www.whatsmydns.net
- **Local Check**: `dig visiblehomeinspections.com A`

### Check SSL Status
- **GitHub Pages Settings**: Repository → **Settings** → **Pages**
- **Browser**: Check for green lock icon in address bar

## 🎉 Success Indicators

Your setup is complete when:

1. ✅ Site loads at `https://visiblehomeinspections.com`
2. ✅ SSL certificate shows as active (green checkmark)
3. ✅ "Enforce HTTPS" is enabled
4. ✅ All pages and assets load correctly
5. ✅ No console errors
6. ✅ Contact form works

## 📝 Notes

- **DNS propagation** can take up to 48 hours (usually much faster)
- **SSL provisioning** takes 5-10 minutes after DNS propagates
- **Future deployments** will automatically work with your custom domain
- **Don't delete the CNAME file** that GitHub created in your repository
- **Both domains work**: Custom domain and GitHub Pages subdomain

## 🆘 Still Having Issues?

1. **Check GitHub Actions logs** for build errors
2. **Verify DNS records** using online DNS checker
3. **Review GitHub Pages settings** for configuration issues
4. **Check browser console** for JavaScript errors
5. **Contact support**:
   - GitHub Pages: [GitHub Community](https://github.community/)
   - Bluehost: Bluehost support for DNS issues

---

**Your site should be live within 24-48 hours!** 🚀

If everything is configured correctly, it's usually much faster (5-30 minutes for DNS, then 5-10 minutes for SSL).

