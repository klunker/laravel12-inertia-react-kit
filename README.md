#Laravel Inertia React Tailwind (Lirt)

A modern web application built with **Laravel 12**, **Inertia.js**, **React**, and **Tailwind CSS**.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   [PHP](https://www.php.net/downloads) (8.2 or higher)
-   [Composer](https://getcomposer.org/)
-   [Node.js](https://nodejs.org/) (LTS version recommended) & NPM

## Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd lirt
    ```

2.  **Install PHP dependencies**

    ```bash
    composer install
    ```

3.  **Install Node.js dependencies**

    ```bash
    npm install
    ```

4.  **Environment Setup**

    Copy the example environment file and configure your environment variables:

    ```bash
    cp .env.example .env
    ```

    Generate the application key:

    ```bash
    php artisan key:generate
    ```

    Configure your database settings in the `.env` file. By default, Laravel 12 may use SQLite. If you wish to use SQLite, ensure the file exists:

    ```bash
    touch database/database.sqlite
    ```

5.  **Run Migrations**

    Set up your database tables:

    ```bash
    php artisan migrate
    ```

## Running the Application

To run the application locally, you need to start both the Laravel development server and the Vite development server.

1.  **Start the Laravel Server**

    ```bash
    php artisan serve
    ```

    The application will be available at `http://127.0.0.1:8000`.

2.  **Start the Vite Server** (for assets and hot module replacement)

    Open a new terminal window and run:

    ```bash
    npm run dev
    ```

## Building for Production

To compile your assets for production:

```bash
npm run build
```

## Tech Stack

-   **Backend**: Laravel 12
-   **Frontend Adapter**: Inertia.js
-   **UI Library**: React
-   **Styling**: Tailwind CSS v4
