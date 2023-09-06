// App.js
import React from 'react'; // Import the React library
import './App.css'; // Import the CSS file for the project
import Footer from './Footer'; // Import the Footer component
import MainSection from './MainSection'; // Import the MainSection component
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
// Define the App component
function App() {
	// Return the JSX for the App component
	return (
		<div className="App">
			{' '}
			{/* The root element of the App component */}
			<NavigationBar /> {/* Render the NavigationBar component */}
			<MainSection /> {/* Render the MainSection component */}
			<Footer /> {/* Render the Footer component */}
		</div>
	);
}
// Export the App component so it can be imported in other parts of the project
export default App;
