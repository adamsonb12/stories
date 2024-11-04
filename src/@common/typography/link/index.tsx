import Link from "next/link";
import { ReactNode } from "react";

export const NextLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} className="text-info no-underline cursor-pointer">
      {children}
    </Link>
  );
};
