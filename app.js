import express from "express";
import socketIO from "socket.io";
import { coinValue } from "./db";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);
const io = socketIO(server);

let apiKey = "f8c91c3da3c8dfb9c72c72b012bd85a35afae6c689938cb1df1803e8fdad3e33";
const WebSocket = require("ws");
const ccStreamer = new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=" + apiKey);

ccStreamer.on("open", function open() {
  var subRequest = {
    action: "SubAdd",
    subs: coinValue,
  };
  ccStreamer.send(JSON.stringify(subRequest));
});

ccStreamer.on("message", function incoming(data) {
  // console.log(data);
  const parsedData=JSON.parse(data);
  // console.log(parsedData);
  const parsedDataType=parsedData.TYPE;
  // const parsedDataFrom=parsedData.FROMSYMBOL;
  // const parsedDataTo=parsedData.TOSYMBOL;
  // console.log(parsedDataType);
  // console.log(parsedDataFrom);
  // console.log(parsedDataTo);

  if(parsedDataType==="5"){
    io.on("connection", (socket) => {
      console.log("✅ Connected SocketIO");
      socket.setMaxListeners(0);
      socket.join(parsedDataType);
      socket.emit("getCoin", parsedData);
    });
  }

});








