import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // fetching data from json database
  useEffect(() => {
    fetch(url)
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
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
