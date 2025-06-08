# LabInOut

A modern web application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Prisma for database management
- Docker support for containerization
- Modern UI components with Radix UI
- Data tables with TanStack Table

## Prerequisites

- Node.js (Latest LTS version recommended)
- Docker and Docker Compose (for containerized deployment)
- PostgreSQL (if running database locally)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd labinout
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Docker Deployment

For Docker deployment instructions, please refer to [README.Docker.md](README.Docker.md).

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and shared code
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── ...
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Radix UI](https://www.radix-ui.com/)
- [TanStack Table](https://tanstack.com/table)

## License

[Add your license here]

## Contributing

[Add contribution guidelines here] 