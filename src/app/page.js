'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Contact from 'components/contact/contact';
import Layout from 'components/layout';
import Solutions from 'components/solutions/solutions';
import { useEffect } from 'react';
import Banner from 'sections/banner';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import KeyFeature from 'sections/key-feature';
import ServiceSection from 'sections/service-section';
import TestimonialCard from 'sections/testimonial';
import WorkFlow from 'sections/workflow';
import theme from 'theme';
import { ThemeUIProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

export default function Home() {
  useEffect(()=>{
    Aos.init()
  }, [])
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner/>
          <CoreFeature/>
          <ServiceSection />
          <KeyFeature />
          <Feature/>
          <Solutions />
          <WorkFlow/>
          {/* <Package/> */}
          {/* <TeamSection/> */}
          <TestimonialCard/>
          {/* <BlogSection/> */}
          {/* <Subscribe/> */}
          <Contact />
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
