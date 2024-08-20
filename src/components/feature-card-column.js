import Image from 'next/image';
import { Box, Heading, Text } from 'theme-ui';

export default function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image data-aos="fade-up" data-aos-duration="1000" height={80} width={80} src={src} alt={altText} style={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading data-aos="fade-up" data-aos-duration="2000" sx={styles.wrapper.title}>{title}</Heading>
        <Text data-aos="fade-up" data-aos-duration="3000" sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0],
  },
  img: {
    margin:"10px"
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
