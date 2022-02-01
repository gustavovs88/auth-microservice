import server from "./server";

server.listen(process.env.PORT || 5000, () =>
  console.log("listening to port 5000")
);
