import React, { useEffect, useRef } from "react";
import "./Feature.scss";
import { FeatureList } from "./FeatureList";

const Feature = () => {
  const categoryListRef = useRef();
  const isDragMode = useRef(false);

  const dragging = (e) => {
    console.log(e.movementX);
    if (isDragMode.current) {
      categoryListRef.current.scrollLeft -= e.movementX;
    }
  };
  useEffect(() => {
    categoryListRef.current.addEventListener(
      "mousedown",
      () => (isDragMode.current = true)
    );
    categoryListRef.current.addEventListener(
      "mouseup",
      () => (isDragMode.current = false)
    );
    categoryListRef.current.addEventListener("mousemove", dragging);
    return () => {
      categoryListRef.current?.removeEventListener("mousemove", dragging);
      categoryListRef.current?.removeEventListener("mousedown", null);
      categoryListRef.current?.removeEventListener("mouseup", null);
    };
  }, []);

  return (
    <div className="feature">
      <h1>Featured NFTs</h1>

      <div className="category">
        <ul ref={categoryListRef}>
          <li className="active">All Categories</li>
          <li>Collectibles</li>
          <li>Virtual World</li>
          <li>Games</li>
          <li>Photography</li>
          <li>tracking Cards</li>
          <li>Collectibles</li>
          <li>Virtual World</li>
          <li>Games</li>
          <li>Photography</li>
          <li>tracking Cards</li>
        </ul>
        <button>
          <span>View All NFTs</span>
        </button>
      </div>
      <FeatureList />
    </div>
  );
};

export default Feature;
