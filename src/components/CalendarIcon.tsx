import { colors } from "@/styles/colors";
import React from "react";

type CalendarIconProps = {
  year: number;
  month: string;
  day: number;
};

const CalendarIcon: React.FC<CalendarIconProps> = ({ day, month, year }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="transparent"
  >
    <rect
      x="0"
      y="0"
      width="48"
      height="48"
      fill="transparent"
      stroke={colors.secondary.main}
      strokeWidth="4"
      rx={10}
      ry={10}
    />
    <rect
      x={0}
      y={0}
      width={48}
      height={18}
      fill={colors.secondary.main}
      rx={0}
      ry={10}
    />
    <text
      x="24"
      y="12"
      fontFamily="Arial"
      fontSize="10"
      fill={colors.text.primary.dark}
      textAnchor="middle"
    >
      {year}
    </text>
    <text
      x="24"
      y="30"
      fontFamily="Arial"
      fontSize="12"
      fill="#0089c0"
      textAnchor="middle"
    >
      {day}
    </text>
    <text
      x="24"
      y="42"
      fontFamily="Arial"
      fontSize="10"
      fill={colors.secondary.main}
      textAnchor="middle"
    >
      {month}
    </text>
  </svg>
);

export default CalendarIcon;
