# EduBridge Nepal - Study in Bangladesh

A modern, responsive landing page for Students Helpline Nepal, helping Nepali students pursue MBBS, BDS, Engineering, and Agriculture programs in Bangladesh.

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Live Chat Support** - Interactive counselor chat for instant queries
- **Package Information** - Transparent pricing and service details
- **University Listings** - Top NMC & BMDC recognized institutions
- **Success Stories** - Real testimonials from successful students
- **Performance Optimized** - React memoization and lazy loading
- **Type-Safe** - Built with TypeScript for reliability

## 🚀 Tech Stack

- **Frontend Framework:** React 19.2.3
- **Language:** TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** Context API
- **Architecture:** Component-based with custom hooks

## 📦 Project Structure

```
├── components/
│   ├── Pages/           # Page-level components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with carousel
│   ├── Packages.tsx     # Service packages
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer section
│   ├── AICounselor.tsx  # Live chat widget
│   └── ErrorBoundary.tsx # Error handling
├── contexts/
│   └── PageContext.tsx  # Global state management
├── hooks/
│   └── index.ts         # Custom React hooks
├── constants.tsx        # Static data and configuration
├── types.ts            # TypeScript type definitions
└── App.tsx             # Main application component
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/WarninGod/edubridge-nepal-study-in-bangladesh.git
   cd edubridge-nepal-study-in-bangladesh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Key Features Explained

### Context API Implementation
Eliminates prop drilling by providing global state management for page navigation.

### Custom Hooks
- `useImageCarousel` - Manages automatic image rotation
- `useFormInput` - Handles form state with validation
- `useAsync` - Standardizes async operations
- `useWindowSize` - Responsive breakpoint detection

### Performance Optimization
- React.memo on pure components
- Lazy loading for heavy components
- Optimized re-renders with proper dependencies

### Error Handling
Production-ready error boundary catches runtime errors and displays user-friendly messages.

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

### Other Platforms

- **Vercel:** Import repository directly
- **Netlify:** Connect GitHub repo and deploy
- **Custom Server:** Serve the `dist/` folder

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**Students Helpline Nepal**
- Location: Thapathali, Kathmandu
- Phone: +977 98510-12345
- Email: admissions@edubridge.com.np
- Website: [GitHub Repository](https://github.com/WarninGod/edubridge-nepal-study-in-bangladesh)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

Made with ❤️ for Nepali students aspiring to study abroad
