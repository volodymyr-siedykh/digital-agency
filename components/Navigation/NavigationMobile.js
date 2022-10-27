import React, { useState } from 'react'
import MenuToggle from './MenuToggle';
import NavMobile from './NavMobile';

const NavigationMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <MenuToggle
        isOpen={isOpen}
        setOpen={setOpen}
        toggle={() => setOpen(!isOpen)}
      />
      {isOpen && <NavMobile setOpen={setOpen} />}
    </>
  );
}

export default NavigationMobile