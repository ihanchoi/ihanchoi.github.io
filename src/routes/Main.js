import React, { useState, useEffect } from 'react';

import Loading from 'components/Loading';
import About from 'components/About';
import Work from 'components/Work';
import Footer from 'components/Footer';
import Landing from 'components/Landing';
import ContactBtn from 'components/ContactBtn';

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded ? <Landing /> : <Loading />}
      <About />
      <Work />
      <Footer />
      <ContactBtn />
    </>
  );
};

export default Main;
