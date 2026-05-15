import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bthmzsaxnhvuajtwgtgk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0aG16c2F4bmh2dWFqdHdndGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NjEzNTMsImV4cCI6MjA5MDIzNzM1M30.V_EW2o8hFcS80Qmlb6jw_q72RwXxXf99a2QJTwZLWYg'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)