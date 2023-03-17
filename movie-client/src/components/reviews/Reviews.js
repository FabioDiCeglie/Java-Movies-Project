import { useEffect, useRef, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import { useCreateReview, useGetMovie } from "../../api/hooks";

const Reviews = () => {
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  const getMovieAndReviews = async (movieId) =>
    await useGetMovie(movieId).then((data) => {
      setMovie(data);
      setReviews(data.reviewIds);
    });

  useEffect(() => {
    getMovieAndReviews(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const review = revText.current;

    try {
      useCreateReview(review.value, movieId).then(() => {
        const updateReviews = [...reviews, { body: review.value }];
        review.value = "";
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
