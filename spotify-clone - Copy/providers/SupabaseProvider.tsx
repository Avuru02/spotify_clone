"use client";

interface SupabaseProviderProps {
  children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children
}) => {
  // Demo mode: no Supabase provider needed
  return <>{children}</>;
}

export default SupabaseProvider;
