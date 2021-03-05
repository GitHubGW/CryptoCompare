const socket = io("/");

socket.on("getCoin", (parsedData) => {
  console.log(parsedData);
});