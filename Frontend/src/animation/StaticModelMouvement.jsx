import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function StaticModelMouvement({ data }) {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const [error , setError] = useState(false);
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

 
    try {
      const runScript = new Function("Matter", "world", data);
      runScript(Matter, world);
    } catch (err) {
      console.error("Error executing animation script:", err);
      setError(true);
      return ;
    }
  
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
  }, [data]); 

  if(error) return <span>Error executing animation script</span>;
  return <div ref={sceneRef} className="mx-auto rounded-lg" />;
}
