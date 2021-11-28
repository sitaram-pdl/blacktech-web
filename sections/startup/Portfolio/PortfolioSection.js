import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./Components/SectionTitle";
import Image from "next/image";
import PortfolioImageOne from  "~image/portfolio/pari.png";
import PortfolioImageTwo from "~image/portfolio/golimit.jpg";
import PortfolioImageThree from "~image/portfolio/restro.jpg";
import Protfolio from "./style";
import { Link } from "~components";
import Slider from "react-slick";

const Slide = ({
  image,
  totalItem = 0,
  currentItemCount = 0,
  title,
  userName,
  text,
  link,
}) => {
  return (
    <Row className="align-items-center d-flex">
      <Col xs="12" className="col-lg-6 col-md-10">
        <Protfolio.Content>
          <Protfolio.ImageContent mb="30px" mbLG="0">
          <img
                src={image}
                alt="content"
                placeholder="blur"
                className="w-100"
              />
           
            <Protfolio.Shape backgroundColor="#000">
              <Protfolio.ShapeTitle as="h1" fontColor="#fff">
                {Number(currentItemCount) < 10
                  ? "0" + Number(currentItemCount)
                  : Number(currentItemCount)}
              </Protfolio.ShapeTitle>
            </Protfolio.Shape>
          </Protfolio.ImageContent>
        </Protfolio.Content>
      </Col>
      <Col xs="12" className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
        <Protfolio.Content>
          <Protfolio.SingleContent>
            <Protfolio.SubTitle as="h6" fontColor="rgba(38, 39, 41, 0.7)">
              <span>
                Project{" "}
                {Number(currentItemCount) < 10
                  ? "0" + Number(currentItemCount)
                  : Number(currentItemCount)}
              </span>
              /{" "}
              {Number(totalItem) < 10
                ? "0" + Number(totalItem)
                : Number(totalItem)}
            </Protfolio.SubTitle>
            <Protfolio.Title as="h2">{title}</Protfolio.Title>

            <Protfolio.TitleSmall fontColor="#262729">
              By {userName ? userName : "Anonymous"}
            </Protfolio.TitleSmall>
            <Protfolio.Text>{text}</Protfolio.Text>
            {/* <Protfolio.Button as={Link} to={link}>
             Go to
            </Protfolio.Button> */}
          </Protfolio.SingleContent>
        </Protfolio.Content>
      </Col>
    </Row>
  );
};

export default function ProtfolioSection() {
  const elSlider = React.useRef();

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: false,
    autoplay: true,
    fade: true,
  };
  return (
    <Protfolio>
      <Container>
        <div className="row justify-content-center">
          <Col className="col-xl-8 text-center">
            {/* Section Title */}
            <SectionTitle
              subTitle="Portfolio"
              title="Our services are amazing, just take a look at our portfolio"
              titleProps={{ mb: "40px", mbLG: "75px" }}
              subTitleProps={{ mb: "10px", fontColor: "#5034fc" }}
            />
            {/*/ .Section Title */}
          </Col>
        </div>
        <Slider
          ref={elSlider}
          className="testimonial-slider"
          {...sliderConfig1}
        >
          <Slide
            image={
              PortfolioImageOne.src
              
            }
            totalItem="3"
            currentItemCount="1"
            title="Parichaya"
            text="Parichaya is one of the top advertising site here in Pokhara, Nepal. It offers news, articles, views and lifestyle content through it’s a digital platform. 

            Parichaya advertisements have the greatest reach and distribution in Nepal as it addresses all areas of society, which is why its media has also become the preferred platform for advertisers.
             "
            userName="Black Tech"
          />
          <Slide
           image={
            PortfolioImageTwo.src
            
          }
            totalItem="3"
            currentItemCount="2"
            title="Golimitless"
            text="Go limitless is one of the finest online shopping sites where it provides various services to its customers. They guarantee the returns and exchange of the products within the specified period of time and also try to provide the best quality products. They also offer a quick delivery system within Pokhara.

            Golimitless also provides special coupon offers and vouchers to its customers at a certain purchase limit.
            "
            userName="Black Tech"
            link="https://www.parichaya.com
            "
          />
          <Slide
            image={
              PortfolioImageThree.src
            }
            totalItem="3"
            currentItemCount="3"
            title="Restro X"
            text="RestroX is an ultimate restaurant operating system gathered with high-end features compacted all in one app. It brings together a varied range of services from integrated online ordering to tracking of inventory, managing your staff and business reports, automated inventory, and a cloud-based system"
            userName="Black Tech"
          />
          
        </Slider>
      </Container>
    </Protfolio>
  );
}
