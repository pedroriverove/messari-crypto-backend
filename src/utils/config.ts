import dotenv from "dotenv";

dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 4000;

const BASE_URI: string = process.env.BASE_URI_V1 || "https://data.messari.io/api/v2";

export {
  NODE_ENV,
  PORT,
  BASE_URI,
};
