import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Create API Router
const apiRouter = express.Router();

// Example API route
apiRouter.get('/test', (req: Request, res: Response) => {
  console.log('Request received');
  res.json({ message: 'Hello from the TypeScript server!' });
});

// Use API Router
app.use('/api', apiRouter);

// Handle requests to undefined endpoints
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Improved error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
