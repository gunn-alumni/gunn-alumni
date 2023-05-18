import { Database } from './supabase';

export type User = Database['public']['Tables']['profiles']['Row'];

export type People = Database['public']['Tables']['people']['Row'];
