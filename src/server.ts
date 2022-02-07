import app from "./app";

app.listen(process.env.PORT || 5000, () =>
  console.log("listening to port 5000")
);
