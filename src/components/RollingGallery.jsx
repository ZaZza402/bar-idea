// src/components/RollingGallery.jsx

import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "./RollingGallery.css";

const IMGS = [
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Bar counter with stools
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Restaurant interior
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Friends dining
  "https://images.pexels.com/photos/66636/pexels-photo-66636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Close-up of espresso pour
  "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Cocktails by a pool (vibes)
  "https://images.pexels.com/photos/1578322/pexels-photo-1578322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Fresh baked croissants
  "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Latte art heart
  "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Bartender flaming a cocktail
  "https://images.pexels.com/photos/6129871/pexels-photo-6129871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Woman drinking spritz
  "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Charcuterie board
];

const RollingGallery = ({ autoplay = true, images = [] }) => {
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const cylinderWidth = isScreenSizeSm ? 1500 : 2500;
  const faceCount = images.length;
  const faceWidth = cylinderWidth / faceCount;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const handleDrag = (_, info) => { rotation.set(rotation.get() + info.offset.x * dragFactor); };
  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
    });
  };

  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

  useEffect(() => {
    let animationFrame;
    let lastTime = 0;
    const speed = 0.05;
    const animate = (time) => {
      if (lastTime !== 0) {
        const deltaTime = time - lastTime;
        rotation.set(rotation.get() - speed * deltaTime * (360 / (faceCount * 1000)));
      }
      lastTime = time;
      animationFrame = requestAnimationFrame(animate);
    };
    if (autoplay) animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [autoplay, rotation, faceCount]);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="section-title">Atmosfera e Distillati</h2>
      <div className="gallery-container">
        <div className="gallery-gradient gallery-gradient-left"></div>
        <div className="gallery-gradient gallery-gradient-right"></div>
        <div className="gallery-content">
          <motion.div
            drag="x"
            className="gallery-track"
            style={{
                transform: transform,
                rotateY: rotation,
                width: cylinderWidth,
                transformStyle: "preserve-3d",
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {images.map((url, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                }}
              >
                <img src={url} alt={`gallery item ${i+1}`} className="gallery-img" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RollingGallery;