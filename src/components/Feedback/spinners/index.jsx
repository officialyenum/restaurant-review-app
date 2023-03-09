import React from "react";
import styles from "./spinner.module.css";

export const ActivityIndicator = ({
  color = "#131230",
  size = 30,
  className,
  style,
}) => {
  const circles = [...Array(2)].map((_, index) => (
    <div
      key={index}
      style={{
        borderColor: `${color}`,
        borderWidth: size * 0.05,
      }}
    />
  ));

  return (
    <div
      className={`${styles["lds-ripple"]} ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      {circles}
    </div>
  );
};
