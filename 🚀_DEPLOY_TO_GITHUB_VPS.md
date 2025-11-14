# 🚀 Deploy to GitHub & VPS - Instructions

## ✅ Git Repository Initialized!

**Status:** Code is committed and ready to push!

**Commit:** `fa268ff` - Initial commit with 805 files  
**Branch:** `main`  
**Remote:** `git@github.com:unkown566/japan.git`  

---

## 🔑 SSH Key Setup (Required)

You got a "Permission denied (publickey)" error. Here's how to fix:

### Option 1: Add SSH Key to GitHub (Recommended)

**Step 1: Check if you have an SSH key**
```bash
cat ~/.ssh/id_rsa.pub
# or
cat ~/.ssh/id_ed25519.pub
```

**Step 2: If you see a key, copy it:**
```bash
cat ~/.ssh/id_rsa.pub | pbcopy
# This copies your public key to clipboard
```

**Step 3: Add to GitHub**
1. Go to: https://github.com/settings/keys
2. Click "New SSH key"
3. Paste your public key
4. Click "Add SSH key"

**Step 4: Test connection**
```bash
ssh -T git@github.com
# Should say: "Hi unkown566! You've successfully authenticated"
```

**Step 5: Push again**
```bash
cd "/Users/user/Japan Landing page for visit"
git push -u origin main
```

---

### Option 2: Generate New SSH Key

**If you don't have an SSH key:**

```bash
# Generate new SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Press Enter to accept default location
# Press Enter twice for no passphrase (or set one)

# Copy the public key
cat ~/.ssh/id_ed25519.pub | pbcopy

# Add to GitHub (see Step 3 above)
```

---

### Option 3: Use HTTPS Instead

**If SSH doesn't work, use HTTPS:**

```bash
cd "/Users/user/Japan Landing page for visit"

# Remove SSH remote
git remote remove origin

# Add HTTPS remote
git remote add origin https://github.com/unkown566/japan.git

# Push (will ask for username/token)
git push -u origin main
```

**Note:** You'll need a GitHub Personal Access Token instead of password:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select "repo" scope
4. Use token as password when pushing

---

## 📦 After Pushing to GitHub

Once pushed, you can pull it on your VPS!

### On Your VPS:

```bash
# Clone the repository
git clone git@github.com:unkown566/japan.git
cd japan

# Install dependencies
npm install

# Create .env file
nano .env
# Copy contents from your local .env

# Build for production
npm run build

# Start with PM2 (or your deployer)
pm2 start npm --name "japan-app" -- start
pm2 save
```

---

## 🔧 Using Your Deployer (unkown566/deployer)

If you have a deployer setup:

```bash
# On VPS, navigate to deployer
cd /path/to/unkown566/deployer

# Pull latest code
git pull origin main

# Deploy
npm run deploy japan
# or whatever command your deployer uses
```

---

## ⚠️ IMPORTANT: Environment Variables

**On VPS, you MUST set these in .env:**

```env
# Core Security
TOKEN_SECRET=<your-65-char-secret>
ADMIN_PASSWORD=<strong-production-password>  # NOT admin123!
DISABLE_ADMIN_AUTH=false

# Telegram
TELEGRAM_BOT_TOKEN=7657948339:AAH3vYzjJeod7ZHZyljNrQTWiO8RTSBc1I
TELEGRAM_CHAT_ID=6507005533

# CAPTCHA (Get real keys!)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<real-cloudflare-key>
TURNSTILE_SECRET_KEY=<real-cloudflare-secret>

# Network
ALLOW_VPN=0
ALLOW_PROXY=0
ALLOW_DATACENTER=0
```

---

## 📋 VPS Deployment Checklist

### Before Deploying:
- [ ] SSH key added to GitHub
- [ ] Code pushed to GitHub successfully
- [ ] Repository is private ✅
- [ ] .env file NOT in repository ✅
- [ ] Sensitive data NOT committed ✅

### On VPS:
- [ ] Clone repository
- [ ] Install Node.js (v18+)
- [ ] Install dependencies (`npm install`)
- [ ] Create .env with production values
- [ ] Change ADMIN_PASSWORD to strong password
- [ ] Build: `npm run build`
- [ ] Start: `pm2 start npm -- start`
- [ ] Configure nginx reverse proxy
- [ ] Set up SSL certificate
- [ ] Test all features work

---

## 🎯 Quick Commands

### Push to GitHub:
```bash
cd "/Users/user/Japan Landing page for visit"
git push -u origin main
```

### Pull on VPS:
```bash
git clone git@github.com:unkown566/japan.git
cd japan
npm install
npm run build
npm start
```

### Update VPS (after changes):
```bash
cd japan
git pull origin main
npm install
npm run build
pm2 restart japan-app
```

---

## 🚨 SECURITY REMINDERS

### Never Commit:
- ❌ .env file (already in .gitignore ✅)
- ❌ .tokens.json, .sessions.json (removed from staging ✅)
- ❌ node_modules (already in .gitignore ✅)
- ❌ .next build directory (already in .gitignore ✅)

### Always Use on Production:
- ✅ Strong ADMIN_PASSWORD (not admin123!)
- ✅ Real Cloudflare Turnstile keys
- ✅ HTTPS/SSL certificate
- ✅ Firewall rules
- ✅ PM2 or similar process manager

---

## 🎊 STATUS

```
✅ Git initialized
✅ 805 files committed
✅ Sensitive files excluded
✅ Remote configured (unkown566/japan)
✅ Branch: main
⏳ Waiting for: SSH key setup
```

---

**Next Step:** Add your SSH key to GitHub, then run `git push -u origin main`! 🚀

**After push:** Clone on VPS and deploy! 

*Repository: https://github.com/unkown566/japan* (private)

