import React, { useCallback, useState } from "react";
import { validateRequired } from "../../helper";

import './style.css'

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
    <div className="form-share">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="url" className="label">
          Share a movie
          <input
            name="url"
            id="url"
            value={url.value}
            onChange={handleChangeUrl}
            type="url"
            placeholder="Enter Youtube URL"
            className={`input${url.error ? ' input-error' : ''}`}
          />
          {url.error && <span>{url.error}</span>}
        </label>
        <button type="submit" className="btn btn-share">Share</button>
      </form>
    </div>
  );
};

export default ShareForm;
