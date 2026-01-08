"use client";

import { TypeAnimation } from "react-type-animation";

export default function NameAnimation() {
  const longest = "Leonardo Vaz :D";
  return <TypeAnimation sequence={["Leonardo Vaz :)"]} speed={10} />;
}
