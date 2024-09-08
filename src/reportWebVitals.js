import { onLCP, onINP, onCLS } from 'web-vitals';

// eslint-disable-next-line no-unused-vars
const reportWebVitals = (onPerfEntry) => {
  [onCLS, onINP, onLCP].forEach((metric) => metric(console.log));
};

export default reportWebVitals;
