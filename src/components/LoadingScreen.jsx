import React, { useEffect, useState } from 'react';
import "./style.css";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "<Hello World!>";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        // Hello World type hote hi turant website open ho jaye (zero delay)
        if (onComplete) onComplete();
      }
    }, 70); // snappy typing speed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
      <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-center px-4 leading-relaxed">
        {text}
        <span className='animate-blink mx-1'>|</span>
        <span className="block sm:inline text-blue-400">Satyam Patel</span>
      </div>
    </div>
  );
}

export default LoadingScreen;
