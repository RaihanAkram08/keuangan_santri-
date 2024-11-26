import { Pool } from "pg";

// Konfigurasi koneksi langsung
const pool = new Pool({ 
    user: "postgres.stqsniuvaqygojonmmea",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    database: "postgres",
    password: "Raihan01092008",
    port: 6543,
});

export default pool;