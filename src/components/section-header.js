import { Box, Heading, Text } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
      data-aos="zoom-in"
      data-aos-duration="1500"
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
      data-aos="zoom-in"
      data-aos-duration="2000"
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
