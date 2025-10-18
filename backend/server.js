require("dotenv").config();
const express = require("express");
const cors = require("cors");

const commentRouter = require("./src/routers/commentRouter");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/comment", commentRouter);

app.use((req, res) => res.status(404).json({ message: "Not Found" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
