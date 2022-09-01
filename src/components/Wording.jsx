import React, { useEffect, useState } from "react";
import SaveWordings from "../api/wordings.json";
const Wording = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const randNo = Math.floor(Math.random() * SaveWordings.length);

    setText(SaveWordings[randNo].content);
    setAuthor(SaveWordings[randNo].author);
  }, []);

  return (
    <div>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between">
          <div className="flex-shrink-0">
            <i className="bi bi-chat-right-quote-fill text-primary fs-1 text-start"></i>
          </div>
          <div className="ms-4 fs-5">
            <p className="mb-1">{`${text}`}</p>
            <div className="small text-muted text-center">
              - {`${author}`} -
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Wording;
