import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx'
import './App.scss'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);