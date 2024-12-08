import { faCartShopping, faCheck, faChevronCircleDown, faDownLeftAndUpRightToCenter, faExclamationCircle, faSun } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import dropdown icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'; // Import the next/image component
import myImage from "../images/Logo.png";
import myPr1 from "../images/Product Image.png";
import c1 from "../images/company1.png";
import c2 from "../images/company2.png";
import c3 from "../images/Logo (3).png";
import c4 from "../images/Logo (4).png";
import c5 from "../images/Logo (5).png";
import c6 from "../images/Logo (6).png";
import c7 from "../images/Logo (7).png";
import stool1 from "../images/stool3.png";
import stool2 from "../images/stool4.png";
import stool3 from "../images/stool1.png";
import stool4 from "../images/stool2.png";
import stool5 from "../images/stool5.png";
import cat1 from "../images/cat1.png";
import cat2 from "../images/cat2.png";
import cat3 from "../images/cat3.png";


import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

// components/Navbar.js
const Navigation = () => {
  return (
    <nav className="bg-white w-[1920 px] h-[203 px]">
    <ul className='flex items-center justify-space-between h-[45 px] w-[1920 px] padding-top-[14 px] padding-bottom-[14 px]
    padding-left-[300 px] padding-right-[300 px] bg-text_color text-white gap-6'>
      <li className='mx-10'></li>
      <li className="h-[16px] w-[16px]"><FontAwesomeIcon icon={faCheck} size="lg" /></li>
      <li className='h-[14 px] w-[231 px] font-inter weight-400 size-13 line-height-[14.3 px]'>Free shipping on all orders over $50</li>
      <li className='mx-60'></li>
      <li className='h-[17 px] w-[37 px]'>ENG</li>
      <li className="h-[16 px] w-[16 px] opacity-70"><FontAwesomeIcon icon={faChevronCircleDown} size="lg"/></li>
      <li className='h-[14 px] w-[87 px]'>FAQs</li>
      <li className="h-[16px] w-[16px] opacity-70"><FontAwesomeIcon icon={faExclamationCircle} size="lg"/></li>
      <li className='h-[14 px] w-[87 px]'>Need Help</li>
      <li className='mx-10'></li>
    </ul>
    <ul className='flex items-center justify-space-between h-[84 px] w-[1920 px] padding-top-[20 px] padding-bottom-[20 px]
    padding-left-[300 px] padding-right-[300 px] bg-section_color gap-4'>
    <li className='mx-10'></li>
    <li><Image src={myImage} alt=""/></li>
    <li className='mx-80'></li>
    <li className="h-[16px] w-[16px]" > <FontAwesomeIcon icon={faCartShopping} size="lg"/>  </li>
    <li className='h-[44 px] w-[120 px] bg-white text-black gap-12'>Cart</li>
    <li className="h-[16px] w-[16px]"> <FontAwesomeIcon icon={faSun} size="lg"/></li>
    <li className='mx-10'></li>
    </ul>
    <ul className='flex items-center justify-space-between h-[74 px] w-[1920 px] padding-top-[20 px] padding-bottom-[20 px]
    padding-left-[300 px] padding-right-[300 px] bg-white gap-8'>
    <li className='mx-10'></li>
    <li className='h-[15 px] w-[40 px] font-inter weight-500 size-13 line-height-[14.3 px] text-nav_color'>Home</li>
    <li className='h-[15 px] w-[40 px] font-inter weight-500 size-13 line-height-[14.3 px] text-nav_color'>Shop</li>
    <li className='h-[15 px] w-[40 px] font-inter weight-500 size-13 line-height-[14.3 px] text-nav_color'>Product</li>
    <li className='h-[15 px] w-[40 px] font-inter weight-500 size-13 line-height-[14.3 px] text-nav_color'>Pages</li>
    <li className='h-[15 px] w-[40 px] font-inter weight-500 size-13 line-height-[14.3 px] text-nav_color'>About</li>
    <li className='mx-60'></li>
    <li className='h-[15 px] w-[40 px] font-inter weight-500 size-13 line-height-[14.3 px] text-black opacity-70'>Contact: </li>
    <li  className='h-[15 px] w-[40 px] font-inter weight-500 size-13 line-height-[14.3 px] text-black'> (808) 555-0111</li>
    <li className='mx-10'></li>
    </ul>
    <div className='mx-20 my-10 h-[1321 px] w-[850 px] bg-section_color'>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <p>WELCOME TO CHAIRY</p>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><b>
        Best Furniture
        <br className="hidden lg:inline-block" />
        Collection For Your
        <br className="hidden lg:inline-block" />
        Interior.
        </b>
      </h1>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-button_color border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Shop Now
        </button>
      </div>
    </div>
    <div className="h-[434 px] w-[584 px] lg:max-w-lg md:w-1/2 w-5/6">
    <Image src={myPr1} alt=""/>
    </div>
  </div>
</section>    
</div>
<ul className='flex items-center justify-space-between h-[139 px] w-[1321 px] top-[1107 px]
   left-[300 px] bg-white text-white gap-20 mx-20'>
<li><Image src={c1} alt=""/></li>
<li><Image src={c2} alt=""/></li>
<li><Image src={c3} alt=""/></li>
<li><Image src={c4} alt=""/></li>
<li><Image src={c5} alt=""/></li>
<li><Image src={c6} alt=""/></li>
<li><Image src={c7} alt=""/></li>
</ul>
<div className='mx-20 flex items-center h-[461 px] w-[1920 px]'>
  <div className="container px-5 py-24">
  <h1 className="sm:text-3xl text-2xl font-medium title-font text-text_color">
        Featured Products
      </h1>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool1}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool4}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool2}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool3}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
    </div>
  </div>
</div>
<section className="mx-20 text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mx-10 text-text_color">
        Top Categories
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt=""
            src={cat1}
          />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt=""
            src={cat2}
          />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt=""
            src={cat3}
          />
        </div>
      </div>
      </div>
  </div>
</section>
<div className="container px-5 py-24">
<div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
        Our Products
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool1}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool4}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool2}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool3}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={cat1}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool5}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={cat3}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={stool1}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Library Stool Chair
          </h2>
          <p className="mt-1">$20</p>
        </div>
      </div>
    </div>
  </div>

</nav>
  )
};
export default Navigation;
