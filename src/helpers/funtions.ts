'use client'

import { useMediaQuery } from "react-responsive";

export const useBreakpoints = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const isSm = useMediaQuery({ minWidth: 480 });
  return { isLg, isMd, isSm };
};