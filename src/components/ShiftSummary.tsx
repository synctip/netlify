import { Employee } from "@/types/Employee.type";
import React from "react";
import GoogleFontSvg from "@/components/GoogleFontSvg";

type ShiftSummaryComponent = React.FC<{
    employees: Employee[];
    total: number;
}>;

const ShiftSummary: ShiftSummaryComponent = ({ employees, total }) => {
    const hours = employees.reduce((curr, prev, indx) => curr += prev.hours, 0);
    const perhour = hours > 0 && total > 0 ? total / hours : 0;
    const team = employees.length;

    return (
        <React.Fragment>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <GoogleFontSvg text={`צוות`} value={team}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0089c0"><path d="M0-240v-59q0-51 45-80t123-29q15 0 30 1.5t30 4.5q-17 20-26.5 45t-9.5 50.56V-240H0Zm240 0v-61q0-27.86 14.5-50.93T293-387q44-22 91-33.5t95.53-11.5Q529-432 576-420.5t91 33.5q24 12 38.5 35.07T720-301v61H240Zm528 0v-67.37q0-26.95-9.5-50.79T732-402q17-3 31.5-4.5T792-408q78 0 123 29t45 80v59H768Zm-454-72h332q-7-17-59.5-32.5T480-360q-54 0-106.5 15.5T314-312ZM167.79-456Q138-456 117-477.03q-21-21.02-21-50.55Q96-558 117.03-579q21.02-21 50.55-21Q198-600 219-579.24t21 51.45Q240-498 219.24-477t-51.45 21Zm624 0Q762-456 741-477.03q-21-21.02-21-50.55Q720-558 741.03-579q21.02-21 50.55-21Q822-600 843-579.24t21 51.45Q864-498 843.24-477t-51.45 21ZM479.5-480q-49.5 0-84.5-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85.5q0 49.5-35 84.5t-85.5 35Zm.5-72q20.4 0 34.2-13.8Q528-579.6 528-600q0-20.4-13.8-34.2Q500.4-648 480-648q-20.4 0-34.2 13.8Q432-620.4 432-600q0 20.4 13.8 34.2Q459.6-552 480-552Zm0 240Zm0-288Z" /></svg>                </GoogleFontSvg>
                <GoogleFontSvg text={`שעות`} value={hours}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0089c0"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" /></svg>                </GoogleFontSvg>
                <GoogleFontSvg text={`לשעה`} value={perhour > 0 ? perhour.toFixed() : 0}>
                    <svg fill="#0089c0" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="-7.89 -7.89 94.70 94.70" stroke="#0089c0" strokeWidth="0.00078917" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.947004"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M32.501,16.458H9.021L9,66.958c0,2.48-2.019,4.5-4.5,4.5s-4.5-2.02-4.5-4.5l0.025-55.005 c0.003-2.479,2.021-4.495,4.5-4.495h27.977c13.51,0,24.5,10.991,24.5,24.5v23c0,2.48-2.02,4.5-4.5,4.5s-4.5-2.02-4.5-4.5v-23 C48.001,23.412,41.048,16.458,32.501,16.458z M74.417,7.458c-2.481,0-4.5,2.019-4.5,4.5l-0.021,50.5h-23.48 c-8.547,0-15.5-6.953-15.5-15.5v-23c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v23c0,13.509,10.99,24.5,24.5,24.5h27.977 c2.479,0,4.498-2.016,4.5-4.495l0.024-55.005C78.917,9.478,76.898,7.458,74.417,7.458z"></path> </g> </g></svg>
                </GoogleFontSvg>
            </div>
        </React.Fragment>
    )
};

export default ShiftSummary;