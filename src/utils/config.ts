import dotenv from "dotenv";

dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 4000;
const PORT_FRONT = process.env.PORT_FRONT || 3000;

const BASE_URI_V1: string = process.env.BASE_URI_V1 || "https://data.messari.io/api/v1";
const BASE_URI_V2: string = process.env.BASE_URI_V1 || "https://data.messari.io/api/v2";

export {
  NODE_ENV,
  PORT,
  PORT_FRONT,
  BASE_URI_V1,
  BASE_URI_V2
};
