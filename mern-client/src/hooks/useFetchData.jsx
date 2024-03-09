import { useState, useEffect } from "react";

// Custom hook data
const useFetchData = (url, sliceStart = 0, sliceEnd = 16, loadingMessage = "Loading Books") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Establecer isLoading en true al iniciar la carga

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(sliceStart, sliceEnd));
        setIsLoading(false); // Establecer isLoading en false cuando los datos se hayan cargado
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // En caso de error, también establecer isLoading en false
      });
  }, [url, sliceStart, sliceEnd]); // Dependencias para que se vuelva a cargar cuando cambien

  return { data, isLoading }; // Devolver solo los datos y el estado de carga
};

export default useFetchData;
