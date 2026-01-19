import axios from "axios";
import express from "express";


const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

app.get("/test", async (req, res) => {
  const response = await axios.get("http://localhost:3000/test");
  console.log(response);

  res.status(response.status).json(response.message);
});

app.use((req, res) => {
  return res.status(404).json({
    status: "fail",
    message: `${req.originalUrl} not found!`,
  });
});

export default app;
// export {app};
