import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/NFTMarketplaceNav';
import Header from 'components/NFTMarketplace/Header';
import Projects from 'components/NFTMarketplace/Projects';
import Features from 'components/NFTMarketplace/Features';
import Process from 'components/NFTMarketplace/Process';
import Collections from 'components/NFTMarketplace/Collections';
import Community from 'components/NFTMarketplace/Community';
import Footer from 'components/NFTMarketplace/Footer';

const HomeNFTMarketplace = () => {
  useEffect(() => {
    document.body.classList.add('home-style-12');
    return () => document.body.classList.remove('home-style-12');
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <Header />
      <main>
        <Projects />
        <Features />
        <Process />
        <Collections />
        <Community />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - NFT Marketplace</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeNFTMarketplace;