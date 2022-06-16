import React, { useCallback, useState } from "react";
import { validateRequired } from "../../helper";

const ShareForm = ({ onShare, isSucess }) => {
  const [url, setUrl] = useState({
    value: "",
    error: "",
  });
  const validation = useCallback(() => {
    const error = validateRequired(url.value);
    setUrl({ ...url, error });
    return error === "";
  }, [url]);
  const handleChangeUrl = useCallback((e) => {
    const value = e.target.value;
    setUrl({
      value,
      error: validateRequired(value),
    });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const isValid = validation();
      if (isValid) {
        onShare({ url: url.value });
      }
    },
    [onShare, url, validation]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width: "360px",
        minHeight: "150px",
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -50%)",
        border: "2px solid #1c9f7f",
      }}
    >
      <div className="App-form">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Youtube URL"
            value={url.value}
            onChange={handleChangeUrl}
          />
          <input type="submit" value="Share"/>
        </form>
      </div>
    </div>
  );
};

export default ShareForm;
