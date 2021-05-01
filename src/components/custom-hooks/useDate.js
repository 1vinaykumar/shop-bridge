import { useEffect, useState } from "react";

function useDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, [date]);

  return date;
}

export default useDate;
