/**
 * @important es-lint should be enabled in production.
 * using eslint-disable is allowed only in development environments.
 * @author Ilia Kamilov
 * @version 1.1
 */
/* eslint-disable */
import { colors } from "@/styles/colors";
import React from "react";
import CalendarIcon from "./CalendarIcon";
import nowDateString from "@/utils/nowDateString";
import formatDate from "@/utils/nowDateString";
import "../styles/date-picker.css";
import InputLabel from "./InputLabel";

type DateInputProps = {
  date?: number;
  onChange?: (date: number) => void;
};

const DateInput: React.FC<DateInputProps> = (props) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [timestamp, setTimestamp] = React.useState(
    new Date(props.date!).getTime() || new Date().getTime()
  );

  const date = formatDate(timestamp);

  React.useEffect(() => {
    if (inputRef.current && inputRef.current.value !== date) {
      inputRef.current.value = date;
    }
  });
  const handleClick = () => {
    if (inputRef.current) inputRef.current.showPicker();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const date = new Date(event.target.value).getTime();
      setTimestamp(date);
      props.onChange?.(date);
    }
  };

  return (
    <div
      style={{
        height: 20,
      }}
    >
      <InputLabel htmlFor="date-picker">תאריך</InputLabel>
      <input
        type="date"
        id="date-picker"
        value={date}
        ref={inputRef}
        onChange={handleChange}
      />
      {/**
       * Uncomment this
       */}
      {/* <button
        style={{
          color: colors.secondary.main,
          background: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          padding: 0,
          fontSize: 18,
        }}
        onClick={handleClick}
      >
        <CalendarIcon
          day={date.getDate()}
          month={date.toLocaleDateString("he-IL", { month: "short" })}
          year={date.getFullYear()}
        />
      </button>
      <h4
        style={{
          color: "#999",
          fontSize: 18,
          fontWeight: "normal",
          width: "100%",
        }}
      >
        {date
          .toLocaleDateString("he-IL", {
            weekday: "long",
          })
          .replace("יום ", "")}
      </h4> */}
    </div>
  );
};

export default DateInput;
