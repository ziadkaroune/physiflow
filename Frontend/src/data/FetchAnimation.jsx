import { useEffect, useState } from "react";
import StaticModelMouvement from "../animation/staticModelMouvement";
const FetchAnimation = ({ inputAnimation }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  
  const getAnimation = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propmt: inputAnimation }), 
      });
      if (!response.ok) {
        throw new Error("error fetching data");
      }
      const dataj = await response.json();
      setData(dataj);
      setError(false); 
    } catch (err) {
      setError(true); 
      console.error("Fetch failed:", err);
    }
  };

  useEffect(() => {
  
         getAnimation();
  
  }, [inputAnimation]);

  if (error) return <h5>Error occurred while fetching animation</h5>;

  return (
    <div>
      {data && <StaticModelMouvement data={data.message}/>}
    </div>
  );
};

export default FetchAnimation;
