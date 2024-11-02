import React from "react";
import { Employee } from "@/types/Employee.type";
import EmployeesListItem from "./Employees.list.item";

type EmployeeListComponent = React.FC<{
  employees: Employee[];
  total: number;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>, name: string) => void;
}>;

const EmployeesList: EmployeeListComponent = ({
  employees,
  total,
  onDelete,
}) => {
  const hours = employees.reduce((curr, prev, indx) => (curr += prev.hours), 0);
  const perhour = total / hours || 0;

  const salary = (hours: number): string => {
    return currency(hours * perhour);
  };
  const currency = (value: number = 0): string => {
    return new Intl.NumberFormat("he-IL", {
      style: "currency",
      currency: "ILS",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string,
  ) => {
    onDelete?.(event, name);
  };

  return (
    <ul
      style={{
        gap: 1,
        display: "flex",
        flexDirection: "column",
        listStyleType: "none",
        padding: 0,
        margin: 0,
        height: "100%",
      }}
    >
      {employees.map((employee, index) => (
        <EmployeesListItem
          key={index}
          onDelete={handleDelete}
          {...employee}
          salary={salary(employee.hours)}
        />
      ))}
      {employees.length === 0 && (
        <li
          style={{
            height: "100%",
            color: "#999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          רשימה ריקה
        </li>
      )}
    </ul>
  );
};

export default EmployeesList;
