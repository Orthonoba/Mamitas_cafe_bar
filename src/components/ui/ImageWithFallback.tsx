"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  fallbackSrc = "/images/menu/placeholder.svg",
  ...props
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  return (
    <Image
      {...props}
      src={errored ? fallbackSrc : src}
      onError={() => setErrored(true)}
    />
  );
}
