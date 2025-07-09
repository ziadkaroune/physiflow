import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Pendulum() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    const ctx = canvasRef.current.getContext("2d");

    // Set gravity to simulate Earth gravity downward
    world.gravity.y = 1;

    // Fixed point (pivot)
    const pivot = { x: 200, y: 50 };

    // Pendulum ball
    const ball = Matter.Bodies.circle(300, 200, 30, {
      mass: 5,
      frictionAir: 0.001,
      restitution: 0.8,
      render: { fillStyle: "#ef4444" },
    });

    // Constraint (rope)
    const rope = Matter.Constraint.create({
      pointA: pivot,
      bodyB: ball,
      length: 150,
      stiffness: 1,
    });

    Matter.World.add(world, [ball, rope]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Render loop
    const renderLoop = () => {
      ctx.clearRect(0, 0, 400, 400);

      // Draw rope
      ctx.beginPath();
      ctx.strokeStyle = "#374151";
      ctx.lineWidth = 3;
      ctx.moveTo(rope.pointA.x, rope.pointA.y);
      ctx.lineTo(ball.position.x, ball.position.y);
      ctx.stroke();

      // Draw pivot
      ctx.beginPath();
      ctx.fillStyle = "#111827";
      ctx.arc(pivot.x, pivot.y, 8, 0, 2 * Math.PI);
      ctx.fill();

      // Draw ball
      ctx.beginPath();
      ctx.fillStyle = ball.render.fillStyle || "#ef4444";
      ctx.arc(ball.position.x, ball.position.y, ball.circleRadius, 0, 2 * Math.PI);
      ctx.fill();

      requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
    };
  }, []);

  return (
    <div className="flex justify-center items-center  ">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className=" border-gray-800 rounded-lg shadow-md"
      />
    </div>
  );
}
