import ArrowEven from 'assets/arrowEven.svg';
import ArrowOdd from 'assets/arrowOdd.svg';
import PatternBG from 'assets/patternBG.png';
import SectionHeader from 'components/section-header';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';

const data = [
  {
    id: 1,
    title: 'Build',
    text:
      'Suggest appropriate licenses, deployment method according to IP types and present community and brand concepts.',
  },
  {
    id: 2,
    title: 'Deploy',
    text:
      'Create and deploy smart contracts with the customer-centric approach, managing all the risks that may arise in the untrusted environment.',
  },
  {
    id: 3,
    title: 'Marketing',
    text:
      'Promote to communities familiar with open IPs to create an environment where value can be created continuously even after launch.',
  },
  {
    id: 4,
    title: 'Communication',
    text:
      'Provide smooth communication for community participants and IP to grow together.',
  },
];

export default function WorkFlow() {
  return (
    <Box data-aos="fade-right" data-aos-duration="1000" sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Let’s see how it works"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box   sx={styles.card} key={item.id}>
              <Box data-aos="fade-right" data-aos-duration="1500" sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading data-aos="fade-right" data-aos-duration="2000" sx={styles.wrapper.title}>{item.title}</Heading>
                <Text data-aos="fade-right" data-aos-duration="3000" sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG.src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd.src})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven.src})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
