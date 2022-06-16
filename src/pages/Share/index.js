import React, { useCallback, useState } from "react";
import ShareForm from "./components/Share/ShareForm";

const Share = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSucess, setIsSuccess] = useState(false);

  const handleShare = useCallback(async () => {
    setIsLoading(true);
    try {
      // const res = await shareMovie(url);
      // route to homepage
      // setIsSuccess(res.isSucess);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isSucess) {
    return <p>Share successfully</p>;
  }
  return (
    <>
      <ShareForm isLoading={isLoading} onShare={handleShare} />
    </>
  );
};

export default Share;
