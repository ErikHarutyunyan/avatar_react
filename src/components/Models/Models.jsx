import { useState } from "react";
import { dataModelWoman, dataModelMan } from "./dataModel";
import { useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";
let data = dataModelWoman;
export const Models = ({ modelCat = "women", onAdd, dataForm }) => {
  data = modelCat === "man" ? dataModelMan : dataModelWoman;

  const [infoHover, setInfoHover] = useState(false);

  const videoRef = useRef(null);

  const onMouseOverVideo = (e) => {
    // setInfoHover(true);
    e.target.playVideo();
    // console.log(e, "play");
  };

  const onMouseLeaveVideo = (e) => {
    // setInfoHover(false);
    e.target.playVideo();
  };
  // grid max-4-6xl grid-cols-4
  return (
    <>
      <div className={`${modelCat}`}>
        <div
          className="modelsBox 
        flex flex-wrap
        gap-3">
          {data.map((item) => {
            const { id, name, modelVideo } = item;
            return (
              <div className="modelItem" key={id}>
                <label
                  htmlFor={name + id}
                  onClick={(e) => {
                    onAdd(id, "modelId");
                    onAdd(name, "modelName");
                  }}>
                  <div
                    className={`block border-2 border-transparent rounded-xl 
                  ${dataForm.modelId === id ? "!border-green-500" : null}
                  `}>
                    {/* <video
                      onMouseOver={(e) => {
                        onMouseOverVideo(e);
                      }}
                      onMouseLeave={(e) => {
                        onMouseLeaveVideo(e);
                      }}
                      controls
                      src={modelVideo}
                      alt="modelsVideo"
                      className="w-full rounded-xl"
                    /> */}
                    <HoverVideoPlayer
                      videoSrc={modelVideo}
                      muted={false}
                      loop={false}
                      className="w-full rounded-xl rad"
                      style={{
                        display: "block",
                      }}
                    />
                  </div>

                  <div className="wrapper-model flex items-center flex-row mt-2 justify-end">
                    <input
                      type="radio"
                      id={name + id}
                      name={"model"}
                      value={name}
                      className="w-4 h-4 text-green-600 bg-green-100 border-green-300 custom-radio"
                    />
                    <span className="ml-2">{name}</span>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
