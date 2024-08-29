# Nextjs Credits Starter Kit

<div>
    <a href="https://www.omarkraidie.com/projects">
        <img src="https://img.shields.io/badge/✨%20portfolio-1b1b1b?style=for-the-badge" />
    </a>
    <a href="https://www.linkedin.com/in/omarkraidie/">
        <img src="https://img.shields.io/badge/LinkedIn-%230073b1?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
</div>

## What is Nextjs Credits Starter Kit?

This starter kit provides everything you need to quickly launch a new SaaS product or any other web application, allowing you to focus on what really matters.

The starter kit is built with Next.js 14, providing a solid foundation for authentication using NextAuth, Prisma Adapter, and MongoDB. It utilizes TypeScript, React, and Shadcn-UI, with Tailwind CSS for styling. Key features include protected routes, theme switching, and a user account menu integrated into the navbar.

Follow the instructions below to quickly set up this repository and start developing your app.

### Key Features:

-   **User Authentication**: Provides user data persistence using MongoDB.
-   **Stripe Integration**: Full implementation for purchasing credits and saving individual payments to the database.
-   **Landing Page Template**: Pre-built landing page to get you started.
-   **Dashboard and Payment Pages**: Includes dashboard, payment success, and payment cancellation pages.
-   **Theme Toggling**: Switch between light and dark themes.
-   **Protected Routes**: Secure your application with protected routes.
-   **Pricing Cards**: Ready-to-use pricing card components.

If you find this starter kit helpful, please consider starring ⭐ this repository!

---

## How to Set Up the Project Locally

### Prerequisites

-   Node.js version 18.18 or higher
-   MongoDB database
-   **Google Provider**: [Google Cloud](https://console.cloud.google.com/) project with an OAuth consent screen created.
-   **GitHub Provider**: GitHub [OAuth App](https://github.com/settings/developers)
-   **Stripe credentials**: Get started [here](https://stripe.com/)

### Cloning the repository

1. Clone the repository into a new directory.

    ```shell
    git clone https://github.com/0mppula/nextjs-credits-starter-kit.git
    ```

2. Install the required dependencies

    ```shell
    npm i
    ```

### Clone and rename the repository as your own

1. Clone the repository into a new directory.

    ```shell
    git clone https://github.com/0mppula/nextjs-credits-starter-kit.git <new-repo-name>
    ```

2. Navigate into the new directory.

    ```shell
    cd <new-repo-name>
    ```

3. Remove the existing Git history.

    ```shell
    rm -rf .git
    ```

4. Initialize a new Git repository.

    ```shell
    git init
    ```

5. Add the `<new-repo-name>` to your `package.json` files top level `name` before installing node modules.

    ```json
    {
    	"name": "new-repo-name"
    }
    ```

6. Install the required dependencies

    ```shell
    npm i
    ```

### `.env` File Configuration

In the root of the project create an `.env` file and declare the following variables:

```
# MongoDB database connection string
DATABASE_URL=mongodb+srv://<USERNAME>:<PASSWORD>@<HOST>/<DATABASE_NAME>

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# GitHub OAuth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

NEXTAUTH_SECRET=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=

# stripe listen --forward-to localhost:3000/api/payments/webhook/stripe
STRIPE_WEBHOOK_SECRET=

# Product price ids
NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID=
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=
NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID=

# Used for Stripe checkout session redirections
FRONTEND_URL=http://localhost:3000
```

Populate the variables with the corresponding data.

### Setup Prisma

1. Push the changes from the Prisma schema to the database

    ```shell
    npx prisma db push
    ```

2. Generate Prisma Client for type safety across the app.

    ```shell
    npx prisma generate
    ```

### Start the app

```shell
npm run dev
```

### Forward Stripe events to your webhook

```shell
stripe listen --forward-to localhost:3000/webhook
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                                                                                      |
| :------ | :----------------------------------------------------------------------------------------------- |
| `dev`   | Starts a development instance of the app                                                         |
| `lint`  | Runs ESLint to check for errors and warnings. Errors will fail the build, but warnings will not. |

---

## Tech Stack

### Technologies

-   **Next.js**: A React framework enabling server-side rendering and static site generation for high-performance web applications.
-   **Tailwind CSS**: A utility-first CSS framework for rapidly creating custom designs directly in your markup.
-   **MongoDB**: MongoDB is an open-source NoSQL database that stores data in flexible, JSON-like documents, allowing for scalable, high-performance data management and real-time data processing.
-   **Prisma**: A next-generation ORM for Node.js and TypeScript that simplifies database access and management with an intuitive query API.
-   **NextAuth**: A complete open-source authentication solution for Next.js applications.
-   **Shadcn**: Different component/UI libraries used for design

### Framework

-   **Front-end Framework**: Next.js (v13.4.12)

### UI

-   **UI Library**: shadcn-ui
-   **UI Styling**: tailwindcss (v3.4.1) with tailwindcss-animate (v1.0.7)
-   **Theming**: next-themes (v0.3.0)
-   **Icons**: react-icons (v5.3.0) & lucide-react (v0.434.0)
-   **CSS Utility**: clsx (v2.1.1)
-   **Class Variance Management**: class-variance-authority (v0.7.0)

### Backend & Authentication

-   **Prisma ORM**: @prisma/client (v5.18.0) with prisma (v5.18.0) as a dev dependency
-   **User Authentication**: next-auth (v4.24.7) with prisma-adapter (v1.0.7)
-   **TypeScript**: (v^5)
-   **Type Definitions**: @types/node (v^20), @types/react (^18), @types/react-dom (v^18)

---

## License

This project is licensed under the MIT License.
