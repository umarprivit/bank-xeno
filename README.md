# BankXeno Landing Page

A modern, responsive landing page for BankXeno built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Dark theme with futuristic aesthetics
- Smooth animations and transitions
- Contact form
- Interest registration with live counter
- Mobile-first approach
- SEO-friendly structure

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Heroicons
- Headless UI

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bankxeno.git
cd bankxeno
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

### Deploying to GitHub Pages

1. Update the `vite.config.ts` file with your repository name:
```typescript
export default defineConfig({
  base: '/bankxeno/',
  // ... other config
})
```

2. Build the project:
```bash
npm run build
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Deployment

### Deploy to Vercel

1. **Push your code to GitHub** (if not already done)

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

3. **Import your GitHub repository**

4. **Add Environment Variables** in Vercel:
   - Go to Settings → Environment Variables
   - Add these variables:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

5. **Deploy** - Vercel will automatically build and deploy your site

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Build Command
Vercel will automatically detect the build command from package.json, but if needed:
```bash
npm run build
```

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── App.tsx        # Main app component
  ├── main.tsx       # Entry point
  └── index.css      # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Email: hello@bankxeno.com
# bank-xeno
# bank-xeno
