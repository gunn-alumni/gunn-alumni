interface Profile {
  index: number;
  id: string;
  created_at: string;
  preferred_name: string;
  pfp?: string;
  current_location?: string;
  phone_num?: number;
  email_display?: string;
  bio?: string;
  social_media?: string;
  verified: boolean;
}

interface People {
  index: number;
  id: string;
  name: string;
  grad_year: number;
}
