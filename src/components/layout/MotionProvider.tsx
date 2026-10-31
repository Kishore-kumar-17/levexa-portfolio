"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

// Makes every framer-motion animation respect the user's reduced-motion setting
export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
