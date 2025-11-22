# API Contract

## Base URL
http://your-backend-domain.com/api

---

## 1. POST /posts – Tạo bài viết mới

```json
POST /api/posts
Content-Type: application/json

{
  "title": "Tiêu đề bài viết",
  "content": "Nội dung bài viết",
  "authorId": "user123"
}

Response 201 (Created):

{
  "id": "post123",
  "title": "Tiêu đề bài viết",
  "content": "Nội dung bài viết",
  "authorId": "user123",
  "createdAt": "2025-10-27T07:00:00Z",
  "updatedAt": "2025-10-27T07:00:00Z"
}

Errors:

400 INVALID_REQUEST Dữ liệu gửi lên không hợp lệ
500 SERVER_ERROR Lỗi server

```

## 2. PUT /posts/:id – Cập nhật bài viết

```json
PUT /api/posts/post123
Content-Type: application/json

{
  "title": "Tiêu đề mới",
  "content": "Nội dung mới"
}

Response 200 (OK):

{
  "id": "post123",
  "title": "Tiêu đề mới",
  "content": "Nội dung mới",
  "authorId": "user123",
  "createdAt": "2025-10-27T07:00:00Z",
  "updatedAt": "2025-10-27T08:00:00Z"
}

Errors:

400 INVALID_REQUEST Dữ liệu gửi lên không hợp lệ
404 NOT_FOUND Bài viết không tồn tại
500 SERVER_ERROR Lỗi server

```

## 3. GET /posts – Lấy danh sách bài viết (Optional)

```json

GET /api/posts

Response 200 (OK):

[
  {
    "id": "post123",
    "title": "Tiêu đề bài viết",
    "content": "Nội dung bài viết",
    "authorId": "user123",
    "createdAt": "2025-10-27T07:00:00Z",
    "updatedAt": "2025-10-27T07:00:00Z"
  },
  {
    "id": "post124",
    "title": "Tiêu đề khác",
    "content": "Nội dung khác",
    "authorId": "user456",
    "createdAt": "2025-10-27T07:10:00Z",
    "updatedAt": "2025-10-27T07:10:00Z"
  }
]

Errors:

500 SERVER_ERROR Lỗi server

```

## 4. Notes / Guidelines

- Datetime format: ISO 8601 (UTC)
- Content-Type: application/json

Error response format:

```json

{
  "code": "ERROR_CODE",
  "message": "Thông điệp lỗi"
}
