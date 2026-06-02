"use client";
import dynamic from "next/dynamic";
import { vidoes } from "./vidoes";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Slider() {
  return (
    <>
      <div className="container">
        <div className="slider">
          {vidoes.map((video) => (
            <div className="card" key={video.id}>
              <div className="card-info">
                <div className="card-item">
                  <p>{video.title}</p>
                  <p>{video.category}</p>
                </div>
              </div>
              <div className="video-player" style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                <ReactPlayer
                  url={`https://player.vimeo.com/video/${video.id}`}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  playing
                  muted
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", inset: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
