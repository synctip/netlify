import { type Employee } from "@/types/Employee.type";

export type TipsInput = {
  total: number;
  employees: Employee[];
  date: number;
};

export default TipsInput;
