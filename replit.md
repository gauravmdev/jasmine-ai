# Jasmine AI - Conversational AI Platform

## Overview

This repository contains Jasmine AI (formerly ConnexAI), a full-stack conversational AI platform built with React, Express, and Drizzle ORM. The application showcases AI products and services, featuring a modern landing page with product displays, testimonials, voice persona demos, and performance metrics. The project has been fully rebranded and includes dark/light theme functionality with animated elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints for products, testimonials, and voice personas
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### UI/UX Design System
- **Component Library**: Radix UI primitives with custom styling
- **Design Tokens**: CSS custom properties for theming
- **Typography**: Inter font family
- **Color Scheme**: Modern gradient-based design with primary/secondary colors
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Data Models
- **Products**: AI service offerings (AI Agent, AI Guru, AI Analytics, AI Voice, Speech Recognition)
- **Testimonials**: Customer reviews and success stories
- **Voice Personas**: AI voice character profiles with language and personality traits

### Core Features
- **Product Showcase**: Interactive grid displaying AI products with icons and descriptions
- **Client Testimonials**: Carousel of customer reviews with avatars and quotes
- **Performance Metrics**: Statistical data presentation with animated counters
- **Voice Demo**: Interactive voice persona selection and playback simulation
- **Industry Showcase**: Case studies across different business sectors
- **Dark/Light Theme**: Smooth theme switching with comprehensive dark mode support
- **Animated Text**: Typewriter effect for "Conversational AI" with blinking cursor

### API Endpoints
- `GET /api/products` - Retrieve all AI products
- `GET /api/products/:id` - Get specific product details
- `GET /api/testimonials` - Fetch customer testimonials
- `GET /api/voice-personas` - Get available voice personas

## Data Flow

1. **Initial Load**: React app fetches data from Express API endpoints using TanStack Query
2. **Caching**: Query results are cached client-side with intelligent background refetching
3. **Real-time Updates**: Server can provide updated data without page refresh
4. **Error Handling**: Graceful fallbacks and loading states for failed requests
5. **Optimistic Updates**: Immediate UI feedback for user interactions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library with React components
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class utility

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety and developer experience
- **drizzle-kit**: Database migration and schema management
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Vite Dev Server**: Hot module replacement for fast development
- **Database**: Neon serverless PostgreSQL for development and production
- **Environment Variables**: `DATABASE_URL` for database connection

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: esbuild compiles TypeScript server to `dist/index.js`
3. **Vercel Functions**: Serverless API endpoints in `/api` directory for cloud deployment
4. **Database**: Drizzle migrations ensure schema consistency
5. **Static Assets**: Served directly by Express in production mode or via Vercel's CDN

### Database Management
- **Schema Definition**: Centralized in `shared/schema.ts`
- **Migrations**: Generated and applied via `drizzle-kit push`
- **Type Safety**: Automatic TypeScript types from schema definitions
- **Connection**: Pooled connections via Neon serverless driver

## Recent Changes

### December 2024
- **Complete Rebranding**: Transformed ConnexAI to Jasmine AI across all components, content, and server data
- **Theme System Implementation**: Added comprehensive dark/light theme toggle with smooth transitions
- **Animation Enhancement**: Implemented typewriter effect for hero section text
- **GitHub Integration**: Project successfully uploaded to GitHub repository
- **Vercel Configuration**: Added serverless API functions and deployment configuration for Vercel hosting

## Project Status

The application is feature-complete and ready for deployment. All core functionality has been implemented including the modern landing page, interactive components, theme switching, and animated elements. The project follows a monorepo structure with clear separation between client, server, and shared code, making it easy to maintain and scale across different deployment environments.