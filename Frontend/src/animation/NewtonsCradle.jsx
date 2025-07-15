import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function NewtonsCradle() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 400,
        height: 400,
        wireframes: false,
        background : "black"
      },
    });

    // Build Newton's Cradle
    const cradle = Matter.Composites.newtonsCradle(100, 100, 5, 30, 200);
    Matter.World.add(world, cradle);

    // Pull the first ball to start the motion
    Matter.Body.translate(cradle.bodies[0], { x: -180, y: -100 });

    // Add runner and render
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

  return <div ref={sceneRef} className="mx-auto" />;
}
