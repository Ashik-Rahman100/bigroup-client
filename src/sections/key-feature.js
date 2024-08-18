import customer from "assets/key-feature/customer-service.png";
import reservations from "assets/key-feature/reservations.png";
import sales from "assets/key-feature/seles.png";
import marketing from "assets/key-feature/smart-marketing.png";
import socialMedia from "assets/key-feature/social-media.png";
import website from "assets/key-feature/web-app.png";
import FeatureCardColumn from 'components/feature-card-column.js';
import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';

const data = [
  {
    id: 1,
    imgSrc: website,
    altText: 'Websites and Sales Funnels',
    title: 'Websites and Sales Funnels',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: marketing,
    altText: 'Smart Marketing',
    title: 'Smart Marketing',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: reservations,
    altText: 'Automated Appointments and Reservations',
    title: 'Automated Appointments and Reservations',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: customer,
    altText: '24/7 Customer Service',
    title: '24/7 Customer Service',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 5,
    imgSrc: sales,
    altText: 'Automated After Sales',
    title: 'Automated After Sales',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 6,
    imgSrc: socialMedia,
    altText: 'Improving Google and Social Media Reviews',
    title: 'Improving Google and Social Media Reviews',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
