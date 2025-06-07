
import React, { useState } from 'react';
import { Cloud, Thermometer, Droplets, Wind, Sun, CloudDrizzle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const [selectedWeatherType, setSelectedWeatherType] = useState('sunny');
  
  const weatherData = {
    sunny: {
      icon: Sun,
      title: 'Sunny Weather',
      temp: '28°C',
      humidity: '45%',
      wind: '12 km/h',
      description: 'Perfect weather for outdoor agricultural activities. Ensure adequate water supply for crops.',
      seedTips: ['Plant heat-resistant varieties', 'Ensure proper irrigation', 'Use mulching to retain moisture']
    },
    rainy: {
      icon: CloudDrizzle,
      title: 'Rainy Season',
      temp: '22°C',
      humidity: '85%',
      wind: '8 km/h',
      description: 'Ideal conditions for planting. Monitor drainage to prevent waterlogging.',
      seedTips: ['Choose flood-resistant seeds', 'Improve drainage systems', 'Monitor for fungal diseases']
    },
    cloudy: {
      icon: Cloud,
      title: 'Cloudy Weather',
      temp: '25°C',
      humidity: '70%',
      wind: '15 km/h',
      description: 'Moderate conditions. Good for most agricultural activities.',
      seedTips: ['Standard planting conditions', 'Monitor soil moisture', 'Regular pest inspection']
    }
  };

  const currentWeather = weatherData[selectedWeatherType];
  const IconComponent = currentWeather.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Know Your Weather, Preserve Your Seeds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive weather monitoring and agricultural guidance system to help farmers make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Weather Selection */}
          <div className="space-y-6">
            <h3 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
              Select Weather Condition
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(weatherData).map(([key, weather]) => {
                const IconComp = weather.icon;
                return (
                  <Button
                    key={key}
                    variant={selectedWeatherType === key ? "default" : "outline"}
                    className={`p-6 h-auto flex flex-col items-center space-y-2 ${
                      selectedWeatherType === key 
                        ? 'bg-earth-green hover:bg-forest-green' 
                        : 'hover:bg-earth-green/5'
                    }`}
                    onClick={() => setSelectedWeatherType(key)}
                  >
                    <IconComp className="h-8 w-8" />
                    <span className="font-medium">{weather.title}</span>
                  </Button>
                );
              })}
            </div>

            {/* Weather Details */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-earth-green rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span>{currentWeather.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Thermometer className="h-6 w-6 text-earth-green mx-auto mb-2" />
                    <div className="font-semibold">{currentWeather.temp}</div>
                    <div className="text-sm text-gray-600">Temperature</div>
                  </div>
                  <div className="text-center">
                    <Droplets className="h-6 w-6 text-earth-green mx-auto mb-2" />
                    <div className="font-semibold">{currentWeather.humidity}</div>
                    <div className="text-sm text-gray-600">Humidity</div>
                  </div>
                  <div className="text-center">
                    <Wind className="h-6 w-6 text-earth-green mx-auto mb-2" />
                    <div className="font-semibold">{currentWeather.wind}</div>
                    <div className="text-sm text-gray-600">Wind Speed</div>
                  </div>
                </div>
                
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                  {currentWeather.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Seed Preservation Tips */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-earth-green">🌱 Seed Preservation Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 font-medium">
                    Based on current {currentWeather.title.toLowerCase()} conditions:
                  </p>
                  <ul className="space-y-3">
                    {currentWeather.seedTips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-earth-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-earth-green/5 rounded-lg border border-earth-green/20">
                    <p className="text-sm text-gray-700">
                      <strong>💡 Pro Tip:</strong> Always store seeds in dry, cool places and use moisture-absorbing packets to maintain quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="font-poppins text-2xl font-semibold text-gray-900 mb-4">
              Need Professional Weather Monitoring?
            </h3>
            <p className="text-gray-600 mb-6">
              Get customized weather monitoring and agricultural guidance for your specific location
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-earth-green hover:bg-forest-green"
            >
              <a href="/contact">
                Request Custom Solution
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
