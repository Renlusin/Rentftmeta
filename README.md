# 🔮 TFT Meta Advisor

**Ứng dụng web gợi ý đội hình TFT meta** với giao diện đẹp, tìm kiếm thông minh và hỗ trợ mobile/iPad.

## ✨ Tính năng chính

- 🔍 **Tìm kiếm thông minh** - Theo tướng, tộc hệ, lõi tăng cường
- 📱 **Responsive design** - Hoạt động tốt trên mọi thiết bị
- 🎨 **Giao diện đẹp** - Tailwind CSS với gradient và animations
- ⚡ **Nhanh chóng** - Vite + React cho performance tối ưu
- 📋 **Chi tiết đầy đủ** - Carry, trang bị, lõi, độ khó, chi phí

## 🚀 Chạy nhanh

```bash
# Cài đặt
npm install

# Chạy development
npm run dev

# Hoặc double-click file khoi-dong.bat
```

## 🌐 Demo Online

[🔗 Xem demo tại đây](https://tft-meta-advisor.vercel.app) *(sẽ có sau khi deploy)*

## 📱 Sử dụng trên iPad

1. Mở Safari → Truy cập link ứng dụng
2. Nhấn Share → "Add to Home Screen"
3. Sử dụng như native app!

## 🔧 Thêm đội hình mới

Chỉnh sửa `src/mockData.ts`:

```typescript
"Tên Đội Hình": {
  carry: ["Tướng Carry"],
  core_units: ["Tướng 1", "Tướng 2"],
  items: { "Tướng Carry": ["Item 1", "Item 2"] },
  augments: ["Lõi 1", "Lõi 2"],
  cost: 50,
  difficulty: "Trung bình",
  description: "Mô tả đội hình"
}
```

## 🚀 Deploy

**Cách nhanh nhất:**
1. Push lên GitHub
2. Kết nối với [Vercel](https://vercel.com)
3. Auto-deploy!

*Xem file `DEPLOY.md` để biết chi tiết.*

---

**Made with ❤️ for TFT community**