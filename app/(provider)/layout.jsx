import { AuthProvider } from "@/contexts/AuthContext";
import { TanstackQueryProvider } from "@/libs/tanstack-query";
import React from "react";

function ProvidersLayout({ children }) {
  return (
    <TanstackQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </TanstackQueryProvider>
  );
}
export default ProvidersLayout;
