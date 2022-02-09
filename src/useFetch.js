import { useState, useEffect } from "react";

const useFetch = (url) => {
  const abortController = new AbortController();

  const [data, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // fetching data from json database
  useEffect(() => {
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Uh Oh! There seems to be connection problem");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Data fetch aborted");
        }
        setIsPending(false);
        setError(err.message);
      });
    return () => abortController.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
