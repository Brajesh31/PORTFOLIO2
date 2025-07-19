"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

/**
 * Wraps next-themes ThemeProvider for use in app.
 * - attribute: (default "class") sets dark/light class on <html>
 * - defaultTheme: (default "system") uses user's system preference initially
 * - enableSystem: allows system theme switching
 * Usage:
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *    {children}
 * </ThemeProvider>
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
