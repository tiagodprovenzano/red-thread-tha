import { Header } from "@/components/header";
import { MovieDetails } from "@/model";

interface Props {
  movieDetails?: MovieDetails;
}

export const MovieScreen = ({ movieDetails }: Props) => {
  return (
    <>
      <Header title="Movie details" showBackButton />
      {movieDetails && <p>{movieDetails.title}</p>}
    </>
  );
};
