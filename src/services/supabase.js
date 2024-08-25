import { createClient } from "@supabase/supabase-js";
import { supabaseKey } from "../../config";
export const supabaseUrl = "https://slmqauetfcqbzhxdgeir.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
