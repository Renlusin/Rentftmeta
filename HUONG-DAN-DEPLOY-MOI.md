# 🚀 Hướng dẫn Deploy TFT Meta Advisor - Phiên bản mới

## ✅ Tình trạng hiện tại:
- ✅ Code đã sẵn sàng và được commit
- ✅ Đã xóa remote repository cũ (không tồn tại)
- ✅ Cần tạo repository GitHub mới

## 📋 Các bước thực hiện:

### Bước 1: Tạo GitHub Repository mới
1. Mở trình duyệt và vào: **https://github.com/new**
2. Đăng nhập với tài khoản GitHub của bạn
3. Repository name: **tft-meta-advisor-2025**
4. Description: **TFT Meta Advisor - Ứng dụng gợi ý đội hình TFT**
5. Chọn **Public**
6. **KHÔNG** tick "Add a README file"
7. **KHÔNG** tick "Add .gitignore"
8. **KHÔNG** tick "Choose a license"
9. Nhấn **Create repository**

### Bước 2: Kết nối với repository mới
Sau khi tạo repository, GitHub sẽ hiển thị các lệnh. Chạy các lệnh sau:

```bash
# Thay YOUR_USERNAME bằng username GitHub thực của bạn
git remote add origin https://github.com/YOUR_USERNAME/rentftmeta.git
git branch -M main
git push -u origin main
```

**Ví dụ cụ thể:**
```bash
git remote add origin https://github.com/chichkhi/tft-meta-advisor-2025.git
git branch -M main
git push -u origin main
```

### Bước 3: Deploy với Vercel
1. Vào: **https://vercel.com**
2. Nhấn **Sign up with GitHub** (hoặc Login nếu đã có tài khoản)
3. Cho phép Vercel truy cập GitHub repositories
4. Nhấn **New Project**
5. Tìm và chọn repository: **tft-meta-advisor-2025**
6. Framework Preset sẽ tự động detect: **Vite**
7. Nhấn **Deploy**
8. Chờ 2-3 phút để build hoàn thành

### Bước 4: Kiểm tra kết quả
- ✅ Repository có code trên GitHub: `https://github.com/YOUR_USERNAME/tft-meta-advisor-2025`
- ✅ Vercel build thành công (màn hình xanh với confetti)
- ✅ Website hoạt động: `https://tft-meta-advisor-2025-xxx.vercel.app`

## 🎯 Lệnh PowerShell để chạy:

Mở PowerShell và chạy từng lệnh:

```powershell
cd "C:\Users\PhucVu\tft-meta-advisor-complete"
git remote add origin https://github.com/YOUR_USERNAME/rentftmeta.git
git branch -M main
git push -u origin main
```

## 🚨 Nếu gặp lỗi:

**Lỗi authentication:** Đăng nhập GitHub trong browser trước
**Lỗi repository not found:** Kiểm tra tên repository và username
**Lỗi build trên Vercel:** Kiểm tra logs trong Vercel dashboard

## 📞 Sau khi hoàn thành:
Bạn sẽ có:
- 🌐 Website online 24/7
- 📱 Truy cập từ mọi thiết bị
- 🔄 Tự động deploy khi push code mới
- 📊 Analytics và monitoring từ Vercel
