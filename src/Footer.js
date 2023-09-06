// Footer.js
import React from 'react'; // Import the React library
// Define the Footer component
const Footer = () => {
	// Return the JSX for the Footer component
	return (
		<footer className="bg-dark text-white mt-5 py-3">
			{' '}
			{/* The footer element */}
			<div className="container text-center">
				{' '}
				{/* The container element */}
				&copy; 2023 College Test {/* The copyright text */}
			</div>
		</footer>
	);
};
// Export the Footer component so it can be imported in other parts of the project
export default Footer;
