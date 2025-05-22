import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get('/lots', async (_req: Request, res: Response) => {
  const lots = await prisma.parkingLot.findMany({ include: { spots: true } });
  res.json(lots);
});

app.post('/lots', async (req: Request, res: Response) => {
  const { name } = req.body;
  const lot = await prisma.parkingLot.create({ data: { name } });
  res.json(lot);
});

app.get('/lots/:id/spots', async (req: Request, res: Response) => {
  const lotId = parseInt(req.params.id);
  const spots = await prisma.spot.findMany({ where: { lotId } });
  res.json(spots);
});

app.post('/lots/:id/spots', async (req: Request, res: Response) => {
  const lotId = parseInt(req.params.id);
  const { number } = req.body;
  const spot = await prisma.spot.create({ data: { number, lotId } });
  res.json(spot);
});

app.post('/reservations', async (req: Request, res: Response) => {
  const { spotId, startTime, endTime } = req.body;
  const reservation = await prisma.reservation.create({
    data: { spotId, startTime: new Date(startTime), endTime: new Date(endTime) }
  });
  res.json(reservation);
});

app.get('/reservations', async (_req: Request, res: Response) => {
  const reservations = await prisma.reservation.findMany();
  res.json(reservations);
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
