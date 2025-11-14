# 🚀 Push to New Public Repository: japan-2020

## ✅ Repository Changed

Remote updated to: **github.com/unkown566/japan-2020**

---

## 📋 **YOU NEED TO RUN THIS IN YOUR TERMINAL:**

### **Step 1: Push to New Repo**

Open your terminal and run:

```bash
cd "/Users/user/Japan Landing page for visit"

# Add SSH key to agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
# Enter your SSH passphrase when prompted

# Set remote
git remote set-url origin git@github.com:unkown566/japan-2020.git

# Push
git push -u origin main --force
```

---

### **Step 2: Make Repository Public**

1. Go to: https://github.com/unkown566/japan-2020/settings
2. Scroll down to "Danger Zone"
3. Click "Change repository visibility"
4. Select "Public"
5. Confirm

---

### **Step 3: Deploy to VPS**

On your VPS terminal:

```bash
# Go to root
cd ~

# Remove old deployment
rm -rf ~/japan
rm -rf /var/www/japan-landing

# Clone new public repo (no SSH needed!)
git clone https://github.com/unkown566/japan-2020.git /var/www/japan-landing

# Go to app directory
cd /var/www/japan-landing

# Create .env file
cat > .env << 'EOF'
TOKEN_SECRET=1670e2f47d941d21e4eb61f6f435b8065e71240103a0809df7d28631f8b3b3b9
TELEGRAM_BOT_TOKEN=7657948339:AAH3vYzjJeod7ZHZyljNrQTWiO8RTSBc1I
TELEGRAM_CHAT_ID=6507005533
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAACAjsNzc5MTlyvB6
TURNSTILE_SECRET_KEY=0x4AAAAAACAjsLsV9zsIdqZYUK5ilLysLts
ALLOW_VPN=0
ALLOW_PROXY=0
ALLOW_DATACENTER=0
DISABLE_ADMIN_AUTH=false
ADMIN_PASSWORD=YourStrongPassword123!
NODE_ENV=production
PORT=3000
EOF

# Install dependencies
npm install

# Build
npm run build

# Stop old PM2 processes
pm2 delete all

# Start fresh
pm2 start npm --name "japan-landing" --cwd /var/www/japan-landing -- start
pm2 save

# Check status
pm2 status
pm2 logs japan-landing
```

---

### **Step 4: Test**

After deployment completes:

```bash
# Test locally on VPS
curl http://localhost:3000/admin/login | grep -o "<title>.*</title>"

# Should show admin login page, not 404!

# Test domain
curl https://eciconstuction.biz/admin/login
```

Then visit: **https://eciconstuction.biz/admin/login**

---

## 🎯 **SUMMARY:**

1. **On Mac:** Push to unkown566/japan-2020 (run Step 1)
2. **On GitHub:** Make repo public (Step 2)  
3. **On VPS:** Fresh clone and deploy (Step 3)
4. **Test:** Should work! (Step 4)

---

## ✅ **BENEFITS OF PUBLIC REPO:**

- ✅ No SSH key needed on VPS
- ✅ Anyone can clone
- ✅ Easier deployment
- ✅ Can use `git clone https://...` instead of SSH

---

**Run Step 1 in your Mac terminal, then Steps 2-4 on VPS!** 🚀

*Repository: https://github.com/unkown566/japan-2020* (will be public)

