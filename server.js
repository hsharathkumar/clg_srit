import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 SRIT Anantapur MVC Backend API running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/v1/health`);
  console.log(`====================================================`);
});
