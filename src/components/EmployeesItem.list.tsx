import { colors } from "@/styles/colors";
import { Employee } from "@/types/Employee.type";
import DeleteIcon from "@/icons/delete-icon.svg";
import CheckIcon from "@/icons/check-icon.svg";
import CancelIcon from "@/icons/close-icon.svg";
import React, { HTMLAttributes } from "react";

const CancelButton: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      style={{
        outline: "none",
        color: colors.error.primary.light,
        padding: "8px 16px",
        border: "none",
        cursor: "pointer",
        background: "transparent",
      }}
    >
      <img src={CancelIcon} />
    </button>
  );
};

const ConfirmButton: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      style={{
        outline: "none",
        color: colors.error.primary.light,
        padding: "8px 16px",
        cursor: "pointer",
        border: "none",
        background: "transparent",
      }}
    >
      <img src={CheckIcon} />
    </button>
  );
};

const DeleteButton: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      style={{
        outline: "none",
        color: colors.error.primary.light,
        padding: "8px 16px",
        border: "none",
        cursor: "pointer",
        background: "transparent",
      }}
    >
      <img src={DeleteIcon} />
    </button>
  );
};

type EmployeeListItemProps = Employee & {
  salary?: string | number;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>, name: string) => void;
};

const EmployeeListItem: React.FC<EmployeeListItemProps> = ({
  minutes,
  name,
  hours,
  salary = 0,
  onDelete,
}) => {
  const [deleting, setDeleting] = React.useState(false);

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDeleting(true);
  };

  const handleCancel = () => {
    setDeleting(false);
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Perform deletion logic
    onDelete?.(event, name);
    setDeleting(false);
  };

  return (
    <li
      style={{
        display: "flex",
        background: colors.text.primary.dark,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 10,
          padding: "4px 16px",
          fontSize: 12,
          color: colors.secondary.main,
        }}
      >
        <h3 style={{ width: "100%" }}>{name}</h3>
        <h3 style={{ width: "100%" }}>
          {hours}:{minutes}
        </h3>
        <h3 style={{ width: "100%" }}>{salary}</h3>
      </div>
      {deleting ? (
        <React.Fragment>
          <ConfirmButton onClick={handleConfirm} />
          <CancelButton onClick={handleCancel} />
        </React.Fragment>
      ) : (
        <DeleteButton onClick={handleDelete} />
      )}
    </li>
  );
};

export default EmployeeListItem;
