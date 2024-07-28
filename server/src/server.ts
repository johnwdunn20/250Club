import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the TypeScript server!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});