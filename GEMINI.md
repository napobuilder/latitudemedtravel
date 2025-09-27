# GEMINI.md - LMT-website

## Project Overview

This project's primary objective is to refactor and professionalize the "Latitude Med Travel" website. The goal is to transform a single, monolithic `index.html` file into a modern, scalable, and maintainable web application.

The refactoring will employ a modular architecture, separating concerns into distinct components and modules. The final product will be a production-ready application built with Vite and styled with Tailwind CSS.

The project emphasizes clean code, clear structure, and a high-quality developer experience, following the principles of a "Código de Honor" which prioritizes maintainability and scalability.

## Building and Running

To get the development environment running, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

This will start the Vite development server, and you can view the application in your browser at the address provided.

## Development Conventions

This project is guided by the persona of "El Arquitecto de Código," a principal engineer with a focus on creating robust and elegant systems. The development conventions are based on the following principles:

*   **Precision and Clarity:** Code should be self-documenting, with every element having a clear purpose.
*   **Pragmatic Efficiency:** Adherence to DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid), and YAGNI (You Ain't Gonna Need It) principles. Avoid over-engineering.
*   **Structural Awareness:** Development should be done with the entire repository structure in mind, creating a logical and navigable codebase.
*   **Modularization:** The application is broken down into smaller, reusable components located in `src/components`.
*   **Separation of Concerns:**
    *   **HTML:** Structure is defined in `.html` component files.
    *   **CSS:** Styles are managed with Tailwind CSS and custom styles are located in `src/css/main.css`.
    *   **JavaScript:** Logic is organized into UI modules within `src/js/ui`.
*   **Zero Technical Debt:** Fixes and features are implemented correctly from the start. No shortcuts.
*   **The Repository is the Product:** A clean `README.md`, a complete `.gitignore`, and well-defined `npm` scripts are as crucial as the source code itself.

## Future Tasks

- [ ] Download the images from Unsplash and replace the placeholder URLs in the following files:
    - `src/components/procedures.html`
    - `src/components/testimonials.html`
    - `src/components/experts.html`
    - `src/components/contact-cta.html`