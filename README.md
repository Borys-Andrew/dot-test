# Test Task - Bitcoin Tracker

This project is a React-based single-page application (SPA) that tracks live Bitcoin transactions using WebSocket and offers an interactive workspace for manipulating draggable and resizable blocks.

## Features

### Task 1: Interactive Workspace

- **Draggable Blocks**: Users can move five numbered blocks on a grid layout.
- **Resizable Blocks**: Blocks are resizable both horizontally and vertically.
- **Z-Index Control**: Click a block to bring it to the front layer.
- **Delete Blocks**: Users can remove any block.
- **Restore Defaults**: The "Reset" button restores blocks to their initial size and position.
- **Persistent State**: The layout (positions, sizes, visibility) is saved and persists after page refresh.

### Task 2: WebSocket-based Bitcoin Transactions

- **Real-Time Transaction Tracking**: Continuously updates the list of Bitcoin transactions via WebSocket.
- **Start/Stop Controls**: Start and stop receiving live updates, while retaining the current list.
- **Reset Control**: Clears the transaction list and resets the total sum to zero.
- **Total Sum**: Displays the total sum of received Bitcoin transactions in real-time.

## Tech Stack

- **React 18** for the frontend framework.
- **TypeScript** for static type checking.
- **Zustand** for state management.
- **Vite** for bundling and development server.
- **Tailwind CSS** for utility-first styling.
- **shadcn/ui** for custom UI components.
- **React-RND** for resizable and draggable components.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
