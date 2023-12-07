import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(
  "https://hsgphdqsdzjbgshkiddv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZ3BoZHFzZHpqYmdzaGtpZGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MzkwODEsImV4cCI6MjAwOTExNTA4MX0.9zPHkfdauo98aG-I61T_xoeGm7yEnSGCyFsvbqy-zAo"
);

export default supabase;
