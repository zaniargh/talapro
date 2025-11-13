import { defineConfig, env } from "prisma/config";
import { config } from "dotenv";
import { resolve } from "path";

// Force-load this service's .env and override any pre-set env vars
config({ path: resolve(__dirname, ".env"), override: true });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
