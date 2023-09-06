// MainSection.js
import React from 'react'; // Import the React library
// Define the MainSection component
const MainSection = () => {
	// Return the JSX for the MainSection component
	return (
		<div className="container">
			{' '}
			{/* The container element */}
			<h1>Welcome to Our College Test</h1> {/* The heading */}
			<p>
				College Test is a leading educational institution that offers a wide
				range of undergraduate and graduate programs. We are committed to
				providing our students with a high-quality education that prepares them
				for success in their careers and lives.
			</p>
			<p>
				Our campus is located in a beautiful and vibrant city, and we offer a
				variety of student activities and organizations. We are also home to a
				diverse and talented faculty who are dedicated to teaching and research.
			</p>
			<p>
				If you are interested in learning more about College Test, please visit
				our website or contact us today. We look forward to hearing from you!
			</p>
		</div>
	);
};
// Export the MainSection component so it can be imported in other parts of the project
export default MainSection;
