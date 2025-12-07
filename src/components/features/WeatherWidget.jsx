import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye } from 'lucide-react';
import Card from '../ui/Card';

const WeatherWidget = ({ city = 'London' }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using demo data - replace with actual OpenWeatherMap API if needed
    loadWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const loadWeather = async () => {
    try {
      setLoading(true);
      // Demo weather data
      const demoWeather = {
        city: city,
        temp: 18,
        description: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12,
        visibility: 10,
        icon: 'cloud'
      };
      
      setTimeout(() => {
        setWeather(demoWeather);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error loading weather:', error);
      setLoading(false);
    }
  };

  const getWeatherIcon = (icon) => {
    switch (icon) {
      case 'sun':
        return Sun;
      case 'cloud':
        return Cloud;
      case 'rain':
        return CloudRain;
      default:
        return Cloud;
    }
  };

  if (loading) {
    return (
      <Card className="p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        </div>
      </Card>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.icon);

  return (
    <Card className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-dark-600 mb-1">{weather.city}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-dark-900">{weather.temp}°</span>
            <span className="text-sm text-dark-600">{weather.description}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <WeatherIcon className="w-12 h-12 text-blue-600" />
        </motion.div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-1">
          <Droplets className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-dark-600">{weather.humidity}%</span>
        </div>
        <div className="flex items-center gap-1">
          <Wind className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-dark-600">{weather.windSpeed}km/h</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-dark-600">{weather.visibility}km</span>
        </div>
      </div>
    </Card>
  );
};

export default WeatherWidget;
