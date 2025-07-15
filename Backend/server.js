import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));          //  global CORS middleware
app.options('*', cors(corsOptions)); //  explicitly handle preflight OPTIONS

app.use(express.json());

// api route
app.post('/api/generate-simulation', (req, res) => {
  const { prompt } = req.body;

  if (prompt?.toLowerCase().includes("two balls") && prompt?.toLowerCase().includes("collide")) {
    const jsCode = `
      import Matter from "matter-js";
      const engine = Matter.Engine.create();
      const world = engine.world;
      const ball1 = Matter.Bodies.circle(200, 200, 30, { mass: 2, restitution: 1 });
      const ball2 = Matter.Bodies.circle(600, 200, 20, { mass: 1, restitution: 1 });
      Matter.Body.setVelocity(ball1, { x: 3, y: 0 });
      Matter.Body.setVelocity(ball2, { x: -2, y: 0 });
      Matter.World.add(world, [ball1, ball2]);
      Matter.Engine.run(engine);
    `;
    res.json({ code: jsCode });
  } else {
    res.json({ code: "// No simulation available." });
  }
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
