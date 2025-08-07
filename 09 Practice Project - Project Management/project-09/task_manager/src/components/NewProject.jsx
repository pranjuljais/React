import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterduedate = duedate.current.value;

    if (
      enterTitle.trim() === "" ||
      enterDescription.trim() === "" ||
      enterduedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enterTitle,
      description: enterDescription,
      duedate: enterduedate,
    });
  }
  return (
    <>
      <Modal ref={modal} BtnCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4 ">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4 ">
          Oops ... looks like you forget to enter a value.
        </p>
        <p className="text-stone-600 mb-4 ">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:text-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title"></Input>
          <Input ref={description} label="Description" textarea></Input>
          <Input type="date" ref={duedate} label="Due Date"></Input>
        </div>
      </div>
    </>
  );
}
