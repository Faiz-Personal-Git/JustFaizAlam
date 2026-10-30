
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import { configuration } from "./src/config/configuration.js";

const PORT = configuration.port || 5000;

const startServer = async () => {
    try {
        await connectDB();

        const server = app.listen(PORT, () => {
            console.log(`
                ========================================
                Server Started Successfully
                Environment: ${configuration.node_env}
                Port: ${PORT}
                URL: http://localhost:${PORT}
                ========================================
            `);
        });

        // Graceful shutdown
        const shutdown = (signal) => {
            console.log(`${signal} received. Shutting down...`);

            server.close(async () => {
                const mongoose = await import("mongoose");
                await mongoose.default.connection.close();
                process.exit(0);
            });
        };

        process.on("SIGTERM", () => shutdown("SIGTERM"));
        process.on("SIGINT", () => shutdown("SIGINT"));

    } catch (error) {
        console.error("Server Startup Failed:", error);
        process.exit(1);
    }
};

startServer();
