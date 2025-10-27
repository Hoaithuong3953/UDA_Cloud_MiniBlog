# 📝 Post Management App - Base Structure

## 🎯 Project Overview

This is a **base structure** that provides the foundation for implementing **3 core functions**:
- ➕ **Add Post** - Create new blog posts
- ✏️ **Edit Post** - Update existing posts  
- 🔍 **Search Post** - Find posts by title or content

## 🏗️ Architecture

**MVC Pattern** with modern web technologies:
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL
- **Template Engine**: EJS
- **Deployment**: Render Platform
- **Frontend**: HTML5 + CSS3 + JavaScript

## 📁 Project Structure

```
final_project/
├── src/                        # Source code directory
│   ├── app.js                  # 🚀 Main Express server entry point
│   ├── db.js                   # 🗄️ PostgreSQL database connection
│   ├── routes/                 # 🛣️ API route definitions
│   │   └── postRoutes.js       # Post-related API routes (TODO)
│   ├── controllers/            # 🎮 Business logic handlers
│   │   └── postController.js   # Post operations (TODO)
│   ├── models/                 # 📊 Data models & database operations
│   │   └── postModel.js        # Post data model (TODO)
│   └── views/                  # 🎨 EJS templates
│       ├── layout.ejs          # Main layout template
│       └── pages/              # Page templates
│           ├── home.ejs        # Home page
│           ├── posts.ejs       # Posts listing page
│           ├── add-post.ejs    # Add new post page
│           ├── edit-post.ejs   # Edit post page
│           └── search-posts.ejs # Search posts page
│
├── public/                     # Static assets
│   ├── css/
│   │   └── style.css          # Base stylesheet (TODO: Complete styling)
│   └── js/
│       └── script.js          # Base JavaScript (TODO: Complete functionality)
│
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies & scripts
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Local Development

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd final_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**
   ```sql
   CREATE DATABASE post_management_db;
   CREATE TABLE posts (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       content TEXT NOT NULL,
       author VARCHAR(100) DEFAULT 'Anonymous',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Set up environment variables**
   
   **Option 1: Using DATABASE_URL (Recommended)**
   ```bash
   # Create .env file
   PORT=3000
   NODE_ENV=development
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/post_management_db
   ```
   
   **Option 2: Using individual parameters**
   ```bash
   # Create .env file
   PORT=3000
   NODE_ENV=development
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=post_management_db
   DB_USER=postgres
   DB_PASSWORD=your_password
   ```

5. **Start development server**
   ```bash
   npm start
   ```

6. **Open browser**
   ```
   http://localhost:3000
   ```

## 📡 API Endpoints (TODO: Implement)

### Post Management
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `GET /api/posts/search?query=...` - Search posts

### Web Pages
- `GET /` - Home page
- `GET /posts` - Posts listing page
- `GET /posts/add` - Add new post page
- `GET /posts/edit/:id` - Edit post page
- `GET /posts/search` - Search posts page
- `GET /api/health` - Health check

## 🎨 Features (TODO: Implement)

### ✅ Base Structure Ready
- **MVC Architecture**: Controllers, Models, Routes, Views
- **Database Connection**: PostgreSQL setup
- **Template Engine**: EJS with layout system
- **Static Assets**: CSS and JavaScript structure
- **Navigation**: Basic navigation between pages

### 🚧 TODO: Core Functions
- **Add Post**: Create new blog posts with title, content, and author
- **Edit Post**: Update existing posts with full form validation
- **Search Post**: Find posts by title or content with case-insensitive search

### 🚧 TODO: Additional Features
- **Responsive Design**: Complete mobile-friendly interface
- **Real-time Validation**: Client-side form validation
- **Error Handling**: Comprehensive error management
- **API Integration**: Complete RESTful API with JSON responses
- **Database Integration**: Full PostgreSQL operations

## 🛠️ Technology Stack

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **PostgreSQL**: Relational database
- **pg**: PostgreSQL client for Node.js
- **dotenv**: Environment variables management

### Frontend
- **EJS**: Server-side template engine
- **HTML5**: Semantic markup
- **CSS3**: Base styling (TODO: Complete styling)
- **JavaScript**: Base functionality (TODO: Complete implementation)

### Deployment
- **Render**: Cloud platform for hosting
- **PostgreSQL on Render**: Managed database service

## 📋 Development Tasks

### For Backend Developers:

#### 📍 **Controllers** (`src/controllers/postController.js`)
- [ ] Implement `getAllPosts()` function
- [ ] Implement `getPostById()` function
- [ ] Implement `createPost()` function
- [ ] Implement `updatePost()` function
- [ ] Implement `searchPosts()` function
- [ ] Implement `deletePost()` function

#### 📍 **Models** (`src/models/postModel.js`)
- [ ] Implement `findAll()` database query
- [ ] Implement `findById()` database query
- [ ] Implement `create()` database query
- [ ] Implement `update()` database query
- [ ] Implement `search()` database query
- [ ] Implement `delete()` database query

#### 📍 **Routes** (`src/routes/postRoutes.js`)
- [ ] Test all API endpoints
- [ ] Add input validation middleware
- [ ] Add error handling middleware

### For Frontend Developers:

#### 📍 **CSS** (`public/css/style.css`)
- [ ] Complete responsive design
- [ ] Add animations and transitions
- [ ] Create component styles
- [ ] Optimize for mobile devices

#### 📍 **JavaScript** (`public/js/script.js`)
- [ ] Implement `loadPosts()` function
- [ ] Implement `addPost()` function
- [ ] Implement `editPost()` function
- [ ] Implement `searchPosts()` function
- [ ] Implement `deletePost()` function
- [ ] Add form validation
- [ ] Add error handling

#### 📍 **EJS Templates** (`src/views/pages/`)
- [ ] Complete form functionality
- [ ] Add dynamic content rendering
- [ ] Implement search results display
- [ ] Add loading states

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run tests (to be implemented)

## 📊 Database Schema

```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) DEFAULT 'Anonymous',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Database Configuration

**Option 1: DATABASE_URL (Recommended)**
```env
DATABASE_URL=postgresql://username:password@host:port/database
```

**Option 2: Individual Parameters**
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=post_management_db
DB_USER=postgres
DB_PASSWORD=your_password
```

### Example .env File

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration (Choose one option)
# Option 1: Using DATABASE_URL
DATABASE_URL=postgresql://postgres:password123@localhost:5432/post_management_db

# Option 2: Using individual parameters
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=post_management_db
# DB_USER=postgres
# DB_PASSWORD=password123
```

### For Render Deployment

When deploying to Render, use the **Internal Database URL** provided by Render:

```env
# Render will automatically provide this
DATABASE_URL=postgresql://user:pass@dpg-abc123-a.oregon-postgres.render.com:5432/post_management_db
```

## 🚨 Troubleshooting

### Common Issues

**1. Database Connection Error**
```
❌ Database connection error: connect ECONNREFUSED 127.0.0.1:5432
```
**Solution**: Check if PostgreSQL is running and verify connection parameters in `.env`

**2. View Not Found Error**
```
Error: Failed to lookup view "index" in views directory
```
**Solution**: Make sure you're running `npm start` (not `node index.js`) and views are in `src/views/`

**3. Environment Variables Not Loading**
```
undefined database configuration
```
**Solution**: Ensure `.env` file exists in project root and contains required variables

**4. Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution**: Change PORT in `.env` or kill the process using port 3000

### Database Setup Issues

**PostgreSQL Not Running**
```bash
# Windows
net start postgresql-x64-13

# macOS
brew services start postgresql

# Linux
sudo systemctl start postgresql
```

**Create Database**
```sql
-- Connect to PostgreSQL
psql -U postgres

-- Create database
CREATE DATABASE post_management_db;

-- Create table
\c post_management_db;
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) DEFAULT 'Anonymous',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
