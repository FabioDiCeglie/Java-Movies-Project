import { useEffect, useRef, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm.js";
import { useCreateReview, useGetMovie } from "../../api/hooks.ts";
import { Movie } from "../../types/Movie.ts";

const Reviews = () => {
  const [movie, setMovie] = useState({} as Movie);
  const [reviews, setReviews] = useState<{ body: string | undefined }[]>([]);

  const revText = useRef<HTMLInputElement>();
  let params = useParams();
  const movieId = params.movieId;

  const getMovieAndReviews = async (movieId: string | undefined) => {
    if (!movieId) return `${movieId} is not correct!`;

    return await useGetMovie(movieId).then((data) => {
      setMovie(data);
      setReviews(data.reviewIds);
    });
  };

  useEffect(() => {
    getMovieAndReviews(movieId);
  }, []);

  const addReview = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const review = revText.current;

    try {
      if (!movieId) return `${movieId} is not correct!`;
      useCreateReview(review?.value as string, movieId).then(() => {
        const updateReviews = [...reviews, { body: review?.value }];
        (review as HTMLInputElement).value = "";
        setReviews(updateReviews);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Reviews</h3>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <img src={movie?.poster} alt="" />
          </Col>
          <Col>
            {
              <>
                <Row>
                  <Col>
                    <ReviewForm
                      handleSubmit={addReview}
                      revText={revText}
                      labelText="Write a Review?"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            }
            {reviews?.map((review, i) => {
              return (
                <Fragment key={i}>
                  <Row>
                    <Col>{review.body}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
