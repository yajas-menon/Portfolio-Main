import React, { useRef } from 'react';


const Header = () => { 
 
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    
    <header  className="w-full h-[80px] bg-[#444] leading-[80px] flex items-center">
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo start */}
          <div className='flex itmes-center gap-[10px]'>
            <span className='w-[35px] h-[35px] mt-2 bg-white text-black text-[18px] font-[500]
            rounded-full flex items-center justify-center'><b>YM</b></span>

            <div className='leading-[20px]'>
              <h2 className='text-xl text-white font-[700]'>Yajas Menon</h2>
              <p className='text-white text-[14px] mb-1 font-[500]'>Portfolio</p>
            </div>
          </div>
          
          <div className='menu'ref={menuRef} onClick={toggleMenu}>
            <ul className='flex  items-center gap-10'>
              <li className='text-white font-[600]'><a href='#about'>About</a></li>
              <li className='text-white font-[600]'><a href='#services'>Services</a></li>
              <li className='text-white font-[600]'><a href='#portfolio'>Portfolio</a></li>
              <li className='text-white font-[600]'><a href='#contact'>Contact</a></li>
            </ul>
          </div>
          
          <div className='flex items-center gap-4'>
            <a target ='_blank' href= 'https://drive.google.com/file/d/1BdwgTWYAYa-m-yk4pGEVQjbSerJmr_zs/view?usp=drive_link' download='Resume'><button className=' md:flex md:items-center mx-4 my-6 md:my-0 flex items-center gap-2 text-white font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
            hover:font-[500] ease-in duration-200'><i class="ri-mail-download-line"></i>Resume</button></a>
            <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
