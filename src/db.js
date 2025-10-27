const { Pool } = require('pg');

// Database configuration for PostgreSQL
// Supports both DATABASE_URL and individual parameters
let dbConfig;

if (process.env.DATABASE_URL) {
    // Use DATABASE_URL (for Render deployment)
    dbConfig = {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    };
} else {
    // Use individual parameters (for local development)
    dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'post_management_db',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'password',
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    };
}

// Create connection pool
const pool = new Pool(dbConfig);

// Test database connection
pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
    console.error('❌ Database connection error:', err);
});

// Database helper functions
const db = {
    // Execute query
    async query(text, params) {
        const start = Date.now();
        try {
            const res = await pool.query(text, params);
            const duration = Date.now() - start;
            console.log('Executed query', { text, duration, rows: res.rowCount });
            return res;
        } catch (error) {
            console.error('Database query error:', error);
            throw error;
        }
    },

    // Get client from pool
    async getClient() {
        return await pool.connect();
    },

    // Close all connections
    async close() {
        await pool.end();
    }
};

module.exports = db;