import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((response) => {
          console.log(response);
          // Checking if the response is 200.
          if (!response.ok) {
            throw new Error("Counld fetch the response");
          }
          return response.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          setIsPending(false);
        })
        // Catching connection errors.
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            console.log(error.message);
            setError(error.message);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, []);

  return { data, isPending, error };
};

export default useFetch;
