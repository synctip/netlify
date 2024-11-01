import React from "react";

const TodayCalendar: React.FC = () => {
    const [now, setNow] = React.useState(new Date().getTime());

    React.useEffect(() => {
        const timer = setInterval(() => setNow(new Date().getTime()), 1000);
        return () => clearInterval(timer);
    });


    const date = new Date(now);

    const month = date.toLocaleDateString('he-IL', { month: 'short' });

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                border: `1px solid #0089c0`,
                overflow: 'hidden',
                boxSizing: 'border-box',
                borderRadius: 4,
                margin: 0,
                padding: 0,
                background: '#f0f4f8',
            }}
        >
            <h5
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    margin: 0,
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                    padding: '4px 8px',
                    color: '#ffffff',
                    background: '#0089c0',
                }}
            >
                {date.getFullYear()}
            </h5>
            <h3
                style={{
                    margin: 0,
                    padding: 0,
                    fontWeight: 'bold',
                    color: '#ffcc00',
                    fontSize: 14
                }}
            >
                {date.getDate()}
            </h3>
            <h4
                style={{
                    fontSize: 10,
                    margin: 0,
                    padding: 0,
                    fontWeight: 'bold',
                    color: '#006c88'
                }}
            >
                {month}
            </h4>
        </div>
    );
};

export default TodayCalendar;