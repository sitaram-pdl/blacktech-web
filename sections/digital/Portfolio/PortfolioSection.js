import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, usePresence, AnimatePresence } from "framer-motion";
import portFolioImg1 from "~image/portfolio/pari.png";
import portFolioImg2 from "~image/portfolio/golimit.jpg";
import portFolioImg3 from "~image/portfolio/restro.jpg";
import PortfolioCard from "./Components/Card";
import Portfolio from "./style";
import { useRouter } from "next/router";

const portfolioData = [
  {
    image: portFolioImg1.src,
    titleSmall: "KAKTUS",
    title: "Parichaya.com",
    text:'News Portal',
    id: "1",
    tagi: ["all", "development"],
  },
  {
    image: portFolioImg2.src,
    text: "oolimitless.com.np",
    title: "Candy Store",
    id: "2",
    tagi: ["all"],
  },
  {
    image: portFolioImg3.src,
    titleSmall: "KAKTUS",
    title: "RestroX",
    text:'A complete solution to Restro',
    id: "3",
    tagi: ["all"],
  },
]

const FilterButton = ({ name, handleSetTag, tagActive, children }) => {
  return (
    <Portfolio.NavItem
      className={`btn-reset ${tagActive === name ? "active" : ""}`}
      onClick={() => handleSetTag(name)}
    >
      {children}
    </Portfolio.NavItem>
  );
};

export default function PortfolioSection({ ...rest }) {
  const [tag, setTag] = React.useState("all");
  const [filteredImages, setFilteredImages] = React.useState([]);
  const router=useRouter();

  React.useEffect(() => {
    tag === "all"
      ? setFilteredImages(portfolioData)
      : setFilteredImages(
          portfolioData.filter((image) =>
            image.tagi.find((item) => item === tag)
          )
        );
  }, [tag]);
  return (
    <Portfolio {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-7 col-lg-5 col-md-8 col-xs-9">
            <Portfolio.Box mbLG="45px" mb="10px">
              <Portfolio.Subtitle as="h4" fontColor="#fd346e" mb="13px">
                Portfolio
              </Portfolio.Subtitle>
              <Portfolio.Title as="h2">Works we are proud of</Portfolio.Title>
            </Portfolio.Box>
          </Col>
          <Col xs="12" className="col-xl-5 col-lg-7 col-md-8">
            <Portfolio.Nav className="mb-5 mb-lg-0">
              <div
               style={{fontSize:'30px',fontWeight:'400',cursor:'pointer'}}
              onClick={()=>router.push('/portfolio/masonry/portfolio-masonary-3')}
              >
              View  All
              </div>
             
            </Portfolio.Nav>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="col-md-12 col-xs-10">
            <Row className="justify-content-start">
              <AnimatePresence>
                {filteredImages
                  .slice(0, 3)
                  .map(({ image, titleSmall, title, tagi, id,text }, index) => {
                    return (
                      <ItemCol
                        className={`col-lg-4 col-md-6 col-sm-10 ${
                          tagi.find((item) => item === tag) | (tag === "all")
                            ? "is-animated"
                            : ""
                        } `}
                        key={index + "pm-c4"}
                      >
                        <PortfolioCard
                          image={image}
                          title={title}
                          text={text}
                         
                          mt="25px"
                        />
                      </ItemCol>
                    );
                  })}
              </AnimatePresence>
            </Row>
          </Col>
        </Row>
      </Container>
    </Portfolio>
  );
}

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

function ItemCol({ children, onClick, color, ...rest }) {
  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
    style: {
      position: isPresent ? "static" : "absolute",
    },
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scale: 1, opacity: 1 },
      out: { scale: 0, opacity: 0 },
      // tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
  };

  return (
    <motion.div {...animations} {...rest}>
      {children}
    </motion.div>
  );
}

{
  /* <ItemCol className={`col-lg-4 col-md-6 col-sm-10 ${tagi === tag | tag === "all" ?  "is-animated" :""} `}  key={index + "pm-c4"}> */
}