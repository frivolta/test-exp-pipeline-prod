import express from "express";
// rest of the code remains same
const app = express();
const PORT = 4000;
app.get("/", (req, res) => res.send("You made it m8, again"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
