import { useState, useEffect } from "react";

// Custom hook data
const useFetchData = (url, sliceStart = 0, sliceEnd = 16, loadingMessage = "Loading Books") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(sliceStart, sliceEnd));
        setIsLoading(false);
      });
  }, [url, sliceStart, sliceEnd]); // Dependencias para que se vuelva a cargar cuando cambien

  const loadingComponent = isLoading ? <p className="flex items-center justify-center font-extrabold text-3xl mt-5">{loadingMessage}</p> : null;

  return { data, isLoading, loadingComponent };
};

export default useFetchData;
