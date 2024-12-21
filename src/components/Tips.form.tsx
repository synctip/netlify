/**
 * @important es-lint should be enabled in production.
 * using eslint-disable is allowed only in development environments.
 * @author Ilia Kamilov
 * @version 1.1
 */
/* eslint-disable */
import React from "react";
import AddEmployeeComponent from "@/components/AddEmployee.form";
// import { colors } from "@/styles/colors";
import { type Employee } from "@/types/Employee.type";
import { type TipsInput } from "@/types/TipsInput.type";
import ShiftSummary from "@/components/ShiftSummary";
import EmployeesList from "./Employees.list";
import PaymentsIcon from "@/icons/payments-icon.svg";
import DateInput from "./Date.input";
import ShareDetailsImage from "@/components/features/ShareDetailsImage";
import getAppVersion from "@/utils/getVersion";
import useSystemTheme from "@/hooks/useSystemTheme";
import InputLabel from "./InputLabel";

const initialInput: TipsInput = {
  total: 3461,
  employees: [],
  date: new Date().getTime(),
};

const TipsForm: React.FC = () => {
  const totalInputRef = React.useRef<HTMLInputElement | null>(null);
  const [input, setInput] = React.useState<TipsInput>(initialInput);
  const [, setError] = React.useState<string>();
  const theme = useSystemTheme();

  getAppVersion();

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

  const handleDateChange = (date: number) => {
    setInput({ ...input, date });
  };

  return (
    <React.Fragment>
      <ShareDetailsImage {...input} />
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
            // background: colors.text.primary.dark,
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
            <DateInput onChange={handleDateChange} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <InputLabel htmlFor="tips">טיפים</InputLabel>
            <input
              type="number"
              value={input.total || ""}
              onChange={handleChange}
              placeholder="סכום"
              name="total"
              id="tips"
              onFocus={handleFocus}
              onKeyUp={handleKeyUp}
              ref={totalInputRef}
              datatype={`theme=${theme ? "dark" : "light"}`}
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
