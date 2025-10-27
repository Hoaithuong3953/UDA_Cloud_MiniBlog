// TODO: Implement post model functions
// This file should contain database operations for posts

const db = require('../db');

class PostModel {
    // TODO: Implement these database operations
    
    // Get all posts from database
    static async findAll() {
        // TODO: Implement SQL query to get all posts
        // Example: const result = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
        // return result.rows;
        return [];
    }

    // Get post by ID
    static async findById(id) {
        // TODO: Implement SQL query to get post by ID
        // Example: const result = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
        // return result.rows[0];
        return null;
    }

    // Create new post
    static async create(postData) {
        // TODO: Implement SQL query to create new post
        // Example: const result = await db.query('INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *', [title, content, author]);
        // return result.rows[0];
        return null;
    }

    // Update post
    static async update(id, updateData) {
        // TODO: Implement SQL query to update post
        // Example: const result = await db.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);
        // return result.rows[0];
        return null;
    }

    // Search posts by title or content
    static async search(query) {
        // TODO: Implement SQL query to search posts
        // Example: const result = await db.query('SELECT * FROM posts WHERE title ILIKE $1 OR content ILIKE $1', [`%${query}%`]);
        // return result.rows;
        return [];
    }

    // Delete post
    static async delete(id) {
        // TODO: Implement SQL query to delete post
        // Example: const result = await db.query('DELETE FROM posts WHERE id = $1', [id]);
        // return result.rowCount > 0;
        return false;
    }
}

module.exports = PostModel;