import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Optional: Add AOS CSS here globally if it's not loaded via components
import 'aos/dist/aos.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error("❌ Could not find root element to mount React app.");
}
