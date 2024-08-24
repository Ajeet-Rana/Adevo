import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://slmqauetfcqbzhxdgeir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbXFhdWV0ZmNxYnpoeGRnZWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxMDgxNTQsImV4cCI6MjAzNTY4NDE1NH0.cGzE4lhfk7olfthl1MinF_4QUBFFggLNAKxDg8p0XlQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
