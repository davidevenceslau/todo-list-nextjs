import { ReactNode } from "react";

type ModalBodyProps = {
  children: ReactNode;
};

export function ModalBody({ children }: ModalBodyProps) {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">{children}</div>
    </div>
  );
}
