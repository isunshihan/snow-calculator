import React, { useState } from 'react';
import { Search, Snowflake, Wind, ThermometerSnowflake, MapPin, Loader2, Cloud, Sun, CloudRain } from 'lucide-react';
import { getWeatherData, WeatherData } from './services/openweather';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWeatherSearch = async () => {
    if (!location) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherData(location);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Get weather icon based on OpenWeather icon code
  const getWeatherIcon = (iconCode: string) => {
    // OpenWeather icon codes: https://openweathermap.org/weather-conditions
    if (iconCode.includes('01')) return <Sun className="h-6 w-6" />; // clear sky
    if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) return <Cloud className="h-6 w-6" />; // clouds
    if (iconCode.includes('09') || iconCode.includes('10')) return <CloudRain className="h-6 w-6" />; // rain
    if (iconCode.includes('13')) return <Snowflake className="h-6 w-6" />; // snow
    return <Cloud className="h-6 w-6" />; // default
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Snowflake className="h-8 w-8 text-blue-500" />
            <Link to="/" className="text-xl font-bold text-gray-900">Snow Day Calculator</Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><a href="https://github.com/isunshihan/snow-calculator" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Github</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <section className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Snow Day Calculator</h2>
              
              {/* Search Box Section */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Enter Zip Code or City"
                      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleWeatherSearch()}
                    />
                  </div>
                  <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                    onClick={handleWeatherSearch}
                    disabled={loading || !location}
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Search className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {error && (
                  <div className="mt-2 text-red-600 text-sm">
                    {error}
                  </div>
                )}
              </div>

              {/* Weather Results Section */}
              {weather && (
                <div className="max-w-4xl mx-auto mb-16">
                  {/* Snow Information */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <Snowflake className="h-6 w-6" />
                      <div>
                        <p className="font-semibold">Snowfall: {weather.current.snow} mm</p>
                        <p className="font-semibold">Snow Day Chance: {weather.snow_day_chance}%</p>
                      </div>
                    </div>
                  </div>

                  {/* Current Conditions */}
                  <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Temperature Section */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <ThermometerSnowflake className="h-6 w-6 text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-600">Temperature</p>
                            <p className="font-semibold">{weather.current.temp}°F</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <ThermometerSnowflake className="h-6 w-6 text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-600">Feels Like</p>
                            <p className="font-semibold">{weather.current.feels_like}°F</p>
                          </div>
                        </div>
                      </div>

                      {/* Other Conditions */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CloudRain className="h-6 w-6 text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-600">Precipitation</p>
                            <p className="font-semibold">{weather.current.precipitation} mm</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getWeatherIcon(weather.current.icon)}
                          <div>
                            <p className="text-sm text-gray-600">Weather</p>
                            <p className="font-semibold">{weather.current.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Wind className="h-6 w-6 text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-600">Wind Speed</p>
                            <p className="font-semibold">{weather.current.wind_speed} mph</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Forecast */}
                  <div className="mt-4 space-y-2">
                    {weather.forecast.map((day, index) => (
                      <div key={day.date} className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getWeatherIcon(day.icon)}
                          <span className="font-medium">
                            {index === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-gray-600">{day.description}</span>
                          <span>{day.max_temp}°F / {day.min_temp}°F</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Introduction Section */}
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-gray-600 mb-6">
                  The Snow Day Calculator is a helpful tool to predict snow days. By looking at live weather forecasts and past data, 
                  this tool gives you an idea of how likely it is to snow. Many parents, teachers, and students love using the snow day predictor 
                  because it helps them prepare for school closures. It uses smart algorithms to check daily snowfall, temperatures, and other weather details.
                </p>
              </div>

              {/* What is a Snow Day Calculator Section */}
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-6">What is a Snow Day Calculator?</h3>
                <p className="text-gray-600 mb-6">
                  A snow day calculator uses weather data to guess if snow might cause schools or colleges to close. It looks at:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-blue-600">Daily snowfall</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-blue-600">How cold it feels outside</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-blue-600">Wind chill and storm warnings</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="mt-16 border-t border-gray-200 pt-8">
                <div className="max-w-3xl mx-auto">
                  {/* How Does the Snow Day Predictor Work Section */}
                  <div className="text-center mb-16">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">How Does the Snow Day Predictor Work?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-semibold">Snowfall Amounts</h4>
                        <p className="text-gray-600">How much snow is expected in your area?</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-semibold">Temperature</h4>
                        <p className="text-gray-600">If it's below freezing, snow is more likely.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-semibold">Wind Chill</h4>
                        <p className="text-gray-600">Harsh winds can increase the chances of closures.</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      When you enter your location, the tool looks at these details to calculate the chance of a snow day. 
                      It's super helpful for students and teachers, allowing them to plan ahead for school closures.
                    </p>
                  </div>

                  {/* Why Use a Snow Day Calculator Section */}
                  <div className="bg-blue-50 p-8 rounded-lg mb-16">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Use a Snow Day Calculator?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-semibold mb-3 text-blue-600">Parents</h4>
                        <p className="text-gray-600">Plan your workday knowing if your kids will be home.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-semibold mb-3 text-blue-600">Students</h4>
                        <p className="text-gray-600">Get excited about a possible snow day!</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-semibold mb-3 text-blue-600">Schools</h4>
                        <p className="text-gray-600">Use it to decide whether to close or stay open.</p>
                      </div>
                    </div>
                    <p className="text-center mt-6 text-gray-600">It's a simple way to stay informed during winter storms.</p>
                  </div>

                  {/* What Factors Affect Section */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What Factors Affect the Snow Day Calculator?</h3>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">1</span>
                          <div>
                            <h4 className="font-semibold">Weather Data</h4>
                            <p className="text-gray-600">Live reports of snowfall, wind, and freezing temperatures.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">2</span>
                          <div>
                            <h4 className="font-semibold">Past Trends</h4>
                            <p className="text-gray-600">Patterns from previous years help predict snow days.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">3</span>
                          <div>
                            <h4 className="font-semibold">Local Conditions</h4>
                            <p className="text-gray-600">Nearby lakes, mountains, or elevations can affect snow amounts.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Final Summary */}
                  {/* <div className="text-center mb-8 bg-gray-50 p-8 rounded-lg">
                    <p className="text-gray-600 mb-4">
                      The Snow Day Calculator is a fantastic tool for predicting school closures during bad weather. 
                      By using real-time data and historical trends, it gives accurate results to help families and schools plan better.
                    </p>
                    <p className="text-gray-600">
                      Whether you're a student hoping for a day off or a parent planning ahead, this tool is your best winter companion. 
                      Give it a try and see how helpful it can be!
                    </p>
                  </div> */}

                  {/* FAQ Section */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">FAQ About the Snow Day Predictor</h3>
                    <div className="grid gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">Can the Snow Day Calculator Predict Exact Snowfall?</h4>
                        <p className="text-gray-600">No, it estimates snowfall based on weather patterns and reports but can't give exact numbers.</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">Can I Use the Snow Day Calculator for Non-School Closures?</h4>
                        <p className="text-gray-600">Yes, you can use it to predict snow conditions that may affect work or travel plans.</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">How Accurate is the Snow Day Calculator?</h4>
                        <p className="text-gray-600">It's very accurate when used with up-to-date location and weather data.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </section>
          </main>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;