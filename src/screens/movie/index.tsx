import { Header } from "@/components/header";
import { MovieDetails } from "@/model";
import "./style.css";
import { getYearFromDate } from "@/utils";

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
          <div className="movie-info-row">
            <img src={posterPath} />
            <div className="movie-info">
              <div>
                <h1>{getYearFromDate(movieDetails.release_date)}</h1>
                <h2>{movieDetails.runtime} mins</h2>
              </div>
              <div>
                <h3>{movieDetails.vote_average.toFixed(1)}/10</h3>
                <button>Add to Favorite</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </>
);
