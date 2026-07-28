import { supabase, isSupabaseConfigured } from '../config/supabase.js';
import {
  departmentsData,
  admissionsData,
  placementsData,
  circularsData,
  studentPortalMock
} from '../models/sritData.js';

export const dbService = {
  // Fetch Departments
  getDepartments: async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('departments').select('*');
        if (!error && data && data.length > 0) return data;
      } catch (err) {
        console.warn('⚠️ Error reading departments from Supabase, returning local fallback:', err.message);
      }
    }
    return departmentsData;
  },

  // Fetch Admissions Info
  getAdmissions: async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('admissions').select('*').single();
        if (!error && data) return data;
      } catch (err) {
        console.warn('⚠️ Error reading admissions from Supabase, returning local fallback:', err.message);
      }
    }
    return admissionsData;
  },

  // Fetch Placement Statistics
  getPlacements: async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('placements').select('*').single();
        if (!error && data) return data;
      } catch (err) {
        console.warn('⚠️ Error reading placements from Supabase, returning local fallback:', err.message);
      }
    }
    return placementsData;
  },

  // Fetch Circulars
  getCirculars: async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('circulars').select('*').order('publish_date', { ascending: false });
        if (!error && data && data.length > 0) return data;
      } catch (err) {
        console.warn('⚠️ Error reading circulars from Supabase, returning local fallback:', err.message);
      }
    }
    return circularsData;
  },

  // Save Chat Log to Supabase PostgreSQL (For AI Analytics)
  logChatMessage: async (sessionId, userQuery, aiResponse, modelUsed = 'gemini-2.5-flash') => {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('chat_logs').insert([
          {
            session_id: sessionId || 'anonymous',
            user_query: userQuery,
            ai_response: aiResponse,
            model_used: modelUsed
          }
        ]);
      } catch (err) {
        console.warn('⚠️ Failed to store chat log in Supabase:', err.message);
      }
    }
  }
};
