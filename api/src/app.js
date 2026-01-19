import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

app.get('/test', (req, res) => {
  res.status(200).json({
    status: 'success',
        message: "Device successfully deleted",
        data:{}
  })
})

app.use((req, res) => {
  return res.status(404).json({
    status: "fail",
    message: `${req.originalUrl} not found!`,
  });
});

export default app;
// export {app};
