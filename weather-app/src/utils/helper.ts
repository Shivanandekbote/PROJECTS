import React from "react";
export function formatTemperature(temperature: number, unit: 'C' | 'F'): string {
    if (unit === 'C') {
        return `${temperature.toFixed(1)} °C`;
    } else {
        return `${((temperature * 9/5) + 32).toFixed(1)} °F`;
    }
}

export function formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

export default formatTemperature;