const router = require("express").Router();
const pool = require("../db");

// create wishes
router.post("/wishes", async (req, res) => {
  try {
    const { name, message } = req.body;
    const result = await pool.query(
      "INSERT INTO guestbook ( name, message) VALUES ($1, $2) RETURNING *",
      [name, message]
    );
    const wishesData = result.rows[0];
    res.status(200).json(wishesData);
  } catch (error) {
    console.error("Error creating wishes", error);
    res.status(500).json({ message: "Server error" });
  }
});

// get wishes
router.get("/wishes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * from guestbook ORDER BY id DESC");
    const wishesData = result.rows;
    res.status(200).json(wishesData);
  } catch (error) {
    console.error("Error getting wishes", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
