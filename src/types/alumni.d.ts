import { Database } from './supabase';

// Table Types
export type User = Database['public']['Tables']['profiles']['Row'];
export type People = Database['public']['Tables']['people']['Row'];

// Custom Types
export type ClassmatePreview = People & {
  profiles: Pick<User, 'pfp'>;
};
