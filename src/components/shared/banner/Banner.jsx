import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://asterbykyra.sg//image/cache/catalog/4.%20Show%20Room/Show%20Room%201-767x600.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-178">
      <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Aesthetic</h1>
      <p className="mb-5">
        Explore our premium collection of exquisite tiles designed to transform your spaces. From classic ceramics to modern geometric patterns, find the inspiration you need to build your dream home.
      </p>
      <Link href={'/allNavs/allTiles'}>
      <button className="btn btn-primary">Browse Now</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default Banner;