"use client";

import TranslateProvider, {
    TranslateContext,
} from "@/contexts/translateContext";
import "./globals.css";

import { useContext, useState } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <title>Esdras Silva</title>
            <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
            <body className="bg-neutral-100">
                <TranslateProvider>{children}</TranslateProvider>
            </body>
        </html>
    );
}
