## Login

- **Method**: POST
- **Endpoint**: `/login`
- **Header**: `Content-Type: application/json`
- **Parameter**:
  - `username`: Nama pengguna.
  - `password`: Kata sandi pengguna.
- **Response**
  ```json
  {
    "status": true,
    "data": {
      "id": 1,
      "name": "John Doe",
      "picture": "https://...",
      "username": "john_doe"
    }
  }
  ```
- **Error Response**
  ```json
  {
    "status": false,
    "message": "Invalid username or password."
  }
  ```

## Daftar Petugas

- **Method**: GET
- **Endpoint**: `/petugas`
- **Header**: `Content-Type: application/json`
- **Response**
  ```json
  {
    "status": true,
    "data": [
      {
        "id": 1,
        "name": "John Doe",
        "picture": "https://...",
        "unit": "unit"
      },
      {
        "id": 2,
        "name": "John Doe",
        "picture": "https://...",
        "unit": "unit"
      },
      {
        "id": 3,
        "name": "John Doe",
        "picture": "https://...",
        "unit": "unit"
      }
    ]
  }
  ```
