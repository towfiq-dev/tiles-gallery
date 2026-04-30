import TilesCard from '@/components/homepage/tilesCard/TilesCard';
import { getFeaturesTiles } from '@/lib/dataFetch';
import Link from 'next/link';
import React from 'react';

const AllTilesPage = async() => {
  const allTiles = await getFeaturesTiles();
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black">
           All Featured <span className="text-blue-600">Tiles</span>
          </h2>
          <p className="text-gray-500 mt-2">Premium quality tiles for your dream space.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allTiles.map((tiles) => (
          <TilesCard 
            tiles={tiles} 
            key={tiles.id} 
          />
        ))}
      </div>
      {/* <Link href={'/allNavs/allTiles'} className='flex justify-center mt-6'>
      <button className='btn text-[17px] font-semibold'>
        View All
      </button>
      </Link> */}
    </section>
  );
};

export default AllTilesPage;