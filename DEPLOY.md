# 🚀 Hướng dẫn Deploy TFT Meta Advisor lên Vercel

## Bước 1: Chuẩn bị GitHub

### 1.1 Cấu hình Git (chỉ làm 1 lần)
```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

### 1.2 Tạo repository trên GitHub
1. Vào https://github.com
2. Đăng nhập hoặc tạo tài khoản mới
3. Nhấn nút "New repository"
4. Đặt tên: `tft-meta-advisor`
5. Chọn "Public"
6. Nhấn "Create repository"

### 1.3 Push code lên GitHub
```bash
# Trong thư mục dự án
git remote add origin https://github.com/USERNAME/tft-meta-advisor.git
git branch -M main
git push -u origin main
```

## Bước 2: Deploy với Vercel

### 2.1 Tạo tài khoản Vercel
1. Vào https://vercel.com
2. Nhấn "Sign up"
3. Chọn "Continue with GitHub"
4. Đăng nhập GitHub và cho phép Vercel truy cập

### 2.2 Deploy dự án
1. Trong dashboard Vercel, nhấn "New Project"
2. Chọn repository `tft-meta-advisor`
3. Vercel sẽ tự động detect React + Vite
4. Nhấn "Deploy"
5. Chờ 2-3 phút để build xong

### 2.3 Nhận link ứng dụng
- Vercel sẽ tạo link dạng: `https://tft-meta-advisor-xxx.vercel.app`
- Bạn có thể custom domain nếu muốn

## Bước 3: Cập nhật sau này

Mỗi khi bạn thay đổi code:
```bash
git add .
git commit -m "Cập nhật đội hình mới"
git push
```

Vercel sẽ tự động deploy lại!

## 🎯 Kết quả

✅ Ứng dụng chạy online 24/7
✅ Truy cập từ bất kỳ thiết bị nào
✅ Chia sẻ link cho bạn bè
✅ Tự động cập nhật khi push code mới

## 🔧 Troubleshooting

**Lỗi build:** Kiểm tra file `package.json` có đúng dependencies
**Lỗi 404:** Đảm bảo file `index.html` có trong thư mục gốc
**Lỗi Tailwind:** Kiểm tra `tailwind.config.js` và `postcss.config.js`