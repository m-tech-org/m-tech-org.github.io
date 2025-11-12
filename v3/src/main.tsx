import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.css';
import './styles/global.css';
import './styles/tokens/keyframes.css';
import './styles/tokens/animations.css';
import './styles/tokens/colors.css';
import './styles/tokens/decorations.css';
import './styles/tokens/spacings.css';
import './styles/tokens/typography.css';
import './styles/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
