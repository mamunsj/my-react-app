import ReactPlayer from "react-player";

function Video() {
  const vidoUrl = "https://www.youtube.com/cricket";
  return <ReactPlayer url={vidoUrl} playing={false} volume={0.5}></ReactPlayer>;
}

export default Video;
