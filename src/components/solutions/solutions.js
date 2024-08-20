import BiParking from 'assets/solutions/BI-Car-Parking.png';
import AppBi from 'assets/solutions/app.jpg';
import ButtonGroup from 'components/button-group';
import PostCard from 'components/post-card.js';
import SectionHeader from 'components/section-header';
import Carousel from 'react-multi-carousel';
import { Box, Container } from 'theme-ui';

const data = [
  {
    id: 1,
    imgSrc: BiParking,
    altText: 'BiParking',
    postLink: 'https://bi-parking.analiticogroup.com/login',
    title: 'BI Car Parking App',
    authorName: 'bigroup',
    date: 'Sep 23, 2023',
  },
  {
    id: 2,
    imgSrc: AppBi,
    altText: 'app.bigroup.mx',
    postLink: 'https://app.bigroup.mx/',
    title: 'Bi Group Mx App',
    authorName: 'bigroup',
    date: 'Jan 25, 2023',
  },
//   {
//     id: 3,
//     imgSrc: PostThumb2,
//     altText: 'Startup',
//     postLink: '#',
//     title: 'Product Marketing: Startup Product Sales',
//     authorName: 'Cletus Dorian',
//     date: 'Feb 21, 2022',
//   },
//   {
//     id: 4,
//     imgSrc: PostThumb1,
//     altText: 'Creative',
//     postLink: '#',
//     title: 'Product Marketing: Creative Market',
//     authorName: 'Vanessa Essence',
//     date: 'Dec 29, 2023',
//   },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
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

export default function Solutions() {
  return (
    <Box id='solutions' sx={{ variant: 'section.news' }}>
      <Container>
        <SectionHeader
          slogan="Our Product"
          title="Explore our products for your business solution"
        />

        <Box data-aos="fade-down" data-aos-duration='1000' sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
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
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
