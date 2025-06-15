// hooks/useAuth.ts
import Cookies from "js-cookie";

export function useAuth() {
  const token = Cookies.get("token"); // exemplo: supabase-auth-token, etc

  return !!token;
}
