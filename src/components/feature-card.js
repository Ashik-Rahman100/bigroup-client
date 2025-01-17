import Image from 'next/image';
import { Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image className="transition duration-300 ease-in-out hover:scale-110"  src={src} alt={altText} style={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading data-aos="fade-right" data-aos-duration="2000" sx={styles.wrapper.title}>{title}</Heading>
        <Text data-aos="fade-right" data-aos-duration="2500" sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
  },

  img: {
    flexShrink: 0,
    marginRight: '10px',
    marginLeft: '-5px',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },

    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
