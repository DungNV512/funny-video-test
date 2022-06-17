import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import ShareForm from "../../components/ShareForm";
import videoServices from "../../services/videos";

const Share = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSucess, setIsSuccess] = useState(false);
  const history = useHistory();
  const handleShare = useCallback(async ({ url }) => {
    setIsLoading(true);
    try {
      const res = await videoServices.shareVideo(url);
      setIsSuccess(res.statusText);
      history.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [history]);
  const isError = error !== "";

  return (
    <>
      <ShareForm
        isLoading={isLoading}
        onShare={handleShare}
        isSucess={isSucess}
      />
      {isError && (
        <span>
          <b>Error: </b> {error}
        </span>
      )}
    </>
  );
};

export default Share;
