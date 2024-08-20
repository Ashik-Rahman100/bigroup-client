import ButtonGroup from "components/button-group";
import Rating from "components/rating";
import SectionHeader from "components/section-header";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { Box, Container, Heading, Text } from "theme-ui";

import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import Avatar3 from "assets/testimonial/avatar3.png";
import Avatar4 from "assets/testimonial/avatar4.png";

const data = [
  {
    id: 1,
    title: "AI Automation",
    description:
      "Bigroup's AI automation solutions have revolutionized our production line. Their expertise in led to a significant increase in efficiency and a reduction in operational costs. We're thrilled with the results!",
    avatar: Avatar1,
    name: "Jenny Yellow",
    designation: "Operations Manager",
    review: 5,
  },
  {
    id: 2,
    title: "Business Intelligence",
    description:
      "Bigroup's business intelligence platform has provided us with invaluable insights into our financial performance. Their data visualization tools are exceptional, making it easy to identify trends and make informed decisions.",
    avatar: Avatar2,
    name: "David Brown",
    designation: "Finance Director",
    review: 5,
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "Bigroup's e-commerce solutions have boosted our online sales dramatically. Their AI-powered product recommendations have improved customer satisfaction and increased average order value. We're very happy with our partnership.",
    avatar: Avatar3,
    name: "Chris Evans",
    designation: "E-commerce Manager",
    review: 5,
  },
  {
    id: 4,
    title: "Funnels and Smart Marketing",
    description:
      "Bigroup's funnels and automation tools have streamlined our sales process and improved our sales team's productivity. Their data-driven approach has helped us close more deals.",
    avatar: Avatar4,
    name: "Olivia Miller",
    designation: "Sales Manager",
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <Box id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader slogan="Testimonial" title="Meet Client Satisfaction" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box
              data-aos="fade-up"
              data-aos-duration="2000"
              sx={styles.reviewCard}
              key={`testimonial--key${item.id}`}
            >
              <Rating data-aos="fade-right" data-aos-duration="2000" rating={item.review} />
              <Heading data-aos="fade-right" data-aos-duration="2500" as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text data-aos="fade-up" data-aos-duration="2500" sx={styles.description}>
                {item.description.slice(0, 250)}
              </Text>
              <div className="card-footer">
                <div className="image">
                  <Image className="transition duration-300 ease-in-out hover:scale-110" src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    height:"450px",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
