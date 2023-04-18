// lib/analytics.js

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-1RM9PF9TSQ');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}
