import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({onAdd,onCancel}) => {
    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

   

    const handleSubmit = ()=>{
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate= dueDateRef.current.value;
        if(enteredTitle.trim() === "" || enteredDescription.trim() ==="" || enteredDueDate.trim() === ""){
            modalRef.current.open();
            return;
        }
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })
    }
  return (
    <>
    <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <Button onClick={handleSubmit}>+ Add Project</Button>
        </li>
      </menu>
      <div>
        <Input label={"Title"}  type="text" ref={titleRef}/>
        <Input label={"Description"} isTextarea ref={descriptionRef} />
        <Input label={"Due Date"}  type="date" ref={dueDateRef} />
      </div>
    </div>
    </>
  );
};

export default NewProject;
