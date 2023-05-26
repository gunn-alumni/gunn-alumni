export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      people: {
        Row: {
          created_at: string
          first_name: string
          grad_year: number | null
          id: string | null
          index: number
          last_name: string
          pausd_email: string
        }
        Insert: {
          created_at?: string
          first_name: string
          grad_year?: number | null
          id?: string | null
          index?: number
          last_name: string
          pausd_email: string
        }
        Update: {
          created_at?: string
          first_name?: string
          grad_year?: number | null
          id?: string | null
          index?: number
          last_name?: string
          pausd_email?: string
        }
      }
      profiles: {
        Row: {
          bio: string | null
          created_at: string | null
          current_location: string | null
          id: string
          index: number
          pfp: string | null
          phone_num: number | null
          preferred_name: string | null
          social_media: Json | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          current_location?: string | null
          id: string
          index?: never
          pfp?: string | null
          phone_num?: number | null
          preferred_name?: string | null
          social_media?: Json | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          current_location?: string | null
          id?: string
          index?: never
          pfp?: string | null
          phone_num?: number | null
          preferred_name?: string | null
          social_media?: Json | null
        }
      }
    }
    Views: {
      alums_preview: {
        Row: {
          first_name: string | null
          grad_year: number | null
          id: string | null
          last_name: string | null
        }
      }
      select_preview_people: {
        Row: {
          first_name: string | null
          grad_year: number | null
          id: string | null
          last_name: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
