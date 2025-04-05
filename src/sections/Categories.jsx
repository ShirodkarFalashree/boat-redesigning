import React from 'react';
import MobCategories from './mobCategories';
import LapCategories from './LapCategories';

const Categories = () => {
  return (
    <>
      {/* Show on large screens and up */}
      <div className="hidden md:block">
        <LapCategories />
      </div>

      {/* Show only on small screens */}
      <div className="block md:hidden">
        <MobCategories />
      </div>
    </>
  );
};

export default Categories;
