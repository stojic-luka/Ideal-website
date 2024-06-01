import Container from "../common/container";
import { Rating } from "@mui/material";

import Marquee from "react-fast-marquee";

import { Review, Reviews } from "../../hooks/dataFetchHooks";

import "../../styles/home.css";

interface ReviewCardProps {
  cardData: Review;
}
function ReviewCard({ cardData }: ReviewCardProps) {
  return (
    <div className="review-card">
      <div className="review-header">
        <img
          src={cardData.profile_photo !== "" ? cardData.profile_photo : "src/resources/webp/blank-profile-picture.webp"}
          alt="ReviewPfp"
          className="review-profile-photo"
        />
        <div>
          <span className="review-username">{cardData.username}</span>
          <div>
            <Rating value={Math.ceil(Number(cardData.stars) * 2) / 2} precision={0.5} readOnly />
            <span className="review-comment-time">{cardData.comment_time}</span>
          </div>
        </div>
      </div>
      <div className="review-comment">
        <span>{cardData.comment.split(" ").slice(0, 17).join(" ") + "..."}</span>
      </div>
    </div>
  );
}

interface Props {
  reviewData: Reviews | undefined;
}
export default function ReviewCards({ reviewData }: Props) {
  if (!reviewData || !reviewData.reviews) return <></>;

  const reviewsArr = reviewData.reviews;
  const midpoint = Math.ceil(reviewsArr.length / 2);
  const firstHalf = reviewsArr.slice(0, midpoint);
  const secondHalf = reviewsArr.slice(midpoint);

  return (
    <Container width={1500} className="container-flex-column">
      <Marquee gradient={true} speed={40} direction="left" className="reviews-marquee">
        {firstHalf.map((review, index) => (
          <ReviewCard key={index} cardData={review} />
        ))}
      </Marquee>
      <Marquee gradient={true} speed={40} direction="right" className="reviews-marquee">
        {secondHalf.map((review, index) => (
          <ReviewCard key={index} cardData={review} />
        ))}
      </Marquee>
    </Container>
  );
}
