import React from "react";
import Image, { type ImageProps } from "next/image";

// The Levexa logo in the right colours for the current theme: navy lettering on the light
// theme, white lettering on the navy theme. Both are rendered; CSS hides the other (globals.css).
export const ThemeLogo: React.FC<Omit<ImageProps, "src">> = ({ className = "", alt, ...props }) => (
  <>
    <Image src="/levexa-logo-light-trans.png" alt={alt} className={`only-light ${className}`} {...props} />
    <Image src="/levexa-logo-dark-trans.png" alt={alt} className={`only-navy ${className}`} {...props} />
  </>
);
