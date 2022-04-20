# Getting Started with React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `API`
The API start on port 5000

### `Endpoints`

This project includes four endpoints that you will be able to use:

http://localhost:5000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:5000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:5000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:5000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.
