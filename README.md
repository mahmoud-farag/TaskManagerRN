# Task Manager App

> **Important Note**: This is my **first ever** React Native project! I've built this to learn the framework and ecosystem.

A simple Task Manager application built with **React Native (Expo)**, **NativeWind**, and **TypeScript**.

## Features

- **Task List**: View all your tasks in a clean, scrollable list.
- **Task Details**: Tap on any task to view full details (description, priority, dates).
- **Filtering**: Filter tasks by status (All, High, Medium, Low).
- **Add Tasks**: Easily create new tasks with title, description, and priority.
- **Task Management**: Mark tasks as completed or delete them with a swipe.
- **Swipe Actions**: Swipe left on a task to delete it.

## Installation

1.  **Clone the repository**.
2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Running the App

Start the development server:

```bash
npx expo start
```

- Scan the QR code with **Expo Go** (Android/iOS) to run on your device.
- Press `a` for Android Emulator.
- Press `i` for iOS Simulator.

## Design & Attribution

The UI/UX of this application is inspired by the beautiful [Task Management App Design](https://dribbble.com/shots/25731016-Task-Management-App-Design) on Dribbble.

## Tech Stack & Libraries

This project utilizes the following key libraries:

- **[NativeWind](https://www.nativewind.dev/)**: For styling components using Tailwind CSS classes directly in React Native.
- **[Expo Router](https://docs.expo.dev/router/introduction/)**: For file-based navigation (managing Screens, Tabs, and Modals).
- **[@gorhom/bottom-sheet](https://ui.gorhom.io/components/bottom-sheet/)**: A performant and interactive bottom sheet component used for the task list.
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)**: For creating the gradient aesthetics.
- **[Expo Vector Icons](https://icons.expo.fyi/)**: For the application icons (Ionicons).
