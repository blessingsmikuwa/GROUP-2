import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ggphmkmbycgatdbxfwhd.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncGhta21ieWNnYXRkYnhmd2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMTkxMTYsImV4cCI6MjA0Nzg5NTExNn0.sQkDCdmYOkS7fIPTt3wDlDlHk5lHmlfVa4L-uT2alBU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})