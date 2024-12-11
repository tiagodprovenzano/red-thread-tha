import { MovieVideo } from "@/model";
import { buildTrailerUrl } from "@/utils/build-trailer-url";
import { useCallback } from "react";

const useTrailerItem = (trailer: MovieVideo) => {
  const handleClickTrailer = useCallback(() => {
    const url = buildTrailerUrl(trailer.site, trailer.key);
    window.open(url, "_blank");
  }, [trailer.site, trailer.key]);

  return {
    handleClickTrailer,
  };
};

export default useTrailerItem;
