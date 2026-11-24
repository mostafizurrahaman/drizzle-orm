import type { Server } from "http";
import app from "./app.ts";

let server: Server;

const bootstrap = async () => {
  try {
    // db connection:
    server = app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();


process.on("uncaughtException", (err) => {
  console.log("=== UNCAUGHT EXCEPTION ===", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("===== unhandledRejection ========");
  console.log(" ===== Reason ====", reason);

  process.exit(1);
});
