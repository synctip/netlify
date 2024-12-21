import React from "react";

type AddEmployeeInput = {
  name: string;
  start: number;
  finish: number;
};

const AddEmployeeForm: React.FC = () => {
  const [input, setInput] = React.useState<AddEmployeeInput>({
    finish: 0,
    start: 0,
    name: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "row",
      }}
      className="add-employee-form"
    >
      <input
        type="text"
        placeholder="שם"
        required
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        required
        value={input.start || ""}
        name="start"
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        required
        value={input.finish || ""}
        name="finish"
        onChange={handleChange}
      />
    </form>
  );
};

export default AddEmployeeForm;
