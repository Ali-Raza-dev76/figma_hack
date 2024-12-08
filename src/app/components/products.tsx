import React from 'react'
import { faCartShopping, faCheck, faChevronCircleDown, faDownLeftAndUpRightToCenter, faExclamationCircle, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'; // Import the next/image component
import myImage from "../images/Logo.png";
import stool1 from "../images/stool3.png";
import stool2 from "../images/stool4.png";
import stool3 from "../images/stool1.png";
import stool4 from "../images/stool2.png";
import stool5 from "../images/stool5.png";
import cat1 from "../images/cat1.png";
import cat2 from "../images/cat2.png";
import cat3 from "../images/cat3.png";

const products = () => {
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
    <div className='mx-20 flex items-center h-[461 px] w-[1920 px]'>
  <div className="container px-5 py-24">
  <h1 className="sm:text-3xl text-2xl font-medium title-font text-text_color">
        All Products
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
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image 
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={cat2}
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
    </div>
  </div>
</div>

<div className="mx-10 container px-5 py-24 bg-gray-100">
<div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb- text-gray-900">
        Follow Products And Discounts On Instagram
      </h1>
    </div>
    <div className="flex -m-4 overflow-x-auto">
  <div className="lg:w-1/8 md:w-1/4 p-4">
    <a className="block relative h-48 rounded overflow-hidden">
      <Image 
        alt=""
        src={cat2}
      />
    </a>
  </div>
  <div className="lg:w-1/8 md:w-1/4 p-4">
    <a className="block relative h-48 rounded overflow-hidden">
      <Image 
        alt=""
        src={cat1}
      />
    </a>
  </div>
  <div className="lg:w-1/8 md:w-1/4 p-4">
    <a className="block relative h-48 rounded overflow-hidden">
      <Image 
        alt=""
        src={stool4}
      />
    </a>
  </div>
  <div className="lg:w-1/8 md:w-1/4 p-4">
    <a className="block relative h-48 rounded overflow-hidden">
      <Image 
        alt=""
        src={stool1}
      />
    </a>
  </div>
  <div className="lg:w-1/8 md:w-1/4 p-4">
    <a className="block relative h-48 rounded overflow-hidden">
      <Image 
        alt=""
        src={stool2}
      />
    </a>
  </div>
  <div className="lg:w-1/8 md:w-1/4 p-4">
    <a className="block relative h-48 rounded overflow-hidden">
      <Image 
        alt=""
        src={cat3}
      />
    </a>
  </div>
</div>

  </div>

     </nav>
  )
}

export default products