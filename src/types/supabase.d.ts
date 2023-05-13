export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      people: {
        Row: {
          grad_year: string | null;
          id: string | null;
          index: number;
          name: string | null;
        };
        Insert: {
          grad_year?: string | null;
          id?: string | null;
          index?: never;
          name?: string | null;
        };
        Update: {
          grad_year?: string | null;
          id?: string | null;
          index?: never;
          name?: string | null;
        };
      };
      profiles: {
        Row: {
          bio: string | null;
          created_at: string | null;
          current_location: string | null;
          id: string;
          index: number;
          pfp: string | null;
          phone_num: number | null;
          preferred_name: string | null;
          social_media: Json | null;
        };
        Insert: {
          bio?: string | null;
          created_at?: string | null;
          current_location?: string | null;
          id: string;
          index?: never;
          pfp?: string | null;
          phone_num?: number | null;
          preferred_name?: string | null;
          social_media?: Json | null;
        };
        Update: {
          bio?: string | null;
          created_at?: string | null;
          current_location?: string | null;
          id?: string;
          index?: never;
          pfp?: string | null;
          phone_num?: number | null;
          preferred_name?: string | null;
          social_media?: Json | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
