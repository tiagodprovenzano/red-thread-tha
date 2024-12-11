import "./style.css";

import PlayCircle from "@/assets/icons/play-circle.svg?react";
import { MovieVideo } from "@/model";
import useTrailerItem from "./hook";
export const TrailerItem = ({
  trailer,
  index,
}: {
  trailer: MovieVideo;
  index: number;
}) => {
  const { handleClickTrailer } = useTrailerItem(trailer);
  return (
    <div className="trailer" onClick={handleClickTrailer}>
      <PlayCircle />
      <h2 className="regular500">Play trailer {index + 1}</h2>
    </div>
  );
};
