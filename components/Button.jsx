import clsx from "clsx";
import React from "react";

function Button({ children, color = "blue", className, ...props }) {
  const buttonColor = clsx({
    "bg-Blue text-white": color === "blue",
  });

  return (
    <button
      className={clsx(
        "flex items-center justify-center",
        className,
        buttonColor
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
