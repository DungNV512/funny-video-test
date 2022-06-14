import React, { useCallback, useState } from "react";
import ShareForm from "./components/Share/ShareForm";

const Share = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSucess, setIsSuccess] = useState(false);

  const handleShare = useCallback(async ({ url }) => {
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
  const isError = error !== "";
  const renderHeader = () => {
    return (
      <div>
        <span>
          Welcome <b>test@email.com</b>
        </span>
        <button>Share a movie</button>
        <button>Logout</button>
      </div>
    );
  };
  if (isSucess) {
    return <p>Share successfully</p>;
  }
  return (
    <>
      {renderHeader()}
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
