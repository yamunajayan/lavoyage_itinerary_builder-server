import "dotenv/config";

export default {
  client: "postgresql",
  connection: {
    host: process.env.POSTGRES_HOST,
    port: process.env.DB_PORT,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    charset: "utf8",
    ssl: {
      rejectUnauthorized: false, // Important for Vercel's managed PostgreSQL
    },
  },
};
