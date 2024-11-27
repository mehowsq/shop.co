import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <div className="px-4 md:px-24">{children}</div>;
}
