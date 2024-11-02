import { colors } from "@/styles/colors";
import React from "react";
import CalendarIcon from "./CalendarIcon";

const DateInput: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [timestamp, setTimestamp] = React.useState(new Date().getTime());

  const date = new Date(timestamp);

  const handleClick = () => {
    if (inputRef.current) inputRef.current.showPicker();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setTimestamp(new Date(event.target.value).getTime());
    }
  };

  return (
    <React.Fragment>
      <input
        type="date"
        value={timestamp}
        ref={inputRef}
        style={{
          visibility: "hidden",
          position: "absolute",
        }}
        onChange={handleChange}
      />
      <button
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
      </h4>
    </React.Fragment>
  );
};

export default DateInput;
