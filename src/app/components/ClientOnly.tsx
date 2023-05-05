"use client";

import React, { useState, useEffect, FC, PropsWithChildren } from "react";

export const ClientOnly: FC<PropsWithChildren> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};
