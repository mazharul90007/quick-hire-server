import { Server } from "http";
import app from "./app.js";
import config from "./app/config/index.js";
import { seedSuperAdmin } from "./app/DB/seed.js";

const port = config.port || 4000;

let server: Server;

async function startServer() {
  try {
    //seed Super admin
    await seedSuperAdmin();

    server = app.listen(port, () => {
      console.log("QuickHire Server is running on port: ", port);
    });
  } catch (error) {
    console.error("Failed to start server: ", error);
  }
}

startServer();
