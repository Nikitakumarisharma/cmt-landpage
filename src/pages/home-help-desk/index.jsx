import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Header from 'components/HelpDesk/Header';
import Recommends from 'components/HelpDesk/Recommends';
import Signup from 'components/HelpDesk/Signup';
import ScreenShots from 'components/HelpDesk/ScreenShots';
import FeaturesStyle11 from 'components/HelpDesk/FeaturesStyle11';
import Integration from 'components/HelpDesk/Integration';
import FeaturesStyle9 from 'components/HelpDesk/FeaturesStyle9';
import Testimonials from 'components/HelpDesk/Testimonials';
import Footer from 'components/HelpDesk/Footer';

const HomeHelpDesk = () => {
  useEffect(() => {
    document.body.classList.add('home-style-11');
    return () => document.body.classList.remove('home-style-11');
  }, []);

  return (
    <MainLayout>
      <Header />
      <main>
        <Recommends />
        <Signup />
        <ScreenShots />
        <FeaturesStyle11 />
        <Integration />
        <FeaturesStyle9 />
        <Testimonials />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Help Desk</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeHelpDesk;