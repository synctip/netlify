import { Employee } from '@/types/Employee.type';
import { colors } from '@/styles/colors'

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
};

export default EmployeesList;