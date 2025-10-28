const pool = require("../db");

exports.create = async ({ title, content, authorId }) => {
  const query = `
    INSERT INTO posts (title, content, author_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [title, content, authorId];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

exports.update = async (id, { title, content }) => {
  const query = `
    UPDATE posts
    SET title = COALESCE($2, title),
        content = COALESCE($3, content),
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `;
  const values = [id, title, content];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

exports.getAll = async () => {
  const { rows } = await pool.query("SELECT * FROM posts ORDER BY created_at DESC;");
  return rows;
};

exports.search = async (q, limit = 50) => {
  const query = `
    SELECT * FROM posts
    WHERE title ILIKE $1 OR content ILIKE $1
    ORDER BY created_at DESC
    LIMIT $2;
  `;
  const values = [`%${q}%`, limit];
  const { rows } = await pool.query(query, values);
  return rows;
};

exports.delete = async (id) => {
  const query = `DELETE FROM posts WHERE id = $1 RETURNING *;`;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};
