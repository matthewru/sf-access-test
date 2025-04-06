"use client"; // <-- Add this directive
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useEffect } from "react"; // <-- Import useEffect

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the API key
  const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  // Load the accessibility component client-side
  useEffect(() => {
    const initEqlectech = async () => {
      try {
        // Dynamically import only on the client
        await import("eqlectech-accessibility");
        console.log("Eqlectech Accessibility component loaded.");
      } catch (error) {
        console.error("Failed to load Eqlectech Accessibility component:", error);
      }
    };

    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      initEqlectech();
    }

    // Empty dependency array ensures this runs only once after mount
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {geminiApiKey ? (
          <eqlec-tech api-key={geminiApiKey} />
        ) : (
          (() => {
            console.error("Gemini API Key (NEXT_PUBLIC_GEMINI_API_KEY) is missing.")
            return null;
          })()
        )}
        {children}
      </body>
    </html>
  );
}
