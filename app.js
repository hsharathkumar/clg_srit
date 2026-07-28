import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import admissionsRoutes from './routes/admissions.routes.js';
import placementsRoutes from './routes/placements.routes.js';
import departmentsRoutes from './routes/departments.routes.js';
import portalRoutes from './routes/portal.routes.js';
import researchRoutes from './routes/research.routes.js';
import aiHelperRoutes from './routes/aiHelper.routes.js';
import circularsRoutes from './routes/circulars.routes.js';
import { queryAiAssistant } from './controllers/aiHelper.controller.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// API Health Check
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'SRIT Anantapur Backend API Service running smoothly',
    timestamp: new Date()
  });
});

// Direct Chat API route as requested
app.post('/api/chat', queryAiAssistant);

// Versioned API Routes
app.use('/api/v1/admissions', admissionsRoutes);
app.use('/api/v1/placements', placementsRoutes);
app.use('/api/v1/departments', departmentsRoutes);
app.use('/api/v1/portal', portalRoutes);
app.use('/api/v1/research', researchRoutes);
app.use('/api/v1/ai-helper', aiHelperRoutes);
app.use('/api/v1/circulars', circularsRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
