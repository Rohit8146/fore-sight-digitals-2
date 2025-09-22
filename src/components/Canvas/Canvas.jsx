import canvasGenerator from "./script";
import { useEffect } from "react";


function Canvas() {
  useEffect(() => {
    
    canvasGenerator();
   
  }, []);

  return (
    <div className="hero">
      <canvas></canvas>
    </div>
  );
}

export default Canvas;
