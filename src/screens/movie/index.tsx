import "./style.css";
import { MovieDetails, MovieVideo } from "@/model";
import { getYearFromDate } from "@/utils";
import { TrailerItem, Header } from "@/components";

interface Props {
  movieDetails?: MovieDetails;
  posterPath: string;
  trailers: MovieVideo[];
}

export const MovieScreen = ({ movieDetails, posterPath, trailers }: Props) => (
  <>
    <Header title="Movie details" showBackButton />
    {movieDetails && (
      <>
        <header className="movie-title">
          <h1>{movieDetails.title}</h1>
        </header>
        <div className="movie-details-container">
          <div className="movie-info-row">
            <img src={posterPath} />
            <div className="movie-info">
              <div>
                <h1>{getYearFromDate(movieDetails.release_date)}</h1>
                <h2 className="italic regular">{movieDetails.runtime} mins</h2>
              </div>
              <div>
                <h2 className="bold">
                  {movieDetails.vote_average.toFixed(1)}/10
                </h2>
                <button>Add to Favorite</button>
              </div>
            </div>
          </div>
          <div className="movie-overview">
            <p>{movieDetails.overview}</p>
          </div>
          <div className="movie-trailers">
            <header className="movie-trailers-header">
              <h2 className="regular">TRAILERS</h2>
            </header>
            <div className="trailers-container">
              {trailers.map((trailer, index) => (
                <TrailerItem key={trailer.id} trailer={trailer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </>
    )}
  </>
);
