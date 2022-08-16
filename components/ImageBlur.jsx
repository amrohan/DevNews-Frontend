import { useState } from "react";
import cn from "clsx";

export default function ImageBlur(props) {
  const [blur, setBlur] = useState(true);

  return (
    <img
      {...props}
      alt={props.alt}
      className={cn(
        "duration-700 ease-in-out rounded-xl w-full md:w-9/12 lg:w-full",
        blur ? "grayscale blur-lg" : "grayscale-0 blur-0"
      )}
      // check wheater the image is loaded or not
      onLoad={() => {
        setBlur(false);
      }}
    />
  );
}
