import React from "react";
import AddEmployeeComponent from "@/components/AddEmployee.form";
import { colors } from "@/styles/colors";
import { type Employee } from "@/types/Employee.type";
import { type TipsInput } from "@/types/TipsInput.type";
import ShiftSummary from "@/components/ShiftSummary";
import EmployeesList from "./Employees.list";
import PaymentsIcon from "@/icons/payments-icon.svg";
import DateInput from "./Date.input";

const initialInput: TipsInput = {
  total: 0,
  employees: [],
};

const TipsForm: React.FC = () => {
  const totalInputRef = React.useRef<HTMLInputElement | null>(null);
  const [input, setInput] = React.useState<TipsInput>(initialInput);
  const [, setError] = React.useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "new-employee") {
      return;
    }

    if (Object.keys(input).indexOf(name) !== -1) {
      setInput({ ...input, [name]: value });
    }
  };

  const handleEmployeeSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    value: Employee
  ) => {
    const { name } = value;
    const exist = input.employees.find((e) => e.name === name);

    if (exist) return setError(`${name} כבר רשום`);

    setInput({
      ...input,
      employees: [...input.employees, value],
    });
  };

  const handleEmployeeDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    setInput({
      ...input,
      employees: input.employees.filter((e) => e.name !== name),
    });
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const handleClick = () => {
    return totalInputRef.current && totalInputRef.current.focus();
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = document.getElementById("add-employee") as HTMLInputElement;

    if (event.key === "Enter" && target && !target.value) {
      target.focus();
    } else if (event.key === "Enter" && target && target.value) {
      event.currentTarget.blur();
    }
  };

  return (
    <React.Fragment>
      <header
        style={{
          position: "relative",
          display: "flex",
          height: 60,
        }}
      >
        <p
          style={{
            color: "#999",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            height: 22,
            fontSize: 10,
          }}
        >
          <a
            href="https://github.com/IliaKamilov"
            style={{
              color: colors.text.primary.light,
              textDecoration: "none",
              fontSize: 12,
            }}
          >
            Ilia Kamilov
          </a>{" "}
          © {new Date().getFullYear()}
        </p>
        <h1
          style={{
            color: colors.primary.main,
            fontSize: 24,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            gap: 5,
            position: "relative",
            margin: "24px 0 0",
            padding: 0,
          }}
        >
          TipSync
          <span
            style={{
              fontSize: 10,
              color: colors.text.primary.light,
              marginTop: 5,
            }}
          >
            1.0
          </span>
        </h1>
      </header>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 10,
          flexDirection: "column",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            background: colors.text.primary.dark,
            padding: 4,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              width: "100%",
            }}
          >
            <DateInput />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <button
              onClick={handleClick}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              type="button"
            >
              <img src={PaymentsIcon} />
            </button>
            <input
              type="number"
              value={input.total || ""}
              onChange={handleChange}
              placeholder="סכום"
              name="total"
              onFocus={handleFocus}
              onKeyUp={handleKeyUp}
              style={{
                width: "100%",
                fontSize: 18,
                border: "none",
                background: colors.text.primary.dark,
                outline: "none",
                color: colors.secondary.main,
                paddingRight: 8,
                overflow: "hidden",
              }}
              ref={totalInputRef}
            />
          </div>
        </div>
        <div>
          <AddEmployeeComponent
            onSubmit={handleEmployeeSubmit}
            employees={input.employees.map((r) => r.name)}
          />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
            height: "calc(100% - 120px)",
            overflowY: "auto",
          }}
        >
          <EmployeesList {...input} onDelete={handleEmployeeDelete} />
        </div>
        <div
          style={{
            position: "relative",
            bottom: 0,
            maxHeight: 60,
            width: "100%",
          }}
        >
          <ShiftSummary {...input} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TipsForm;
