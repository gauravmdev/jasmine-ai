# Jasmine AI - Conversational AI Platform

A modern, full-stack conversational AI platform built with React, TypeScript, and Express. Features a sleek landing page with dark/light theme toggle, animated elements, and comprehensive AI product showcase.

## 🚀 Features

- **Modern UI/UX**: Responsive design with dark/light theme toggle
- **Animated Elements**: Typewriter effect for hero text and smooth transitions
- **Product Showcase**: Interactive display of AI services and capabilities
- **Client Testimonials**: Carousel of customer success stories
- **Voice Demo**: Interactive voice persona selection
- **Performance Metrics**: Real-time analytics and insights
- **Industry Showcase**: Multi-sector AI implementation examples

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: Wouter

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect your GitHub repository to Vercel**
2. **Import the project** - Vercel will automatically detect the configuration
3. **Deploy** - The `vercel.json` configuration handles the build process

#### Important Notes:
- The project includes serverless API functions in the `/api` directory
- Frontend builds to `dist/public` directory
- API routes are automatically configured for Vercel's serverless functions

### Local Production Build

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

For database functionality, set up these environment variables:
- `DATABASE_URL` - PostgreSQL connection string

### Theme Configuration

The application includes a comprehensive dark/light theme system:
- Theme toggle in header navigation
- Persistent theme selection via localStorage
- Smooth transitions between themes

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── contexts/      # React contexts (theme, etc.)
│   │   └── lib/           # Utilities and configurations
├── server/                # Express.js backend
├── api/                   # Vercel serverless functions
├── shared/                # Shared TypeScript types
└── vercel.json            # Vercel deployment configuration
```

## 🎨 Customization

### Theme Colors
Modify colors in `client/src/index.css` using CSS custom properties.

### Components
All UI components are built with shadcn/ui and can be customized in the `/components/ui` directory.

### Animations
Framer Motion animations can be adjusted in individual component files.

## 🔍 API Endpoints

- `GET /api/products` - Retrieve AI products
- `GET /api/testimonials` - Get customer testimonials  
- `GET /api/voice-personas` - Fetch voice personas

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.