const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Ensure SSL is handled correctly
    host: "db.rwgdvcentksdtbumntov.supabase.co",
  },
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error connecting to database", err.stack);
  }
  console.log("Connected to Supabase via connection string!");
  release();
});

module.exports = pool;
