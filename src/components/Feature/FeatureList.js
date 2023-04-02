import React, { useEffect, useRef } from "react";
import "./FeatureList.scss";
import { IllustrationbyMeldaVNH } from "../../utils/dummy";
export const FeatureList = () => {
  const ItemListRef = useRef();
  const isDragMode = useRef(false);

  const dragging = (e) => {
    console.log(e.movementX);
    if (isDragMode.current) {
      ItemListRef.current.scrollLeft -= e.movementX;
    }
  };
  useEffect(() => {
    ItemListRef.current.addEventListener(
      "mousedown",
      () => (isDragMode.current = true)
    );
    ItemListRef.current.addEventListener(
      "mouseup",
      () => (isDragMode.current = false)
    );
    ItemListRef.current.addEventListener("mousemove", dragging);
    return () => {
      ItemListRef.current.removeEventListener("mousemove", dragging);
      ItemListRef.current.addEventListener("mousedown", null);
      ItemListRef.current.addEventListener("mouseup", null);
    };
  }, []);

  return (
    <>
      <ul ref={ItemListRef} className="feature__list">
        {IllustrationbyMeldaVNH.map((item, index) => {
          console.log(item, index + 1);
          return (
            <li key={index} className="feature__list-item">
              <img
                src={`IllustrationbyMeldaVNH/${item.photo}`}
                onClick={() => {}}
              />

              <h2>{item.title}</h2>
              <span className="by">{item.des}</span>

              <section>
                <div>
                  <span className="title">Current Bill</span>
                  <span className="price">2.99 ETH</span>
                </div>
                <div>
                  <span className="title">Auction Ending</span>
                  <span className="price">5h 12m 2s</span>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
};
