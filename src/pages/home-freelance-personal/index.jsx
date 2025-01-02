import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/FreelancerNav';
import Header from 'components/Freelancer/Header';
import About from 'components/Freelancer/About';
import Services from 'components/Freelancer/Services';
import Projects from 'components/Freelancer/Projects';
import Testimonials from 'components/Freelancer/Testimonials';
import Contact from 'components/Freelancer/Contact';
import Blog from 'components/Freelancer/Blog';
import Footer from 'components/Freelancer/Footer';

const HomeFreelancePersonal = () => {
  useEffect(() => {
    document.body.classList.add('home-style-13');
    return () => document.body.classList.remove('home-style-13');
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <Header />
      <main>
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Freelance Personal</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeFreelancePersonal;