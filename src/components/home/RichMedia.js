import React from "react";
import E2CWindow from "../common/Window";

export default () => {
  return (
    <E2CWindow
      title="Rich media lesson creator"
      description="Create interactive lessons, with video, audio, quizzes and create "
      className="home-richmedia"
    >
      <div className="flex flex-row justify-between">
        <img src="/images/media1.svg" alt="media1" className="w-1/3" />
        <img src="/images/media2.svg" alt="media2" className="w-1/3" />
        <img src="/images/media3.svg" alt="media3" className="w-1/3" />
      </div>
    </E2CWindow>
  );
};
