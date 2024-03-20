export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      people: {
        Row: {
          created_at: string;
          first_name: string;
          grad_year: number | null;
          id: string | null;
          index: number;
          last_name: string;
          pausd_email: string;
        };
        Insert: {
          created_at?: string;
          first_name: string;
          grad_year?: number | null;
          id?: string | null;
          index?: number;
          last_name: string;
          pausd_email: string;
        };
        Update: {
          created_at?: string;
          first_name?: string;
          grad_year?: number | null;
          id?: string | null;
          index?: number;
          last_name?: string;
          pausd_email?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'people_id_fkey';
            columns: ['id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      profiles: {
        Row: {
          bio: string | null;
          created_at: string | null;
          current_location: string | null;
          email: string | null;
          id: string;
          index: number;
          media_links: Json[] | null;
          pfp: string | null;
          phone_num: number | null;
          preferred_name: string | null;
          social_media: Json | null;
        };
        Insert: {
          bio?: string | null;
          created_at?: string | null;
          current_location?: string | null;
          email?: string | null;
          id: string;
          index?: never;
          media_links?: Json[] | null;
          pfp?: string | null;
          phone_num?: number | null;
          preferred_name?: string | null;
          social_media?: Json | null;
        };
        Update: {
          bio?: string | null;
          created_at?: string | null;
          current_location?: string | null;
          email?: string | null;
          id?: string;
          index?: never;
          media_links?: Json[] | null;
          pfp?: string | null;
          phone_num?: number | null;
          preferred_name?: string | null;
          social_media?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      spotlights: {
        Row: {
          author: string;
          content: string;
          created_at: string;
          description: string;
          grad_year: number;
          id: number;
          person_id: number | null;
          preferred_name: string;
          thumbnail: string;
          updated_at: string | null;
          url: string | null;
        };
        Insert: {
          author: string;
          content: string;
          created_at?: string;
          description: string;
          grad_year: number;
          id?: never;
          person_id?: number | null;
          preferred_name: string;
          thumbnail: string;
          updated_at?: string | null;
          url?: string | null;
        };
        Update: {
          author?: string;
          content?: string;
          created_at?: string;
          description?: string;
          grad_year?: number;
          id?: never;
          person_id?: number | null;
          preferred_name?: string;
          thumbnail?: string;
          updated_at?: string | null;
          url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'spotlights_person_id_fkey';
            columns: ['person_id'];
            isOneToOne: false;
            referencedRelation: 'people';
            referencedColumns: ['index'];
          }
        ];
      };
    };
    Views: {
      select_preview_people: {
        Row: {
          first_name: string | null;
          grad_year: number | null;
          id: string | null;
          last_name: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'people_id_fkey';
            columns: ['id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
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
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never;
