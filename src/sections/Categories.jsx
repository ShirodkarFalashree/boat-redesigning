import React from 'react';
import MobCategories from './mobCategories';
import LapCategories from './LapCategories';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Categories() {
  const location = useLocation();

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('hasReloaded');

    if (location.pathname === '/') {
      if (!hasReloaded) {
        sessionStorage.setItem('hasReloaded', 'true');
        window.location.reload();
      }
    } else {
      sessionStorage.removeItem('hasReloaded'); // Clear the flag when navigating away
    }
  }, [location]);
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
