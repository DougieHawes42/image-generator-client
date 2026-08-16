# AI Image Generator — Frontend

A simple React frontend for an AI image generator. Users can enter a text prompt and generate an image through a clean, minimal interface.

The frontend provides the user interface for entering prompts, submitting generation requests, displaying loading states, and presenting the generated image.

> **Note:** The OpenAI API key should never be exposed in the frontend. Image-generation requests should be handled by a secure backend/API.

## Features

- 🎨 Clean image generation interface
- ✏️ Text prompt input
- 🖼️ Generated image display area
- ⚡ Generate button with loading state
- ❌ Basic error handling
- 📱 Responsive layout
- ⚛️ Built with React

## Tech Stack

- React
- JavaScript
- HTML5
- CSS3
- OpenAI API — accessed through a backend API

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application should then be available at the local development URL provided by your development server.

## How It Works

The frontend allows the user to:

1. Enter a description of the image they want to create.
2. Click the **Generate** button.
3. Send the prompt to the application's backend.
4. Receive the generated image.
5. Display the result in the image stage.

```text
User Prompt
     ↓
React Frontend
     ↓
Backend API
     ↓
OpenAI Image Generation
     ↓
Generated Image
     ↓
React Image Stage
```

## Project Structure

```text
src/
├── components/
│   ├── ImageStage.jsx
│   ├── PromptInput.jsx
│   └── GenerateButton.jsx
│
├── App.jsx
├── main.jsx
└── styles/
    └── ...
```

The exact structure may change as the project develops.

## Security

The OpenAI API key must **not** be stored in the React application or committed to GitHub.

The frontend should communicate with a backend endpoint that securely handles requests to OpenAI.

Never commit API keys, `.env` files containing secrets, or other sensitive credentials to the repository.

## Future Improvements

- Image generation history
- Download generated images
- Image variations
- Different image sizes
- Advanced generation settings
- User accounts
- Saved prompts
- Improved error handling
- Backend integration

## Status

🚧 **In development**

This project is being built as a simple AI image-generation application and will be expanded over time.

## License

This project is available for educational and personal development purposes.
