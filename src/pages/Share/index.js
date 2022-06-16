import React, { useCallback, useState } from "react";
import ShareForm from "../../components/ShareForm";
import videoServices from '../../services/videos'

const Share = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSucess, setIsSuccess] = useState(false);

  const handleShare = useCallback(async ({ url }) => {
    setIsLoading(true);
    try {
      const res = await videoServices.shareVideo(url);
      // route to homepage
      setIsSuccess(res.isSucess);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);
  const isError = error !== "";
  
  if (isSucess) {
    return <p>Share successfully</p>;
  }
  return (
    <>
      <ShareForm isLoading={isLoading} onShare={handleShare} />
      {isError && (
        <span>
          <b>Error: </b> {error}
        </span>
      )}
    </>
  );
};

export default Share;
