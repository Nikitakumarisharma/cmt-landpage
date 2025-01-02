import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import SideMenu from 'components/CyberSecurity/SideMenu';
import Header from 'components/CyberSecurity/Header';
import Features from 'components/CyberSecurity/Features';
import About from 'components/CyberSecurity/About';
import Services from 'components/CyberSecurity/Services';
import Solutions from 'components/CyberSecurity/Solutions';
import Pricing from 'components/CyberSecurity/Pricing';
import FAQ from 'components/CyberSecurity/FAQ';
import Team from 'components/CyberSecurity/Team';
import Blog from 'components/CyberSecurity/Blog';
import Footer from 'components/CyberSecurity/Footer';

const HomeCyberSecurity = () => {
  useEffect(() => {
    document.body.classList.add('home-style-9');
    return () => document.body.classList.remove('home-style-9');
  }, []);

  return (
    <MainLayout>
      <SideMenu />
      <Header />
      <main>
        <Features />
        <About />
        <Services />
        <Solutions />
        <Pricing />
        <FAQ />
        <Team />
        <Blog />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Cyber Security</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeCyberSecurity;