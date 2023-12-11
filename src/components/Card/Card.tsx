// @ts-nocheck
import { Link } from "react-router-dom";
import "./Card.scss";

interface CardProps {
  image: string;
  title: string;
  reviews: string;
  description: string;
  popularity: string;
  url: string;
}

const Card = ({
  image,
  title,
  reviews,
  description,
  popularity,
  url,
}: CardProps) => {
  return (
    <div className="card">
      <div className="card_visual">
        <Link to={url}>
          <img
            className="card_visual_img"
            src={`https://image.tmdb.org/t/p/w300${image}`}
            alt=""
          />
        </Link>
      </div>
      <div className="card_content">
        {popularity != "0" && (
          <p className="card_popularity">
            <span className="card_cartouche bg-primary-500">Note</span>
            <span>{popularity}</span>
          </p>
        )}

        <h2 className="card_title">
          {title && title.length > 25 ? `${title.substring(0, 25)}...` : title}
        </h2>
        <p className="card_text">
          {description && description.length > 120
            ? `${description.substring(0, 120)}...`
            : description}
        </p>

        {reviews != "0" && (
          <p className="card_reviews">
            <svg
              className="card_reviews_star text-primary-500 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>

            <span>{reviews} reviews</span>
          </p>
        )}
        <p>
          <Link
            className="card_cta bg-primary-300 hover:bg-primary-200 active:bg-primary-100 "
            to={url}
          >
            En savoir plus
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
