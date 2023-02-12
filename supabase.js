const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://raiqkyrnmtppnofeimax.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhaXFreXJubXRwcG5vZmVpbWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxOTY0OTcsImV4cCI6MTk5MTc3MjQ5N30.YcV1DFB7RBzUl_MTDQVkdBUp66HuHSfJ6fw2FZsqFLw"
);

module.exports = supabase;
