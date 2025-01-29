import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qrnjoxzueqouodovtwvi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFybmpveHp1ZXFvdW9kb3Z0d3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNTI0NDcsImV4cCI6MjA1MzcyODQ0N30.ZpSCXroSbxhAe0O3JVoqsSNAKkh3_Q60WBVZ5sxXSZ4"
);
