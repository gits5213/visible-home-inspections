# Bluehost DNS Configuration for GitHub Pages

This guide will help you configure your Bluehost domain to work with GitHub Pages.

## Prerequisites

- Domain registered with Bluehost
- GitHub Pages site deployed and working
- Access to Bluehost cPanel

## Step-by-Step Bluehost DNS Configuration

### Step 1: Add Custom Domain in GitHub

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/gits5213/visible-home-inspections`
   - Click on **Settings** tab

2. **Navigate to Pages settings**
   - In the left sidebar, click **Pages**

3. **Add custom domain**
   - Under **Custom domain**, enter your domain (e.g., `visiblehomeinspections.com`)
   - Click **Save**
   - GitHub will create a `CNAME` file in your repository (don't delete it!)

4. **Enable HTTPS (recommended)**
   - Check the box **"Enforce HTTPS"** (this will be available after DNS is configured)
   - This ensures your site is always served over HTTPS

### Step 2: Configure DNS Records in Bluehost

#### Option A: Using CNAME Record (Recommended)

**Important:** Bluehost typically doesn't support CNAME records for the root domain (@). You'll need to use A records for the root domain and CNAME for www subdomain.

#### For Root Domain (e.g., visiblehomeinspections.com):

1. **Log into Bluehost**
   - Go to [https://www.bluehost.com](https://www.bluehost.com)
   - Click **Login** or **My Account**
   - Enter your credentials

2. **Access DNS Management**
   - In your Bluehost dashboard, click **Domains** in the left sidebar
   - Click **DNS** or **Zone Editor** next to your domain
   - Or go directly to: **Advanced** → **DNS Zone Editor**

3. **Add A Records**
   - Click **Add Record** or **+ Add**
   - Add **four A records** with the following GitHub Pages IP addresses:
   
   **Record 1:**
   - **Type**: `A`
   - **Host Record**: `@` (or leave blank for root domain)
   - **Points to**: `185.199.108.153`
   - **TTL**: `14400` (or default)
   - Click **Save**

   **Record 2:**
   - **Type**: `A`
   - **Host Record**: `@`
   - **Points to**: `185.199.109.153`
   - **TTL**: `14400`
   - Click **Save**

   **Record 3:**
   - **Type**: `A`
   - **Host Record**: `@`
   - **Points to**: `185.199.110.153`
   - **TTL**: `14400`
   - Click **Save**

   **Record 4:**
   - **Type**: `A`
   - **Host Record**: `@`
   - **Points to**: `185.199.111.153`
   - **TTL**: `14400`
   - Click **Save**

#### For www Subdomain (e.g., www.visiblehomeinspections.com):

1. **Add CNAME Record**
   - Click **Add Record** or **+ Add**
   - **Type**: `CNAME`
   - **Host Record**: `www`
   - **Points to**: `gits5213.github.io`
   - **TTL**: `14400` (or default)
   - Click **Save**

### Step 3: Remove Conflicting Records

**Important:** Before adding the new records, check for existing A or CNAME records for your root domain (@) and www subdomain. You may need to:

1. **Remove existing A records** pointing to Bluehost's IP addresses
2. **Remove existing CNAME records** for the root domain (if any)
3. **Keep only the GitHub Pages records** you just added

**To remove records:**
- Find the record in the DNS Zone Editor
- Click **Delete** or the trash icon
- Confirm deletion

### Step 4: Configure GitHub Repository Secret (For Custom Domain)

Since you're using a custom domain, you need to tell GitHub Actions to build without the basePath:

1. **Go to GitHub repository**
   - Navigate to: `https://github.com/gits5213/visible-home-inspections`
   - Click **Settings** → **Secrets and variables** → **Actions**

2. **Add repository secret**
   - Click **New repository secret**
   - **Name**: `CUSTOM_DOMAIN`
   - **Value**: `true`
   - Click **Add secret**

3. **Trigger a new deployment**
   - The next push to `main` will automatically rebuild without basePath
   - Or manually trigger: Go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**

### Step 5: Wait for DNS Propagation

1. **DNS propagation** can take:
   - Minimum: 5-30 minutes
   - Maximum: 24-48 hours
   
2. **Check DNS propagation**:
   - Visit: https://www.whatsmydns.net
   - Enter your domain: `visiblehomeinspections.com`
   - Select record type: `A`
   - Check if it shows the GitHub IP addresses (`185.199.108.153`, etc.)

3. **Verify DNS locally**:
   ```bash
   # Check A records
   dig visiblehomeinspections.com A
   
   # Check www subdomain
   dig www.visiblehomeinspections.com CNAME
   ```

### Step 6: Wait for SSL Certificate

1. **GitHub automatically provisions SSL certificates**
2. **This usually takes 5-10 minutes** after DNS propagates
3. **Check SSL status**:
   - Go to repository → **Settings** → **Pages**
   - Look for SSL certificate status
   - You'll see a green checkmark when SSL is active

### Step 7: Verify Custom Domain

1. **Visit your custom domain**: `https://visiblehomeinspections.com`
2. **Test all pages**:
   - Home page loads correctly
   - Navigation links work
   - Images load properly
   - Contact form works
3. **Check HTTPS**: Ensure the site redirects to HTTPS
4. **Test www subdomain**: `https://www.visiblehomeinspections.com` should also work

## Bluehost-Specific Notes

### Bluehost DNS Zone Editor Interface

The Bluehost DNS Zone Editor typically shows:
- **Name**: The hostname (e.g., `@` for root, `www` for www subdomain)
- **Type**: Record type (A, CNAME, MX, etc.)
- **TTL**: Time to live (default is usually 14400 seconds)
- **Points to**: The target value

### Common Bluehost Issues

#### Issue: Can't add CNAME for root domain (@)

**Solution:** This is normal! Bluehost doesn't support CNAME for root domain. Use A records instead (as shown in Step 2).

#### Issue: DNS changes not showing up

**Solutions:**
1. Clear your browser cache
2. Wait longer (DNS can take up to 48 hours)
3. Check DNS propagation using online tools
4. Verify records were saved correctly in Bluehost DNS Zone Editor

#### Issue: www subdomain not working

**Solutions:**
1. Verify CNAME record for `www` points to `gits5213.github.io`
2. Check TTL is set correctly (14400 or default)
3. Wait for DNS propagation
4. In GitHub Pages settings, you can add both root and www domains

#### Issue: Site shows Bluehost default page

**Solutions:**
1. Remove any existing A records pointing to Bluehost IPs
2. Ensure GitHub Pages A records are the only ones for root domain
3. Wait for DNS propagation
4. Clear browser cache

## DNS Record Summary

After configuration, your Bluehost DNS Zone Editor should show:

| Type | Host Record | Points To | TTL |
|------|-------------|-----------|-----|
| A | @ | 185.199.108.153 | 14400 |
| A | @ | 185.199.109.153 | 14400 |
| A | @ | 185.199.110.153 | 14400 |
| A | @ | 185.199.111.153 | 14400 |
| CNAME | www | gits5213.github.io | 14400 |

**Note:** Keep any existing MX records (for email) and other necessary records. Only modify A and CNAME records related to your website.

## Troubleshooting

### Domain Not Resolving

**Symptoms:** Domain shows "Site can't be reached" or DNS error

**Solutions:**
1. Verify all four A records are added correctly
2. Wait longer for DNS propagation (can take up to 48 hours)
3. Check DNS records using `dig` or online DNS checker
4. Ensure you didn't leave conflicting records

### SSL Certificate Not Provisioned

**Symptoms:** Site loads but shows "Not Secure" or SSL error

**Solutions:**
1. Wait 10-15 minutes after DNS propagates
2. Check GitHub Pages settings for SSL status
3. Ensure "Enforce HTTPS" is enabled in Pages settings
4. Try accessing `http://` version first, then HTTPS
5. Clear browser cache and try again

### Site Shows Wrong Content

**Symptoms:** Custom domain shows content but with wrong paths/assets

**Solutions:**
1. Verify `CUSTOM_DOMAIN=true` secret is set in GitHub repository
2. Trigger a new deployment
3. Check that build output doesn't include basePath

## After Setup

Once your custom domain is working:

1. ✅ Your site will be accessible at `https://visiblehomeinspections.com`
2. ✅ The www subdomain (`www.visiblehomeinspections.com`) will also work
3. ✅ The GitHub Pages subdomain (`gits5213.github.io/visible-home-inspections/`) will still work
4. ✅ All future deployments will automatically work with your custom domain
5. ✅ SSL certificate will auto-renew

## Important Notes

- **Don't delete the `CNAME` file** that GitHub creates in your repository
- **DNS changes can take time** - be patient (up to 48 hours)
- **SSL provisioning takes 5-10 minutes** after DNS propagates
- **Keep MX records** if you're using email with your domain
- **Future deployments** automatically work with custom domain (no extra configuration needed)

## Support

If you're still having issues:
- Check [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- Review DNS records with online DNS checker
- Contact Bluehost support for DNS-related issues
- Check GitHub Pages status page

Your custom domain should be working within 24-48 hours! 🚀

