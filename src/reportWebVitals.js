import { onLCP, onINP, onCLS } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  [onCLS, onINP, onLCP].forEach(metric => metric(console.log));
};

export default reportWebVitals;
