import { WEATHER_TYPES } from './weather';

export const SEEDS = [
    {
        id: 1,
        name: 'Hybrid Paddy Seed (Rice)',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600',
        suitableWeather: [WEATHER_TYPES.RAINY_HUMID.id, WEATHER_TYPES.MODERATE.id],
        tempRange: '22°C - 35°C',
        soilType: 'Clay / Loamy',
        season: 'Kharif',
        description: 'High-yielding rice variety resistant to common pests.',
        guide: 'Sow seeds after first rainfall. Maintain proper water drainage. Harvest in 110-120 days.'
    },
    {
        id: 2,
        name: 'Organic Wheat Seed',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600',
        suitableWeather: [WEATHER_TYPES.COLD.id, WEATHER_TYPES.MODERATE.id],
        tempRange: '10°C - 25°C',
        soilType: 'Loamy',
        season: 'Rabi',
        description: 'Premium wheat seeds for cold climates. Excellent flour quality.',
        guide: 'Sow in early winter. Requires 3-4 irrigations. Harvest when grain is hard.'
    },
    {
        id: 3,
        name: 'Drought-Tolerant Maize',
        image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=600',
        suitableWeather: [WEATHER_TYPES.HOT_DRY.id, WEATHER_TYPES.MODERATE.id],
        tempRange: '25°C - 40°C',
        soilType: 'Sandy Loam',
        season: 'Kharif / Zaid',
        description: 'Requires less water. Fast-growing variety for dry regions.',
        guide: 'Plant in rows. Water weekly. Harvest when husk turns brown.'
    },
    {
        id: 4,
        name: 'Mustard Seeds',
        image: 'https://images.unsplash.com/photo-1508595165502-3e911b94286c?auto=format&fit=crop&q=80&w=600',
        suitableWeather: [WEATHER_TYPES.COLD.id, WEATHER_TYPES.MODERATE.id],
        tempRange: '10°C - 25°C',
        soilType: 'Loamy',
        season: 'Rabi',
        description: 'High oil content mustard seeds. Frost tolerant.',
        guide: 'Sow in Oct-Nov. Thin plants after 20 days. Harvest when pods yellow.'
    },
    {
        id: 5,
        name: 'Red Chilli (Spicy)',
        image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=600',
        suitableWeather: [WEATHER_TYPES.HOT_DRY.id, WEATHER_TYPES.RAINY_HUMID.id],
        tempRange: '20°C - 35°C',
        soilType: 'Well-drained Loam',
        season: 'Summer / Monsoon',
        description: 'Very spicy variety. Disease resistant.',
        guide: 'Transplant seedlings after 4-5 weeks. Avoid waterlogging. Harvest red ripe fruits.'
    },
    {
        id: 6,
        name: 'Tomato (Hybrid)',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=600',
        suitableWeather: [WEATHER_TYPES.MODERATE.id, WEATHER_TYPES.COLD.id],
        tempRange: '15°C - 30°C',
        soilType: 'Loam / Sandy Loam',
        season: 'All Season',
        description: 'Fleshy, juicy tomatoes. Good for salads and cooking.',
        guide: 'Stake plants for support. Prune side shoots. Harvest when fully colored.'
    }
];
