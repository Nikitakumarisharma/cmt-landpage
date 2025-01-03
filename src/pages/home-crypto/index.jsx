import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Header from 'components/Crypto/Header';
import Features from 'components/Crypto/Features';
import About from 'components/Crypto/About';
import Markets from 'components/Crypto/Markets';
import Timeline from 'components/Crypto/Timeline';
import Team from 'components/Crypto/Team';
import FAQ from 'components/Crypto/FAQ';
import Blog from 'components/Crypto/Blog';
import Footer from 'components/Crypto/Footer';

const HomeCrypto = () => {
  useEffect(() => {
    document.body.classList.add('home-style-15');
    return () => document.body.classList.remove('home-style-15');
  }, []);

  return (
    <MainLayout>
      <Header />
      <main>
        <Features />
        <About />
        <Markets />
        <Timeline />
        <Team />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Crypto</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeCrypto;