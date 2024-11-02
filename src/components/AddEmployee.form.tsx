import React from "react";
import { Employee } from "../types/Employee.type";
import { colors } from "@/styles/colors";
import useDebounce from "@/hooks/useDebounce";

type AddEmployeeComponent = React.FC<
  React.PropsWithChildren<{
    onSubmit: (e: React.FormEvent<HTMLFormElement>, data: Employee) => void;
    employees: Array<string>;
  }>
>;

const AddEmployeeComponent: AddEmployeeComponent = ({
  onSubmit,
  employees,
}) => {
  const nameInputRef = React.useRef<HTMLInputElement | null>(null);
  const hoursInputRef = React.useRef<HTMLInputElement | null>(null);

  const [exist, setExist] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<Employee>({
    hours: 0,
    minutes: 0,
    name: "",
  });

  const debouncedName = useDebounce(input.name, 300);

  React.useEffect(() => {
    setExist(
      Boolean(
        debouncedName === input.name && employees.indexOf(debouncedName) !== -1
      )
    );
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!exist) {
      setInput({ hours: 0, minutes: 0, name: "" });
      onSubmit(event, input);

      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "minutes" && parseFloat(value) >= 60) {
      event.currentTarget.select();
      return setInput({ ...input, minutes: 0 });
    }

    if (Object.keys(input).indexOf(name) !== -1) {
      setInput({
        ...input,
        [name]:
          ["hours", "minutes"].indexOf(name) !== -1 ? parseFloat(value) : value,
      });
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      hoursInputRef.current &&
      !exist &&
      event.currentTarget.value
    ) {
      hoursInputRef.current?.focus();
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: 10,
          justifyItems: "stretch",
          background: colors.text.primary.dark,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            padding: 10,
            width: "100%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={exist ? colors.error.primary.main : "#ffcc00"}
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          </svg>
          <input
            type="text"
            placeholder="שם"
            value={input.name}
            id="add-employee"
            name="name"
            style={{
              width: "100%",
              fontSize: 18,
              border: "none",
              background: colors.text.primary.dark,
              outline: "none",
              color: exist ? colors.error.primary.main : colors.secondary.main,
              paddingRight: 8,
            }}
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyUp={handleKeyUp}
            ref={nameInputRef}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            overflow: "hidden",
            padding: 10,
            width: "100%",
          }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffcc00"
            >
              <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
            </svg>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row-reverse",
            }}
          >
            <input
              type="number"
              name="hours"
              value={input.hours || "00"}
              min={0}
              step={1}
              placeholder="שעות"
              onChange={handleChange}
              title="hours"
              style={{
                width: 20,
                fontSize: 18,
                border: "none",
                background: colors.text.primary.dark,
                outline: "none",
                color: colors.secondary.main,
              }}
              onFocus={handleFocus}
              ref={hoursInputRef}
            />
            <span
              style={{
                color: "red",
                display: "flex",
                alignItems: "center",
                fontSize: 18,
              }}
            >
              :
            </span>
            <input
              type="number"
              name="minutes"
              value={input.minutes || "00"}
              min={0}
              max={60}
              step={1}
              placeholder="דקות"
              onChange={handleChange}
              title="minutes"
              style={{
                width: 20,
                fontSize: 18,
                border: "none",
                background: colors.text.primary.dark,
                outline: "none",
                color: colors.secondary.main,
              }}
              onFocus={handleFocus}
              ref={hoursInputRef}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            disabled={!input.name || input.hours <= 0 || Boolean(exist)}
            style={{
              outline: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              // boxShadow: 'inset 0 0 5px #28a745', // Inner shadow
            }}
            className="successButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={
                !input.name || input.hours <= 0 || exist ? "#999" : "#28a745"
              }
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
            הוסף
          </button>
        </div>
      </form>
      {exist && (
        <div
          style={{
            color: colors.error.primary.main,
            fontSize: 16,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            gap: 8,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e53935"
          >
            <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>{" "}
          {debouncedName} כבר נמצא ברשימה
        </div>
      )}
    </React.Fragment>
  );
};

export default AddEmployeeComponent;
