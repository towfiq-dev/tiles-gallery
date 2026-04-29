import FeaturesTiles from '@/components/homepage/featuresTiles/FeaturesTiles';
import Banner from '@/components/shared/banner/Banner';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturesTiles/>
    </div>
  );
};

export default Home;