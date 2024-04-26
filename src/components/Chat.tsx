// Chat.tsx

import React from "react";

export const Chat: React.FC = () => {
  return (
    <div className="flex">
      <iframe
        src="https://app.gptmaker.ai/widget/3CE57CD411A176773CD95E164221D92A/iframe"
        width="100%"
        style={{ height: "100%", minHeight: "700px" }}
      ></iframe>
    </div>
  );
};
