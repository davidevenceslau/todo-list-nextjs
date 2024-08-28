import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

export function ModalRoot({ children }: ModalProps) {
  return (
    <div className=" absolute fixed w-[100vh] h-[100v] flex items-center justify-center h-screen">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
          <div
            className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
