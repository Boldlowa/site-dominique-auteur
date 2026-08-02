import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseBucket = import.meta.env.VITE_SUPABASE_BUCKET;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are not set.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const normalizeSupabasePath = (path: string): string =>
  path.trim().replace(/^\/+/, "");

export const getSupabaseImageUrl = (path?: string): string => {
  if (!path) {
    return "";
  }

  const trimmed = path.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  const bucket = supabaseBucket;
  if (!bucket) {
    throw new Error("Supabase bucket is not set.");
  }

  const normalizedPath = normalizeSupabasePath(trimmed);
  const { data } = supabase.storage.from(bucket).getPublicUrl(normalizedPath);
  return data?.publicUrl ?? "";
};
