# 🔧 Khắc phục lỗi 404: DEPLOYMENT_NOT_FOUND

## ❌ Nguyên nhân lỗi 404:
1. Repository GitHub chưa được tạo đúng cách
2. Code chưa được push lên GitHub
3. Vercel không tìm thấy repository
4. Build process bị lỗi

## ✅ Giải pháp từng bước:

### Bước 1: Xóa deployment cũ (nếu có)
1. Vào https://vercel.com/dashboard
2. Tìm project bị lỗi → Settings → Delete Project

### Bước 2: Tạo lại GitHub Repository
1. Vào https://github.com/new
2. Repository name: **tft-meta-advisor-new**
3. Chọn **Public**
4. **KHÔNG** tick "Add a README file"
5. Nhấn **Create repository**

### Bước 3: Chạy script deploy
1. Mở File Explorer
2. Vào thư mục: `C:\Users\PhucVu\tft-meta-advisor-complete`
3. Double-click file: **deploy-script.bat**
4. Làm theo hướng dẫn trong script

### Bước 4: Push code lên GitHub
```bash
# Thay YOUR_USERNAME bằng username GitHub thực của bạn
git remote add origin https://github.com/YOUR_USERNAME/tft-meta-advisor-new.git
git branch -M main
git push -u origin main
```

### Bước 5: Deploy lại với Vercel
1. Vào https://vercel.com
2. **New Project**
3. Chọn repository: **tft-meta-advisor-new**
4. Framework Preset: **Vite** (sẽ tự detect)
5. **Deploy**

## 🎯 Kiểm tra thành công:
- ✅ Repository có code trên GitHub
- ✅ Vercel build thành công (không có lỗi đỏ)
- ✅ Link website hoạt động: `https://tft-meta-advisor-new-xxx.vercel.app`

## 🚨 Nếu vẫn lỗi:
1. Kiểm tra file `package.json` có script "build"
2. Kiểm tra file `vite.config.js` cấu hình đúng
3. Xem logs trong Vercel để tìm lỗi cụ thể

## 📞 Liên hệ hỗ trợ:
- GitHub Issues: Tạo issue trong repository
- Vercel Support: https://vercel.com/help
