const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.connectionString,
  ssl: {
    rejectUnauthorized: false, // Ensure SSL is handled correctly
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
