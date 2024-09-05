import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or Anon Key is not defined in environment variables."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;