
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";

import * as routes from "./routes/index.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";
import { configuration } from "./config/configuration.js";

const app = express();

// ==========================================
// TRUST PROXY
// ==========================================

if (configuration.node_env === "production") {
    app.set("trust proxy", 1);
}

// ==========================================
// SECURITY MIDDLEWARE
// ==========================================

app.use(helmet());

app.use(cors({
    origin: configuration.clientUrl?.split(",") || [],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// ==========================================
// REQUEST PARSERS
// ==========================================

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({
    extended: true,
    limit: "10mb"
}));

app.use(cookieParser());

// ==========================================
// DATA SANITIZATION
// ==========================================

app.use(mongoSanitize());

// ==========================================
// COMPRESSION
// ==========================================

app.use(compression());

// ==========================================
// REQUEST LOGGER
// ==========================================

if (configuration.node_env !== "test") {
    app.use(morgan("combined"));
}

// ==========================================
// GLOBAL RATE LIMITER
// ==========================================

const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 200,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests. Please try again later."
    }
});

app.use("/api", globalLimiter);

// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running",
        environment: configuration.node_env
    });
});

// ==========================================
// API ROUTES
// ==========================================

app.use("/api/v1/users", routes.userRoutes);

// ==========================================
// ERROR HANDLING
// ==========================================

app.use(notFound);
app.use(errorHandler);

export default app;
