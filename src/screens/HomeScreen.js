import React, { useEffect } from 'react';
import { Row, Button, Image, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/loader';
import Message from '../components/message';
import { listPhotos } from '../actions/photoActions';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const handleClick = () => history.push('/photo');
  const photos = useSelector((state) => state.photos);

  const { loading, error } = photos;

  useEffect(() => {
    dispatch(listPhotos());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center">WELCOME TO PHOTO CLUB</h1>
      <h2 className="text-center">Find Latest Photos</h2>
      <h6 className="text-center">
        Awesome! you can find list of photos by clicking on get photos button
      </h6>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container fluid>
          <Row className="justify-content-center">
            <Button variant="success" className="my-3" onClick={handleClick}>
              GET PHOTOS
            </Button>
          </Row>
          <Row className="justify-content-center">
            <Image
              fluid
              src="https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"
              alt=""
            />
          </Row>
        </Container>
      )}
    </>
  );
};

export default HomeScreen;
