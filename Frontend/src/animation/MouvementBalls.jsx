import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function MouvementBalls() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 400,
        height: 400,
        wireframes: false,
        background: "black",
      },
    });

const circleA = Matter.Bodies.circle(150, 100, 20, {
  restitution: 0.8,
  render: { fillStyle: "#60a5fa" },
});

// Ball B
const circleB = Matter.Bodies.circle(250, 100, 30, {
  restitution: 0.9,
  render: { fillStyle: "#f472b6" },
});

// Ground
const ground = Matter.Bodies.rectangle(200, 390, 400, 20, {
  isStatic: true,
  render: { fillStyle: "#6b7280" },
});

    Matter.World.add(world, [circleA, circleB, ground]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    Matter.Render.run(render);

    
    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} className="mx-auto   rounded-lg" />;
}
