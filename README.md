# Snow Day Calculator: Predict School Closures Due to Snow

The **Snow Day Calculator** is a web application designed to predict the likelihood of school closures due to snow. By leveraging real-time weather data from the OpenWeatherMap API, this tool provides users with an estimate of the chances of a snow day, helping students, parents, and teachers prepare for potential disruptions.

## Features

-   **Real-time Weather Data**: Fetches current weather conditions and forecasts from the OpenWeatherMap API.
-   **Location-Based Predictions**: Allows users to input a location (city or postal code) to get localized weather data.
-   **Snow Day Probability**: Calculates the probability of a snow day based on temperature and precipitation data.
-   **Detailed Weather Information**: Displays current temperature, wind speed, precipitation, and weather descriptions.
-   **Multi-Day Forecast**: Provides a 5-day weather forecast, including daily temperatures, weather descriptions, and precipitation.
-   **User-Friendly Interface**: Simple and intuitive design for easy navigation and use.
-   **Responsive Design**: Works seamlessly on various devices, including desktops, tablets, and smartphones.

## How It Works

The Snow Day Calculator works by:

1.  **Fetching Weather Data**: When a user enters a location, the application sends a request to the OpenWeatherMap API to retrieve current weather conditions and a 5-day forecast.
2.  **Analyzing Weather Data**: The application processes the weather data, extracting relevant information such as temperature, precipitation, and snow.
3.  **Calculating Snow Day Chance**: Based on the temperature and precipitation data, the application calculates the probability of a snow day using a custom algorithm.
    -   If the temperature is below 32°F (0°C), the chance of a snow day increases.
    -   If there is precipitation (rain or snow), the chance of a snow day increases further.
4.  **Displaying Results**: The application displays the current weather conditions, the 5-day forecast, and the calculated snow day probability to the user.

## Usage

1.  **Enter Location**: Type a city name or postal code into the search box.
2.  **View Results**: The application will display the current weather, a 5-day forecast, and the snow day probability.
3.  **Plan Accordingly**: Use the information to plan for potential school closures or delays.

## Technical Details

-   **Frontend**: Built using React with TypeScript.
-   **Styling**: Uses Tailwind CSS for a responsive and modern design.
-   **Icons**: Uses Lucide React for icons.
-   **Data Fetching**: Uses Axios for making HTTP requests to the OpenWeatherMap API.
-   **API**: OpenWeatherMap API is used to fetch weather data.

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```
2.  Navigate to the project directory:

    ```bash
    cd snow-day-calculator
    ```
3.  Install dependencies:

    ```bash
    npm install
    ```
4.  Create a `.env` file in the root directory and add your OpenWeatherMap API key:

    ```
    VITE_OPENWEATHER_API_KEY=your_openweather_api_key
    ```
5.  Start the development server:

    ```bash
    npm run dev
    ```

## Contributing

Contributions are welcome! If you have any suggestions or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Disclaimer

The Snow Day Calculator is intended for informational purposes only. The accuracy of the snow day predictions may vary due to the complexity of weather patterns and other factors. Please use this tool as a guide and always refer to official school announcements for the most accurate information.
