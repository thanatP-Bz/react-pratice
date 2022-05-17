import React, { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);

  return <div></div>;
};

export default Loading;
