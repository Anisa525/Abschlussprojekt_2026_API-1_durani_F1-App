import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mqloqofqxwyilvlqrdfv.supabase.co"; //
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbG9xb2ZxeHd5aWx2bHFyZGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NTg3MjMsImV4cCI6MjA5NjUzNDcyM30.7bY_lRO3rfGNyWA7rt613F2QafWPpWyI_ikfnbD9PAE";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
