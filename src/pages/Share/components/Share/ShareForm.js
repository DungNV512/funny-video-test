import React, { useCallback, useState } from "react";
import { validateRequired } from "../../../../helper";

const ShareForm = ({ onShare, isLoading }) => {
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
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="url">
        Youtube URL:
        <input
          name="url"
          id="url"
          value={url.value}
          onChange={handleChangeUrl}
        />
        {url.error && <span>{url.error}</span>}
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Share"}
      </button>
    </form>
  );
};

export default ShareForm;
