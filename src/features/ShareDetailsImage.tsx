import { Employee } from "@/types/Employee.type";
import NIS from "@/utils/NIS";
import React from "react";

type ShareDetailsProps = {
  date: number;
  employees: Employee[];
  total: number;
  perhour?: number;
  hours?: number;
  team?: number;
};

const ShareDetailsImage: React.FC<ShareDetailsProps> = (props) => {
  const hours = props.employees.reduce((curr, prev) => {
    return (curr += prev.hours + prev.minutes / 60);
  }, 0);

  const perhour = props.perhour || props.total / hours;

  const toDecimal = (h: number, m: number): number => {
    return h + m / 60;
  };

  const salary = (h: number, m: number = 0): number => {
    const hours = toDecimal(h, m);
    return hours * perhour;
  };

  const date = new Date(props.date);

  const handleShare = () => {
    const dataURL = `
*TipSync* _1.0_
https://bit.ly/tipsync
Ilia Kamilov © 2024
-------------------------------

*דוח טיפים*
${date.toLocaleDateString("he-IL", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})}

*טיפים*: ${NIS(props.total)}
*אנשי צוות*: ${props.employees.length}
*שעות*: ${hours.toFixed()} 
*לשעה*: ${NIS(perhour || 0)}


*אנשי צוות* \r
${props.employees
  .map(
    (employee) =>
      `- ${employee.name} - *${toDecimal(
        employee.hours,
        employee.minutes
      )}* ש' --> ${NIS(toDecimal(employee.hours, employee.minutes))}`
  )
  .join("\n\n")}
    `;

    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(dataURL)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <button
        onClick={handleShare}
        style={{
          display: "flex",
          background: "none",
          alignItems: "center",
          justifyContent: "center",
          border: 0,
          fontSize: 40,
          position: "fixed",
          top: 0,
          left: 0,
          transform: "rotate(180deg)",
          padding: 8,
          zIndex: 9999,
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#25D366"
        >
          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
        </svg>
      </button>
    </div>
  );
};

export default ShareDetailsImage;
