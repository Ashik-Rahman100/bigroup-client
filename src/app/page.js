'use client';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import KeyFeature from 'sections/key-feature';
import ServiceSection from 'sections/service-section';
import Subscribe from 'sections/subscribe';
import TestimonialCard from 'sections/testimonial';
import WorkFlow from 'sections/workflow';
import theme from 'theme';
import { ThemeUIProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

export default function Home() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner/>
          <CoreFeature/>
          <ServiceSection />
          <KeyFeature />
          <Feature/>
          <WorkFlow/>
          {/* <Package/> */}
          {/* <TeamSection/> */}
          <TestimonialCard/>
          {/* <BlogSection/> */}
          <Subscribe/>
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
