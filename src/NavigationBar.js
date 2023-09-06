// NavigationBar.js
import React from 'react';
const NavigationBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			{/* The navbar brand (logo or text) */}
			<a className="navbar-brand" href="/">
				College Test Site
			</a>
			{/* The navbar toggler button (for mobile devices) */}
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			{/* The navbar collapse (contains the navigation links) */}
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					{/* Navigation link to the home page */}
					<li className="nav-item">
						<a className="nav-link" href="/home">
							Home
						</a>
					</li>
					{/* Navigation link to the about page */}
					<li className="nav-item">
						<a className="nav-link" href="/about">
							About
						</a>
					</li>
					{/* Navigation link to the courses page */}
					<li className="nav-item">
						<a className="nav-link" href="/courses">
							Courses
						</a>
					</li>
					{/* Navigation link to the contact page */}
					<li className="nav-item">
						<a className="nav-link" href="/contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
//Export the NavigationBar component so that it can be imported in other parts of the project
export default NavigationBar;
