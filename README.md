# Interactive Physics Simulator with LLM-Based Scenario Scripting — **physiflow**

## Project Overview

**physiflow** is an interactive physics simulator that lets users describe physics scenarios in natural language, which are then rendered as interactive 2D animations using the [Matter.js](https://brm.io/matter-js/) physics engine. Built with React and styled with Tailwind CSS, the simulator offers a responsive, user-friendly interface.

The goal is to enhance physics education by making physics concepts accessible and engaging through dynamic simulations. Currently, the system matches user input to predefined animations, but future plans include integrating Large Language Models (LLMs) to automatically interpret and generate simulation scripts.

---

## Features

- **Natural Language Input:** Describe physics scenarios in plain text.
- **Predefined Scenario Matching:** Maps input to predefined physics animations.
- **Interactive 2D Simulations:** Visual physics experiments rendered on a 400x400 pixel canvas.
- **Multiple Animations:** Includes simulations such as:
  - Two balls colliding on a frictionless surface
  - Newton’s Cradle
  - Pendulum
- **User Interface:** Clean React UI with dropdown selection and input field.
- **Graceful Fallbacks:** User-friendly messages when requested animations are not available.

---

## Technologies Used

- **React:** UI component library
- **Matter.js:** 2D physics engine for rigid body simulation
- **Tailwind CSS:** Utility-first CSS framework for styling
- **Vite:** Fast development and build tool

---

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn package manager

### Installation

```bash
git clone https://github.com/ziadkaroune/physiflow.git
cd interactive-physics-simulator
npm install

### Running the Development Server
npm run dev
http://localhost:3000
