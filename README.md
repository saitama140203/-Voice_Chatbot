# Voice Chat App

Voice Chat App is a modern and interactive application interface built with Vite, React, TailwindCSS, and TypeScript. This project provides a foundation for creating a voice chat platform with a beautiful and responsive UI.

## Features

- **Modern Design**: Clean and attractive UI with smooth animations.
- **Responsive Layout**: Optimized for both desktop and mobile devices.
- **Dynamic Chatbox**: Displays user and system messages with visual differentiation.
- **Interactive Buttons**: Includes microphone and typing buttons with hover effects.
- **Theming**: Customized TailwindCSS colors for a cohesive look.
- **Icons**: Integrated with `react-icons` for professional-grade icons.

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Icons**: React Icons

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saitama140203/-Voice_Chatbot.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Frontend_react
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Installing Additional Libraries

If you need to add more libraries, use the following commands:

### React Icons
For adding more icons:
```bash
yarn add react-icons
```

### Axios
For HTTP requests:
```bash
yarn add axios
```

### Zustand
For state management:
```bash
yarn add zustand
```

## Project Structure

```
src/
├── components/
│   ├── ChatBox.tsx          // Main chat interface
│   ├── Message.tsx          // Individual chat message component
│   ├── MicrophoneButton.tsx // Microphone button with click handling
│   ├── Navbar.tsx           // Top navigation bar
├── App.tsx                  // Main app component
├── main.tsx                 // Entry point for React app
├── index.css                // TailwindCSS styles
```


### Adding Features
- **Voice Recognition**: Integrate Web Speech API or third-party services like Google Speech-to-Text.
- **Backend Integration**: Connect to a backend for real-time chat functionality.
- **User Authentication**: Add login/logout features.

## Dependencies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Screenshots

### Navbar
The top navigation bar features a clean design with a title and a profile button.

### Chatbox
The chat interface includes user and system messages with distinct styles.

### Microphone Button
A floating microphone button with a hover glow effect.


----------
Happy Coding! 🎉

