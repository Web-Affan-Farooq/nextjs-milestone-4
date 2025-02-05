import React from 'react';
import Header from '@/components/Header/Header';
import Footer from "@/components/Home/Footer/Footer";
import Section_1 from '@/components/Home/Section-1/Section-1';
import Section_2 from '@/components/Home/Section-2/Section-2';
// import Section_3 from '@/components/Section-3/Section-3';
// import Section_4 from '@/components/Section-4/Section-4';

const Home = () => {
  return (
    <div>
      <Header/>
      <Section_1 />
      <Section_2 />
      {/* <Section_3 /> */}
      {/* <Section_4 /> */}
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default Home;