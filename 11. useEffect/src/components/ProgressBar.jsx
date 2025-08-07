import { useEffect, useState } from "react";

export default function Progress({ timer }) {
  const [remainingTime, setRemainingtime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingtime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
