# Vehicle-Builder
# Vehicle-Builder
Vehicle Builder CLI

Overview

The Vehicle Builder CLI is an interactive command-line application that allows users to build, view, and manage a variety of vehicles. The tool supports creating different types of vehicles such as cars, trucks, and motorbikes, and provides options to view vehicle details and perform specific actions on them.

This project is built with TypeScript, leveraging object-oriented programming principles such as inheritance and polymorphism, and serves as a practical tool for managing vehicle data.

Features

	1.	Interactive CLI:
	•	User-friendly prompts for seamless interaction.
	•	Menu options for viewing vehicles, adding new vehicles, and performing actions.
	2.	Vehicle Types:
	•	Truck: Equipped with towing capabilities and attributes like towingCapacity.
	•	Car: Standard vehicle with attributes like make, model, and topSpeed.
	•	Motorbike: Compact vehicle with attributes for unique performance.
	3.	Object-Oriented Design:
	•	Built using TypeScript classes to encapsulate vehicle functionality.
	•	Shared Vehicle base class for consistent structure across all vehicle types.
	•	Implements reusable interfaces for shared behaviors.
	4.	Dynamic Vehicle Management:
	•	Create and manage vehicles dynamically during runtime.
	•	View detailed information about all vehicles in the system.
	5.	Extendable Architecture:
	•	Easily add new vehicle types or functionality by extending the base Vehicle class.

    Installation

Prerequisites

	•	Node.js (v16 or higher)
	•	npm (v8 or higher)

Steps

	1.	Clone the repository:
    git clone https://github.com/<your-username>/vehicle-builder.git
cd vehicle-builder
	2.	Install dependencies:
    npm install 
    	3.	Build the project:
        npm run build 
        	4.	Start the CLI:
            npm run start

            Usage

When you start the CLI, you will see a menu with the following options:

Menu Options

	1.	View All Vehicles: Displays a list of all vehicles in the system with their details.
	2.	Add a New Vehicle: Allows you to input details for a new vehicle (e.g., Truck, Car, Motorbike).
	3.	Perform Actions: Perform specific actions, such as towing a vehicle (for trucks).
	4.	Exit: Closes the application.

    Technologies Used

	•	TypeScript: Provides strong typing and modern JavaScript features.
	•	Node.js: Runtime environment for running the CLI.
	•	Inquirer.js: Library for interactive CLI prompts.

    Future Enhancements

	•	Add persistent storage to save vehicles across sessions.
	•	Extend the application to handle more specialized vehicle types.
	•	Implement validations for input fields.

    Contributing

Contributions are welcome! Please fork the repository, create a new branch for your feature or bugfix, and submit a pull request.
