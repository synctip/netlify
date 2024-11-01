import { Employee } from '@/types/Employee.type';
import { colors } from '@/styles/colors'
import DeleteIcon from '@/icons/delete-icon.svg';

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
                            <DeleteIcon />
                        </button>
                    </li>
                ))
            }
        </ul>
    )
};

export default EmployeesList;