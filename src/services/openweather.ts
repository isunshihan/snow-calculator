import axios from 'axios';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  current: {
    temp: number;
    max_temp: number;
    min_temp: number;
    wind_speed: number;
    precipitation: number;
    snow: number;
    description: string;
    feels_like: number;
    icon: string;
  };
  forecast: Array<{
    date: string;
    temp: number;
    max_temp: number;
    min_temp: number;
    description: string;
    icon: string;
    precipitation: number;
    snow: number;
  }>;
  location: string;
  snow_day_chance: number;
}

function calculateSnowDayChance(temp: number, precipitation: number): number {
  if (temp > 35) return 0;
  
  let chance = 0;
  
  if (temp <= 32) {
    chance += 50;
    chance += (32 - temp) * 2;
  } else {
    chance += (35 - temp) * 10;
  }
  
  if (precipitation > 0) {
    chance += Math.min(precipitation * 20, 40);
  }
  
  return Math.min(Math.round(chance), 100);
}

// 从 OpenWeather 获取天气数据
export async function getWeatherData(location: string): Promise<WeatherData> {
  console.log('Fetching weather data from OpenWeather API...');
  
  try {
    // 1. 获取当前天气
    const currentResponse = await axios.get(`${OPENWEATHER_BASE_URL}/weather`, {
      params: {
        q: location,
        appid: OPENWEATHER_API_KEY,
        units: 'imperial',
        lang: 'en'
      }
    });

    if (!currentResponse.data) {
      throw new Error('Invalid response from OpenWeather API');
    }

    // 2. 获取预报
    const forecastResponse = await axios.get(`${OPENWEATHER_BASE_URL}/forecast`, {
      params: {
        q: location,
        appid: OPENWEATHER_API_KEY,
        units: 'imperial',
        lang: 'en'
      }
    });

    if (!forecastResponse.data) {
      throw new Error('Invalid response from OpenWeather API');
    }

    const currentData = currentResponse.data;
    const forecastList = forecastResponse.data.list;

    // 按天分组预报数据
    const dailyForecasts = forecastList.reduce((acc: Map<string, any>, item: any) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!acc.has(date)) {
        acc.set(date, {
          temps: [],
          descriptions: [],
          icons: [],
          precipitation: 0,
          snow: 0
        });
      }
      const day = acc.get(date);
      day.temps.push(item.main.temp);
      day.descriptions.push(item.weather[0].description);
      day.icons.push(item.weather[0].icon);
      if (item.rain) {
        day.precipitation += item.rain['3h'] || 0;
      }
      if (item.snow) {
        day.snow += item.snow['3h'] || 0;
      }
      return acc;
    }, new Map());

    // 转换为每日数据
    const forecast = Array.from(dailyForecasts.entries()).slice(0, 6).map(([date, data]) => ({
      date,
      temp: Math.round(data.temps.reduce((a: number, b: number) => a + b, 0) / data.temps.length),
      max_temp: Math.round(Math.max(...data.temps)),
      min_temp: Math.round(Math.min(...data.temps)),
      description: data.descriptions[Math.floor(data.descriptions.length / 2)],
      icon: data.icons[Math.floor(data.icons.length / 2)],
      precipitation: Math.round(data.precipitation * 10) / 10,
      snow: Math.round(data.snow * 10) / 10
    }));

    const snowDayChance = calculateSnowDayChance(
      currentData.main.temp,
      (currentData.rain?.['1h'] || 0) + (currentData.snow?.['1h'] || 0)
    );

    return {
      current: {
        temp: Math.round(currentData.main.temp),
        max_temp: Math.round(currentData.main.temp_max),
        min_temp: Math.round(currentData.main.temp_min),
        wind_speed: Math.round(currentData.wind.speed),
        precipitation: currentData.rain?.['1h'] || 0,
        snow: currentData.snow?.['1h'] || 0,
        description: currentData.weather[0].description,
        feels_like: Math.round(currentData.main.feels_like),
        icon: currentData.weather[0].icon
      },
      forecast,
      location: currentData.name,
      snow_day_chance: snowDayChance
    };
  } catch (error) {
    console.error('OpenWeather API Error:', error);
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Failed to fetch weather data';
      throw new Error(`Weather API Error: ${message}`);
    }
    throw error;
  }
}
