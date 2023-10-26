import Button from "./Button";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <Button>+ Add Project</Button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} isTextarea={false} type="text" />
        <Input label={"Description"} isTextarea />
        <Input label={"Due Date"} isTextarea={false} type="text" />
      </div>
    </div>
  );
};

export default NewProject;
