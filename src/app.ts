import express from "express";
import catatanKeuanganRoutes from "./routes/catatanKeuangan";

const app = express();

// Middleware
app.use(express.json());
app.use("/api/keuangan", catatanKeuanganRoutes);
app.use(express.static("public")); // untuk UI

// Port Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

