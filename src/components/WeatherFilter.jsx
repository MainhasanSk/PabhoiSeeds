import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { Sun, CloudRain, Snowflake, CloudSun, Leaf, MapPin } from 'lucide-react';

const WeatherFilter = ({ onRequestLocation }) => {
    const { manualFilter, setManualFilter, WEATHER_TYPES, location } = useWeather();

    const handleLocationFilter = () => {
        if (location) {
            // If location is known, find the corresponding weather type ID
            // In our simple app, location object has 'weather' property which is the ID
            setManualFilter(location.weather);
        } else {
            // If location unknown, ask implementation to request it (open modal)
            onRequestLocation();
        }
    };

    const filters = [
        { id: 'ALL', label: 'All Seeds', icon: Leaf },
        ...Object.values(WEATHER_TYPES).map(w => ({
            id: w.id,
            label: w.label,
            icon: w.id === 'HOT_DRY' ? Sun :
                w.id === 'RAINY_HUMID' ? CloudRain :
                    w.id === 'COLD' ? Snowflake : CloudSun
        }))
    ];

    return (
        <div style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '8px',
            scrollbarWidth: 'none',
            marginBottom: '32px'
        }}>
            {/* Location Filter Button */}
            <button
                onClick={handleLocationFilter}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: 'var(--radius-full)',
                    border: (location && manualFilter === location.weather) ? '2px solid var(--color-primary)' : '1px solid #ddd',
                    backgroundColor: (location && manualFilter === location.weather) ? 'rgba(46, 125, 50, 0.1)' : 'white',
                    color: (location && manualFilter === location.weather) ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    fontWeight: (location && manualFilter === location.weather) ? 700 : 500,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    flexShrink: 0
                }}
            >
                <MapPin size={18} />
                Seeds for your location
            </button>

            {filters.map(filter => {
                const isActive = manualFilter === filter.id;
                const Icon = filter.icon;

                return (
                    <button
                        key={filter.id}
                        onClick={() => setManualFilter(filter.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: 'var(--radius-full)',
                            border: isActive ? '2px solid var(--color-primary)' : '1px solid #ddd',
                            backgroundColor: isActive ? 'rgba(46, 125, 50, 0.1)' : 'white',
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            fontWeight: isActive ? 700 : 500,
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s',
                            flexShrink: 0
                        }}
                    >
                        <Icon size={18} />
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
};

export default WeatherFilter;
