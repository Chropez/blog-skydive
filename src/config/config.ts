import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const SERVER = {
  hostname: HOST,
  port: PORT,
};

const config = {
  server: SERVER,
};

export default config;
