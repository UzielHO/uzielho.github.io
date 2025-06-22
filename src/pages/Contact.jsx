import React, { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/id/1018/1000/300", 
  "https://picsum.photos/id/1015/1000/300", 
  "https://picsum.photos/id/1019/1000/300"
];

function Contact() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cambia imagen cada 3 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", overflow: "hidden", borderRadius: "8px" }}>
        <img
          src={images[currentIndex]}
          alt="Banner"
          style={{ width: "100%", height: "300px", objectFit: "cover", transition: "opacity 0.5s ease-in-out" }}
        />
      </div>
      <h2 style={{ marginTop: "1rem", fontFamily: "Arial, sans-serif", color: "#333" }}>
        Contactanos!
      </h2>
    </div>
  );
}

export default Contact;

