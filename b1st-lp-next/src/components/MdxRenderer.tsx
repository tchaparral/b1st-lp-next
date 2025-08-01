// src/components/MdxRenderer.tsx
"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

interface Props {
  code: string;
}

export default function MdxRenderer({ code }: Props) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-lg max-w-none">
      <Component />
    </article>
  );
}
