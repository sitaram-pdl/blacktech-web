import React, { useRef } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCard from "./Components/Card";
import Testimonial from "./style";
import testiMonialUserImg2 from "~image/it-services/pnc3.png";
import testiMonialUserImg3 from "~image/it-services/pnc2.png";
import testiMonialUserImg1 from "~image/it-services/pnc1.png";
export default function TestimonialSection() {
  const elSlider = useRef();

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    centerPadding: false,
    autoPlay: true,
    slide: false,
    responsive: [
      {
        breakpoint: 20000,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: "unslick",
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Testimonial backgroundColor="#f3f4f6">
      <Container className="container">
        <Row className="justify-content-center">
          <Col
            xs="12"
            className="col-12 col-lg-8 col-xl-9 col-xxl-7 text-center"
          >
            <Testimonial.Box mb="30px" mbSM="40px" mbLG="100px">
              <Testimonial.Subtitle as="h6" fontColor="#ff5722" mb="30px">
                Testimonial
              </Testimonial.Subtitle>
              <Testimonial.Title as="h2">
                We Care About Our Customers Experience Too
              </Testimonial.Title>
            </Testimonial.Box>
          </Col>
        </Row>
        <Testimonial.SliderWrapper>
          <Slider
            ref={elSlider}
            className="testimonial-slider row"
            {...sliderConfig1}
          >
            <Col className="col-lg-4 col-md-12">
              <TestimonialCard
                text="Black tech has been a pleasure working with, the work was delivered on time, the goals were met and now my website is about to land on the first page in Google search."
                title="Ram rana"
                image={testiMonialUserImg1}
              />
            </Col>
            <Col className="col-lg-4 col-md-12">
              <TestimonialCard
                text="I have been using black tech technology for a long time, I have all my messages posted on social networks with very specific content, they are focused on the goal and know what to do. "
                title="Nauensha Gurung"
                image={testiMonialUserImg2}
              />
            </Col>
            <Col className="col-lg-4 col-md-12">
              <TestimonialCard
                text="Our traffic has increased 70% since they started working on our website and they received several keywords that we ranked poorly right up to the first page."
                title="Saraswati Thapa"
                image={testiMonialUserImg3}
              />
            </Col>
          </Slider>
        </Testimonial.SliderWrapper>
      </Container>
    </Testimonial>
  );
}
