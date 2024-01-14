import React from 'react';
// import {Link} from 'react-scroll';
const Header = () => {
  return <header className=' py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href='https://github.com/IJE2704'><button className='btn btn-sm'>GitHub</button></a>
        <a href='https://www.linkedin.com/in/meraj-hossain-6566b8231/'><button className='btn btn-sm'>Work with me</button></a>
      </div>
    </div>
  </header>;
};

export default Header;
