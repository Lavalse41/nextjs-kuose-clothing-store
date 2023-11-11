import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hsgphdqsdzjbgshkiddv.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY);

export default supabase;
