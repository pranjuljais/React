import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./Buttton";
export default function Modal({ ref, children, BtnCaption }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{BtnCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
