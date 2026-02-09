import React, { createContext, useState, useContext, useEffect } from 'react';
import { simulateLocationDetection, WEATHER_TYPES } from '../data/weather';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [weatherType, setWeatherType] = useState(null); // The detected weather
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [manualFilter, setManualFilter] = useState('ALL'); // 'ALL' or weather ID

    const detectLocation = async () => {
        setLoadingLocation(true);
        try {
            const locData = await simulateLocationDetection();
            setLocation(locData);
            if (WEATHER_TYPES[locData.weather]) {
                const wType = WEATHER_TYPES[locData.weather];
                setWeatherType(wType);
                setManualFilter(wType.id); // Auto-select detected weather
            } else {
                console.warn(`Weather type ${locData.weather} not found in configuration.`);
            }
        } catch (error) {
            console.error("Location detection failed", error);
        } finally {
            setLoadingLocation(false);
        }
    };

    const clearLocation = () => {
        setLocation(null);
        setWeatherType(null);
        setManualFilter('ALL');
    };

    const value = {
        location,
        weatherType,
        loadingLocation,
        detectLocation,
        clearLocation,
        manualFilter,
        setManualFilter,
        WEATHER_TYPES
    };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
};
