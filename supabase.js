import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

if (isSupabaseConfigured) {
  console.log('✅ Supabase PostgreSQL Client initialized successfully.');
} else {
  console.log('ℹ️ SUPABASE_URL or SUPABASE_ANON_KEY missing in .env. Server will use local sritData model repository as database source.');
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;
