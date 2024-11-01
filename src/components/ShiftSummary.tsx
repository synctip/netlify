import { Employee } from "@/types/Employee.type";
import React from "react";
import GoogleFontSvg from "@/components/GoogleFontSvg";
import NisIcon from '@/icons/nis-icon.svg';
import ClockIcon from '@/icons/clock-icon.svg';
import PeopleIcon from '@/icons/people-icon.svg'
import HRS from "@/utils/FTH";

type ShiftSummaryComponent = React.FC<{
    employees: Employee[];
    total: number;
}>;

const ShiftSummary: ShiftSummaryComponent = ({ employees, total }) => {
    const hours = employees.reduce((curr, prev, indx) => {
        return curr += prev.hours + (prev.minutes / 60);
    }, 0);

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
                <GoogleFontSvg text={`צוות`} value={team >= 0 ? team : 0}>
                    <img src={PeopleIcon} />
                </GoogleFontSvg>
                <GoogleFontSvg text={`שעות`} value={HRS(hours)}>
                    <img src={ClockIcon} />
                </GoogleFontSvg>
                <GoogleFontSvg text={`לשעה`} value={perhour >= 0 ? perhour.toLocaleString('he-IL', {
                    maximumFractionDigits: 2
                }) : 0}>
                    <img src={NisIcon} />
                </GoogleFontSvg>
            </div>
        </React.Fragment>
    )
};

export default ShiftSummary;