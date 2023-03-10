import MetricsService from "./services/metricsService";
import app from "./app";
import logger from "./utils/logger";
import socketIO, { Socket } from "socket.io";
import { PORT, PORT_FRONT } from "./utils/config";

const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

const metricsService: MetricsService = new MetricsService();

const socket = new socketIO.Server(server, {
  cors: {
    origin: `http://localhost:${PORT_FRONT}`
  }
});

socket.on(`connection`, (socket: Socket) => {
  console.log(`client connected: `, socket.id);

  socket.on(`disconnect`, () => {
    console.log("client disconnected");
  });
});

const assets = async () => {
  socket.emit("assets", await metricsService.getAssets());
};

setInterval(() => {
  void assets();
}, 5000);
