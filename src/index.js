import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Broken from "./components/Broken";
import Fixed from "./components/Fixed";

function Application() {
  const [likes, setLikes] = useState(100);

  useEffect(() => {
    // if (likes >2) console.log(`Likes count ${likes}`);

    document.body.className = `bg--${likes % 2}`;

    if (likes > 0) {
      const timeout = setTimeout(() => setLikes((prev) => prev - 1), 1000);
      console.log(`Likes count ${likes}`);
      return () => clearInterval(timeout);
    }
  }, [likes]);

  return (
    <div onClick={() => setLikes(likes + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
