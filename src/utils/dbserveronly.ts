import { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

export const SB_serveronly = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

export default SB_serveronly;
