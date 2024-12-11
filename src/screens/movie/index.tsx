import { Header } from "@/components/header";
import { MovieDetails } from "@/model";
import "./style.css";

interface Props {
  movieDetails?: MovieDetails;
  posterPath: string;
}

export const MovieScreen = ({ movieDetails, posterPath }: Props) => (
  <>
    <Header title="Movie details" showBackButton />
    {movieDetails && (
      <>
        <div className="movie-title">
          <h1>{movieDetails.title}</h1>
        </div>
        <div className="movie-details-container">
          <img src={posterPath} />
        </div>
      </>
    )}
  </>
);
