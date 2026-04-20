const pool = require("./db");

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const result = await pool.query("SELECT * FROM peserta ORDER BY id DESC");
      return res.status(200).json(result.rows);
    }

    if (req.method === "POST") {
      const { nama, kelas, juz } = req.body;

      if (!nama || !kelas || !juz) {
        return res.status(400).json({ message: "Data tidak lengkap" });
      }

      await pool.query(
        "INSERT INTO peserta (nama, kelas, juz) VALUES ($1, $2, $3)",
        [nama, kelas, juz],
      );

      return res.status(200).json({ message: "Berhasil tambah data" });
    }

    if (req.method === "DELETE") {
      const { id } = req.query;

      await pool.query("DELETE FROM peserta WHERE id=$1", [id]);

      return res.status(200).json({ message: "Data dihapus" });
    }

    return res.status(405).json({ message: "Method tidak diizinkan" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
