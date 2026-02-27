import app from "./app";
import config from "./app/config";
import { seedSuperAdmin } from "./app/DB/seed";
const port = config.port || 4000;
let server;
async function startServer() {
    try {
        //seed Super admin
        await seedSuperAdmin();
        server = app.listen(port, () => {
            console.log("QuickHire Server is running on port: ", port);
        });
    }
    catch (error) {
        console.error("Failed to start server: ", error);
    }
}
startServer();
//# sourceMappingURL=server.js.map