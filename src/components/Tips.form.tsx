import React from 'react';
import AddEmployeeComponent from '@/components/AddEmployee.form';
import { colors } from '@/styles/colors';
import { type Employee } from '@/types/Employee.type';
import { type TipsInput } from '@/types/TipsInput.type';
import TodayCalendar from '@/components/TodayCalendar';
import ShiftSummary from '@/components/ShiftSummary';

const initialInput: TipsInput = {
    total: 533,
    employees: [
        { name: 'איליה', hours: 5 },
        { name: 'אבי', hours: 3 },
        { name: 'מירי', hours: 6 }
    ]
}

type EmployeeListComponent = React.FC<{
    employees: Employee[];
    total: number;
    onDelete?: (event: React.MouseEvent<HTMLButtonElement>, name: string) => void;
}>;

const EmployeesList: EmployeeListComponent = ({ employees, total, onDelete }) => {
    const hours = employees.reduce((curr, prev, indx) => curr += prev.hours, 0);
    const perhour = total / hours || 0;

    const salary = (hours: number): string => {
        return currency(hours * perhour)
    };
    const currency = (value: number = 0): string => {
        return new Intl.NumberFormat('he-IL', {
            style: 'currency',
            currency: 'ILS',
            maximumFractionDigits: 0,
        }).format(value)
    };

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>, name: string) => {
        onDelete?.(event, name)
    }

    return (
        <ul
            style={{
                gap: 10,
                display: 'flex',
                flexDirection: 'column',
                listStyleType: 'none',
                padding: 0,
                margin: 0,
            }}
        >
            {
                employees.map((employee, index) => (
                    <li
                        key={index}
                        style={{
                            display: 'flex',
                            background: colors.text.primary.dark,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                gap: 10,
                                padding: '4px 16px',
                                fontSize: 12,
                                color: colors.secondary.main
                            }}>
                            <h3 style={{ width: '100%' }}>{employee.name}</h3>
                            <h3 style={{ width: '100%' }}>({employee.hours})</h3>
                            <h3 style={{ width: '100%' }}>{salary(employee.hours)}</h3>
                        </div>
                        <button
                            style={{
                                outline: 'none',
                                color: colors.error.primary.light,
                                padding: '8px 16px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                background: 'transparent',

                            }}

                            onClick={event => handleDelete(event, employee.name)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e53935"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

const TipsForm: React.FC = () => {
    const [input, setInput] = React.useState<TipsInput>(initialInput);
    const [error, setError] = React.useState<string>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === 'new-employee') {
            return;
        }

        if (Object.keys(input).indexOf(name) !== -1) {
            setInput({ ...input, [name]: value });
        }
    };

    const handleEmployeeSubmit = (event: React.FormEvent<HTMLFormElement>, value: Employee) => {
        const { name } = value;
        const exist = input.employees.find(e => e.name === name);

        if (exist) return setError(`${name} כבר רשום`)

        setInput({
            ...input,
            employees: [...input.employees, value]
        });
    }

    const handleEmployeeDelete = (event: React.MouseEvent<HTMLButtonElement>, name: string) => {
        setInput({
            ...input,
            employees: input.employees.filter(e => e.name !== name)
        });
    }

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.select();
    }

    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 10
                }}
            >
                <TodayCalendar />
                <h1>חישוב טיפ</h1>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: 10,

                    }}
                >
                    <h3>סה"כ טיפ</h3>
                    <input
                        type="number"
                        value={input.total}
                        onChange={handleChange}
                        name="total"
                        onFocus={handleFocus}
                    />
                </div>
                <AddEmployeeComponent onSubmit={handleEmployeeSubmit} employees={input.employees.map(r => r.name)} />
                <EmployeesList {...input} onDelete={handleEmployeeDelete} />
                <ShiftSummary {...input} />
            </div>
            <div>

            </div>
        </React.Fragment>
    );
};

export default TipsForm;