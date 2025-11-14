# 🚀 Push to GitHub - Manual Instructions

## ✅ Code is Ready!

**Status:** 
- ✅ Git initialized
- ✅ 805 files committed
- ✅ Remote configured
- ✅ Branch: main
- ⏳ Need to push manually

---

## 🔑 **YOU NEED TO DO THIS IN YOUR TERMINAL:**

### **Option 1: Using SSH (With Passphrase)**

Open your terminal and run:

```bash
cd "/Users/user/Japan Landing page for visit"

# Switch back to SSH
git remote set-url origin git@github.com:unkown566/japan.git

# Add SSH key to agent (enter your passphrase when prompted)
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
# Enter your SSH key passphrase

# Push to GitHub
git push -u origin main
```

---

### **Option 2: Using HTTPS (Easier)**

If you don't remember the SSH passphrase:

```bash
cd "/Users/user/Japan Landing page for visit"

# Use HTTPS
git remote set-url origin https://github.com/unkown566/japan.git

# Push (will ask for GitHub username and password/token)
git push -u origin main
```

**Note:** For password, use a **GitHub Personal Access Token**:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select "repo" scope
4. Copy the token
5. Use it as password when pushing

---

## 📝 **Quick Copy-Paste:**

**SSH Method:**
```bash
cd "/Users/user/Japan Landing page for visit"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
git remote set-url origin git@github.com:unkown566/japan.git
git push -u origin main
```

**HTTPS Method:**
```bash
cd "/Users/user/Japan Landing page for visit"
git remote set-url origin https://github.com/unkown566/japan.git
git push -u origin main
# Enter: unkown566
# Enter: <your-github-token>
```

---

## 🎯 **AFTER SUCCESSFUL PUSH:**

You'll see something like:
```
Enumerating objects: 1000+
Counting objects: 100%
Writing objects: 100%
To github.com:unkown566/japan.git
 * [new branch]      main -> main
```

---

## 🚀 **THEN DEPLOY TO VPS:**

```bash
# SSH to your VPS
ssh root@4.216.121.192

# Clone the repo
git clone git@github.com:unkown566/japan.git japan-app
cd japan-app

# Install dependencies
npm install

# Create .env file with production values
nano .env

# Build
npm run build

# Start with PM2
pm2 start npm --name "japan" -- start
pm2 save
pm2 startup
```

---

## ⚠️ IMPORTANT FOR VPS:

### Create `.env` on VPS:
```env
TOKEN_SECRET=<your-65-char-secret>
ADMIN_PASSWORD=<strong-password-NOT-admin123>
DISABLE_ADMIN_AUTH=false

TELEGRAM_BOT_TOKEN=7657948339:AAH3vYzjJeod7ZHZyljNrQTWiO8RTSBc1I
TELEGRAM_CHAT_ID=6507005533

NEXT_PUBLIC_TURNSTILE_SITE_KEY=<real-key>
TURNSTILE_SECRET_KEY=<real-key>

ALLOW_VPN=0
ALLOW_PROXY=0
ALLOW_DATACENTER=0

NODE_ENV=production
```

---

## 🎊 **CURRENT STATUS:**

```
✅ Code committed (805 files)
✅ Remote configured
✅ Branch: main
✅ SSH key identified
⏳ Waiting: Manual push from terminal
```

---

**Copy one of the command blocks above, paste in your terminal, and push!** 🚀

**Your code is ready to deploy!**

