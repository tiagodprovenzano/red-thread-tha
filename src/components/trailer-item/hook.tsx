import { MovieVideo } from "@/model";
import { useCallback } from "react";

const useTrailerItem = (trailer: MovieVideo) => {
  const handleClickTrailer = useCallback(() => {
    if (trailer.site === "YouTube") {
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
    } else {
      window.open(
        `https://www.google.com/search?q=${trailer.site}+${trailer.key}+trailer`,
        "_blank"
      );
    }
  }, [trailer.site, trailer.key]);

  return {
    handleClickTrailer,
  };
};

export default useTrailerItem;
