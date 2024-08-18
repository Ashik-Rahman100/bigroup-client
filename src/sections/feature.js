import { Box, Container, Grid } from 'theme-ui';
import Partnership from '../assets/feature/partnership.svg';
import Performance from '../assets/feature/performance.svg';
import Subscription from '../assets/feature/subscription.svg';
import Support from '../assets/feature/support.svg';
import FeatureCard from '../components/feature-card.js';
import SectionHeader from '../components/section-header';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'e-Commerce',
    title: 'e-Commerce',
    text:
      'E-commerce offers: global access, 24/7 availability, reduced operating costs, personalized customer experience, greater reach and visibility, ease of business expansion, and convenience for customers.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'After Sales',
    title: 'After Sales',
    text:
      'Automated after-sales improves customer satisfaction through proactive follow-up, rapid problem resolution, and personalized communication. It reduces manual work, optimizes resources, and offers immediate responses, improving customer loyalty.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Automated Payments',
    title: 'Automated Payments',
    text:
      'Automatic payment streamlines transactions, reduces errors and improves the customer experience. It offers convenience and security, managing subscriptions and recurring payments, increasing customer retention.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Business Intelligence',
    title: 'Business Intelligence',
    text:
      'we help businesses uncover hidden patterns, optimize operations, and gain a competitive edge. 2  Our BI solutions provide a clear understanding of past performance, current trends, and future opportunities.',
  },
];

export default function Feature() {
  return (
    <Box  sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
