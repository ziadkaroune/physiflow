<strong>Interactive Physics Simulator with LLM-Based Scenario Scripting – Documentation (physiflow)  <strong>

 

Project Overview 

This project implements an Interactive Physics Simulator that allows users to describe physics scenarios in natural language, which are then rendered as interactive 2D animations using the Matter.js physics engine. The simulator is built with React and styled using Tailwind CSS, providing a responsive and user-friendly interface. 

The goal is to enable physics education through dynamic simulations, making physics concepts more accessible and engaging. Although currently based on predefined mappings between user input and animations, this project lays the groundwork for integrating Large Language Models (LLMs) to automatically interpret and generate physics simulation scripts. 

 

Features 

Natural Language Input: Users can describe physics scenarios in plain text. 

Predefined Scenario Matching: Input is matched against a set of predefined physics animations. 

Interactive 2D Simulations: Visual physics experiments rendered using Matter.js on a 400x400 pixel canvas. 

Multiple Animations: Includes simulations like “Two balls collide on a frictionless surface,” Newton’s Cradle, and a Pendulum. 

User Interface: Clean.  React UI with a dropdown selection and input field. 

Graceful Fallbacks: Displays user-friendly messages when requested animations are not available. 

 

Technologies Used 

React: Frontend library for building UI components. 

Matter.js: 2D physics engine for simulating rigid body physics. 

Tailwind CSS: Utility-first CSS framework for styling. 

Vite: Fast development and build tool. 

 

Getting Started 

Prerequisites 

Node.js (version 20.19.0 or higher recommended) 

npm or yarn package manager 

Installation 

Clone the repository: 

git clone https://github.com/yourusername/interactive-physics-simulator.git 
	cd interactive-physics-simulator 
 

Install dependencies: 

npm install 
 

Start the development server: 

npm run dev 
 

   Open your browser and navigate to: 

http://localhost:3000 
 

 

Usage 

Use the dropdown menu to select from available physics animations. 

Alternatively, describe a physics scenario in the input box (e.g., "two balls of different masses collide on a frictionless surface") and click the  button to load the matching simulation. 

If the input scenario is not supported, a message will notify you that the animation is coming soon. 

 

Code Structure 

App.js: Main component managing user input, animation selection, and rendering of simulation components. 

animation/: Folder containing individual React components for each physics simulation (e.g., MouvementBalls.js, NewtonsCradle.js, Pendulum.js). 

components/: Reusable UI components like Header and Footer. 

index.css: Global styles with Tailwind CSS integration. 

 

Future Work 

LLM Integration: Incorporate GPT or other large language models to parse arbitrary user input and dynamically generate physics simulation scripts. 

Expand Animation Library: Add more complex and diverse physics scenarios. 

3D Simulation: Explore integration with 3D engines like Three.js and physics engines such as Cannon.js. 

User Customization: Allow users to modify parameters like mass, velocity, and friction in real-time. 

 

 

 

 

Code Structure 

bash 

CopierModifier 

/src 
  ├── /animation 
  │     ├── MouvementBalls.js      # Simulation of two balls colliding on frictionless surface 
  │     ├── NewtonsCradle.js       # Newton’s Cradle physics simulation 
  │     ├── Pendulum.js            # Pendulum physics simulation 
  ├── /components 
  │     ├── Header.js              # Header UI component 
  │     ├── Footer.js              # Footer UI component 
  ├── App.js                      # Main application component managing state and rendering animations 
  ├── index.js                    # React app entry point 
  ├── index.css                   # Global styles with Tailwind CSS setup 
/public 
  ├── index.html                  # HTML template for React app 
package.json                     # Project dependencies and scripts 
tailwind.config.js               # Tailwind CSS configuration 
vite.config.js                  # Vite build and development server config 
 

Description of Key Files and Folders: 

/animation folder: 
 Contains React components, each representing a different physics simulation. These components encapsulate the Matter.js logic and rendering for their respective animations. 

/components folder: 
 Contains reusable UI components such as the Header and Footer to structure the application layout. 

App.js: 
 The core React component handling user interactions including dropdown selection and input processing. It manages state for selected animations and renders the correct animation component dynamically. 

index.js: 
 The entry point that renders the React app into the DOM. 

index.css: 
 Includes Tailwind CSS directives and any additional global styling. 

package.json: 
 Lists project dependencies like React, Matter.js, Tailwind CSS, and scripts to run and build the app. 

tailwind.config.js: 
 Configuration file for customizing Tailwind CSS. 

vite.config.js: 
 Configuration for the Vite development and build tool, enabling fast refresh and optimized bundling. 

 
