# TerraHacks Website

Welcome to the official repository for the TerraHacks website! This project uses Next.js and Tailwind CSS to create a dynamic and responsive website for the TerraHacks hackathon.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

TerraHacks is an annual hackathon focused on promoting innovation and collaboration among developers. This repository contains the source code for the TerraHacks website, which provides information about the event, registration details, schedule, and more.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/TerraHacks.git
   cd TerraHacks
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Create a `.env.local` file in your project root:**

   ```env
   NEXT_PUBLIC_BASE_URL=https://terrahacks.ca
   ```

## Usage

### Development

To start the development server, use the following command:

```bash
npm run dev
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Production

To build the app for production, use the following command:

```bash
npm run build
```

This will create an optimized build of the application in the `.next` folder.

To start the production server, use:

```bash
npm start
```

## Project Structure

```
TerraHacks/
├── public/           # Static assets
├── src/componenets   # Reusable components
├── src/app           # Next.js pages
├── globals.css       # Global styles (including Tailwind CSS config)
├── .gitignore        # Git ignore file
├── next.config.js    # Next.js configuration
├── .eslintrc.json    # ESLint configuration
├── package.json      # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── README.md         # Project documentation
├── .env.local        # Create this file as described above
└── tailwind.config.js # Tailwind CSS configuration
```

## Contributing

We welcome contributions to improve the TerraHacks website. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## License

This project is licensed under the GNU Version 3 License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out to us at [contact@terrahacks.com](mailto:contact@terrahacks.com).

---

Thank you for being part of TerraHacks! Let's innovate and collaborate to make something amazing.

