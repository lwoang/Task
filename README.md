# Hệ thống quản lý công việc nhóm

Một ứng dụng quản lý công việc theo thời gian thực, hỗ trợ phân quyền (Admin/Project Manager/Thành viên), theo dõi tiến độ, cộng tác và nhắc việc.

## Chức năng chính
- Xác thực người dùng, phân quyền:
  - Admin: quản trị người dùng toàn hệ thống.
  - Project Manager (PM): tạo/biên tập task, quản lý team riêng, xem báo cáo hiệu suất.
  - Thành viên: xem/thực hiện các task được giao.
- Quản lý Task:
  - Tạo/sửa/xóa/khôi phục, gán team, đính kèm assets/links, ước lượng/ghi nhận giờ, phụ thuộc (dependencies).
  - Quy trình stage nghiêm ngặt: todo → in progress → completed.
  - Subtask: tạo/sửa trạng thái/xóa, realtime đồng bộ.
  - Bình luận với @mentions, sửa/xóa, realtime đồng bộ.
  - Nhắc việc in‑app/email, tự động gửi bằng cron; realtime cập nhật.
- Giao diện làm việc:
  - Board view (Kanban), Calendar view, Gantt chart, Task detail (Activities/Comments/Reminders).
  - Dashboard tổng quan, biểu đồ, danh sách task gần nhất.
  - Báo cáo hiệu suất (lọc theo thời gian/thành viên) cho PM.
  - Thống kê trạng thái theo người dùng ở trang Status.
- Thông báo realtime:
  - Thông báo khi được gán task, nhắc việc, bị mention, task/subtask thay đổi.
  - Panel thông báo: phân trang, lọc chưa đọc, đánh dấu đã đọc/xóa từng cái hoặc tất cả, đếm số chưa đọc cập nhật realtime.
- Quản lý Team (PM):
  - Thêm/xóa thành viên team theo email, tìm kiếm người dùng toàn hệ thống (PM/Admin).

## Công nghệ sử dụng

### Frontend
  - React + Vite, React Router
  - Redux Toolkit + RTK Query (quản lý state/API)
  - Tailwind CSS
  - Socket.IO Client (realtime)
  - moment (xử lý thời gian)
  
### Backend
  - Node.js, Express
  - MongoDB + Mongoose
  - Socket.IO (realtime events)
  - JWT (cookie) authentication, middleware bảo vệ route
  - node-cron (gửi nhắc việc theo lịch)
  - CORS linh hoạt, cấu hình theo biến môi trường
