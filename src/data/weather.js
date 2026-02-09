
export const WEATHER_TYPES = {
    HOT_DRY: {
        id: 'hot_dry',
        label: 'Hot & Dry',
        tempRange: '30°C - 45°C',
        icon: 'Sun', // Lucide icon name
        description: 'High temperatures with low humidity. Requires drought-resistant crops.'
    },
    RAINY_HUMID: {
        id: 'rainy_humid',
        label: 'Rainy & Humid',
        tempRange: '25°C - 35°C',
        icon: 'CloudRain',
        description: 'Heavy rainfall and high humidity. Ideal for water-intensive crops.'
    },
    COLD: {
        id: 'cold',
        label: 'Cold Climate',
        tempRange: '10°C - 20°C',
        icon: 'Snowflake',
        description: 'Low temperatures. Suitable for winter crops (Rabi).'
    },
    MODERATE: {
        id: 'moderate',
        label: 'Moderate',
        tempRange: '20°C - 30°C',
        icon: 'CloudSun',
        description: 'Balanced weather conditions. suitable for most vegetables.'
    }
};

export const LOCATIONS = [
    { name: 'Assam', weather: 'RAINY_HUMID' },
    { name: 'Punjab', weather: 'HOT_DRY' },
    { name: 'Himachal Pradesh', weather: 'COLD' },
    { name: 'Maharashtra', weather: 'MODERATE' },
    { name: 'Rajasthan', weather: 'HOT_DRY' },
    { name: 'Kerala', weather: 'RAINY_HUMID' }
];

export const simulateLocationDetection = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Randomly pick a location for demo purposes
            const randomLoc = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
            resolve(randomLoc);
        }, 1500); // Simulate network delay
    });
};
