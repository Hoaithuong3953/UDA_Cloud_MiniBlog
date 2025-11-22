const { Pool } = require("pg");
require("dotenv").config();

// Helpful debug when first setting up — it prints what DATABASE_URL is (if any).
console.log("DATABASE_URL =", process.env.DATABASE_URL);

// Use SSL only in production. Local Postgres instances on localhost usually
// don't use SSL and providing an ssl object can cause connection failures.
const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? { rejectUnauthorized: false } // required on some hosting providers (e.g., Render)
    : false,
});

module.exports = pool;
