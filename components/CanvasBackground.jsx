import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function drawNoise() {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = Math.random() * 100; // Increase opacity
      }

      ctx.putImageData(imageData, 0, 0);
    }

    function drawWavyLines() {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; // White lines with transparency
      ctx.lineWidth = 1;

      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 20) {
          const waveHeight = Math.sin((x + y) * 0.02) * 10; // Create wavy effect
          ctx.lineTo(x, y + waveHeight);
        }
        ctx.stroke();
      }
    }

    drawNoise();
    drawWavyLines();

    return () => {
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
    />
  );
};

export default CanvasBackground;
