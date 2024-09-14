# Project Name

## Overview

This is the frontend for a news application that displays news from a NodeJS Express backend. The application is built with NextJS (React), TypeScript, and Tailwind CSS.

## Project Structure

### Key Directories and Files

- **src/app/**: Contains the main application files, including global styles and layout components.

  - `globals.css`: Global CSS styles.
  - `layout.tsx`: Main layout component.
  - `news/`: Directory for news-related pages and components.
    - `archived/page.tsx`: Archived news page.
    - `layout.tsx`: Layout for news pages.
    - `page.tsx`: Main news page.
  - `page.tsx`: Main application page.

- **src/components/**: Contains reusable UI components.

  - `component/`: Directory for specific components.
    - `EmptyItem.tsx`: Component for displaying an empty item.
    - `Navbar.tsx`: Navigation bar component.
    - `NewCard.tsx`: Card component for displaying news.
    - `NewsList.tsx`: Component for listing news items.
    - `Sidebar.tsx`: Sidebar component.
    - `TitlePage.tsx`: Component for displaying a title page.
  - `ui/`: Directory for UI elements.
    - `accordion.tsx`: Accordion UI component.
    - `alert-dialog.tsx`: Alert dialog UI component.

- **src/lib/**: Contains utility functions.

  - `utils.ts`: Utility functions used throughout the project.

- **public/**: Public assets such as images and fonts.

- **next.config.mjs**: Next.js configuration file.

- **package.json**: Project dependencies and scripts.

- **postcss.config.mjs**: PostCSS configuration file.

- **tailwind.config.ts**: Tailwind CSS configuration file.

- **tsconfig.json**: TypeScript configuration file.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```sh
   cd <project-directory>
   ```

3. Install dependencies:

   ```sh
    npm install
   ```

### Development

1. Start the development server:

   ```sh
   npm run dev
   ```
