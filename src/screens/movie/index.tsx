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
        <header data-testid={"movie-title"} className="movie-title">
          <h1>{movieDetails.title}</h1>
        </header>
        <div className="movie-details-container">
          <div className="movie-info-row">
            <img data-testid="movie-poster" src={posterPath} />
            <div className="movie-info">
              <div>
                <h1 data-testid={"movie-title-published-year"}>
                  {getYearFromDate(movieDetails.release_date)}
                </h1>
                <h2 data-testid={"movie-runtinme"} className="italic regular">
                  {movieDetails.runtime} mins
                </h2>
              </div>
              <div>
                <h2 data-testid={"movie-score"} className="bold">
                  {movieDetails.vote_average.toFixed(1)}/10
                </h2>
                <button data-testid={"add-to-favorite"}>Add to Favorite</button>
              </div>
            </div>
          </div>
          <div data-testid={"movie-overview"} className="movie-overview">
            <p>{movieDetails.overview}</p>
          </div>
          <div className="movie-trailers">
            <header className="movie-trailers-header">
              <h2 className="regular">TRAILERS</h2>
            </header>
            <div data-testid={"movie-trailers"} className="trailers-container">
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
