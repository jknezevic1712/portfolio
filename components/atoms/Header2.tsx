import { ReactNode } from "react";

interface Header2Props {
  children: ReactNode;
}

export default function Header2({ children }: Header2Props) {
  return (
    <h2 className="font-burtons text-lg text-gray-950 md:text-3xl 2xl:text-4xl">
      {children}
    </h2>
  );
}
