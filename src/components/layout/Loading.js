import { useEffect, useState } from "react";

import LoadingIcon from "../../media/loading.svg";

import "./style.scss";

const Loading = ({ qty }) => {
  const messages = [
    "ANALYSING PROMPT...",
    "CREATING IMAGE...",
    "ADDING DETAILS...",
    "FINISHING TOUCHES...",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((current) => {
        if (current === messages.length - 1) {
          return current;
        }

        return current + 1;
      });
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading">
      <img className="loading-icon" src={LoadingIcon} alt="" />
      <div className="loading-message">{messages[messageIndex]}</div>
    </div>
  );
};

export default Loading;
