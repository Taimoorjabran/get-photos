import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/loader';
import Message from '../components/message';
import { listPhotos } from '../actions/photoActions';

const PhotoScreen = ({ history }) => {
  const dispatch = useDispatch();

  const photoDetails = useSelector((state) => state.photos);
  const { loading, error, photos } = photoDetails;

  useEffect(() => {
    dispatch(listPhotos());
  }, [dispatch]);

  // console.log(useSelector((state) => state));
  // console.log(photoDetails);
  // console.log(photos);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {photos &&
            photos.map((photo, index) => {
              return (
                <Col md={6} key={index}>
                  <h1>{photo.author}</h1>
                  <Image src={photo.download_url} alt={photo.author} fluid />
                </Col>
              );
            })}
        </Row>
      )}
    </>
  );
};

export default PhotoScreen;
