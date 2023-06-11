import location from '../images/location.png'
import track from '../images/group.png'
import logo from '../images/logo.png'
import logov2 from '../images/logov2.png'
import user from '../images/user.png'
import heart from '../images/heart.png'
import shop from '../images/shop.png'
import arrow from '../images/arrow-down.png'
import dots from '../images/dots.png'
import photo from '../images/photo.png'
import speaker from '../images/speaker.png'
import laptop from '../images/laptop.png'
import pm from '../images/pm.png'
import left from '../images/left.png'
import right from '../images/right.png'
import icon from '../images/heart-icon.png'
import camera from '../images/camera.png'
import eye from '../images/eye.png'
import whitecart from '../images/white.png'
import headphone from '../images/headphones.png'
import headphoneV2 from '../images/headphoneV2.png'
import stars from '../images/stars.png'
import gamepad from '../images/gamepad.png'
import banner from '../images/banner.png'
import bannerv2 from '../images/bannerv2.png'
import bannerv3 from '../images/bannerv3.png'
import bass from '../images/bass.png'
import dotsv2 from '../images/dotsv2.png'
import dotsv3 from '../images/dotsv3.png'
import box from '../images/box.png'
import shield from '../images/shield.png'
import crown from '../images/crown.png'
import h1 from '../images/h1.png'
import h2 from '../images/h2.png'
import h3 from '../images/h3.png'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import facebook from'../images/facebook.png'
import google from '../images/google.png'
import whatsapp from '../images/whatsapp.png'
import Image from 'next/image'

import Card from '@/components/card'

export default function Home() {
  return (
    <>
      <div className="w-full h-12 flex items-center justify-end font-sans">
        <div className="w-1/2 flex lg:justify-start ml-8">
          <h3 className="font-sans w-full  text-xs lg:text-sm">
            Need help?
            <br className="flex lg:hidden" /> Call us (+98) 0234 456 789
          </h3>
        </div>

        <div className="flex w-1/2 space-x-1 lg:space-x-4 items-center  justify-end lg:mr-8">
          <Image src={location} className=" lg:w-6 w-4 lg:h-8 h-6" />
          <span className="text-xs">Our store</span>
          <Image src={track} className="lg:w-6 w-4 lg:h-8 h-6" />
          <span className="text-xs">Track your order</span>
        </div>
      </div>

      <div className="w-full h-24 bg-[#003F62] flex flex-wrap items-center space-x-3 lg:space-x-8">
        <Image src={logo} className="mx-12 lg:w-28 w-24" />
        <div className="flex items-center justify-center w-2/5">
          <input
            className=" w-48 lg:w-full lg:h-14 h-10 pl-6 text-[#292D32] rounded-[20px]"
            placeholder="Search anything"
          ></input>
          <button className="bg-[#EDA415] text-white text-center rounded-[20px] lg:w-40  lg:h-14 h-10 ml-[-40px]">
            Search
          </button>
        </div>
        <div className="flex lg:w-2/5 w-full space-x-4 font-sans items-center text-white justify-center lg:justify-end">
          <Image src={user} className="cursor-pointer" />
          <span className="cursor-pointer">Sign in</span>
          <Image src={heart} className="cursor-pointer" />
          <span className="bg-[#EDA415] rounded-full w-6 h-6 text-center">
            0
          </span>
          <span className="cursor-pointer">Likes</span>
          <Image src={shop} className="cursor-pointer" />
          <span className="bg-[#EDA415] rounded-full w-6 text-center">0</span>
          <span className="cursor-pointer">Cart</span>
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] h-20 lg:flex hidden items center">
        <div className="flex justify-center items-center bg-[#EDA415] w-60 h-20 text-white space-x-2 ml-20">
          Browse categories <Image src={arrow} className="ml-4" />
        </div>
        <div className="flex justify-center items-center ml-8 text-[#3A3A3A] space-x-6">
          <label className="font-sans font-medium text-lg cursor-pointer">
            Home
          </label>
          <Image src={arrow} className="ml-2 cursor-pointer" />
          <label className="font-sans font-medium text-lg cursor-pointer">
            Catalog
          </label>
          <Image src={arrow} className="ml-2 cursor-pointer" />
          <label className="font-sans font-medium text-lg cursor-pointer">
            Blog
          </label>
          <label className="font-sans font-medium text-lg cursor-pointer">
            Pages
          </label>
          <Image src={arrow} className="ml-2 cursor-pointer" />
          <label className="font-sans font-medium text-lg cursor-pointer">
            About us
          </label>
        </div>
        <span className="flex w-1/3 justify-end items-center text-[#003F62] font-bold text-lg">
          30 Days Free Return
        </span>
      </div>

      <div className="w-full h-96 flex mt-8 justify-center lg:text-justify  ">
        <div className=" w-full lg:w-1/4 flex flex-col items-start space-y-4 mt-8 lg:ml-40 ">
          <label className="text-[#003f62] font-bold text-5xl leading-[4rem]">
            Canon <br /> Camera
          </label>
          <br />
          <div className=" flex justify-start flex-wrap  lg:w-full md:w-1/2 space-x-5 lg:space-x-20 ">
            <button className="bg-[#EDA415] text-white w-28 h-16 rounded-[20px] mb-12">
              Shop now
            </button>
            <button className="bg-white text-[#316887] w-28 h-16 border border-solid border-[#316887] rounded-[20px]">
              View more
            </button>
            <Image src={dots} className=" cursor-pointer  lg:flex" />
          </div>
        </div>

        <div className="w-3/5 flex justify-end relative">
          <Image src={photo} className="lg:w-80 w-40 lg:h-80 h-40" />
          <button className="w-28 h-28 bg-[#EDA415] rounded-full text-white absolute bottom-20">
            only
            <br />
            $89
          </button>
        </div>
      </div>

      <div className="w-4/5 flex  flex-wrap lg:flex-nowrap items-center justify-center m-auto h-40 my-12 space-y-4 space-x-4 relative">
        <Image src={left} className="absolute left-0  cursor-pointer" />
        <div className=" w-full lg:w-1/3 h-32 flex border border-solid border-[#A5A5A5] items-center justify-center space-x-3 rounded-[20px]">
          <Image src={speaker} className="w-32" />
          <span className="text-[#1B5A7D] font-semibold font-sans">
            Speaker <br /> (6 items)
          </span>
        </div>
        <div className=" w-full lg:w-1/3 h-32 flex border border-solid border-[#A5A5A5] items-center justify-center space-x-3 rounded-[20px]">
          <Image src={laptop} className="w-32" />
          <span className="text-[#1B5A7D] font-semibold font-sans">
            Desktop & laptop <br /> (6 items)
          </span>
        </div>
        <div className=" w-full lg:w-1/3 h-32 flex border border-solid border-[#A5A5A5] items-center justify-center space-x-3 rounded-[20px]">
          <Image src={pm} className="w-24" />
          <span className="text-[#1B5A7D] font-semibold font-sans">
            Dslr camera <br /> (6 items)
          </span>
        </div>
        <Image
          src={right}
          className="absolute right-[-20px] top-12 cursor-pointer "
        />
      </div>

      <div className="w-full flex my-12 lg:mt-0 mt-80 ">
        <div className="w-1/2 flex justify-start  ml-12 lg:ml-32">
          <span className="font-sans font-semibold text-[#1B5A7D] text-3xl">
            Popular products
          </span>
        </div>
        <div className="w-1/2 flex-wrap flex items-center gap-2">
          <button className=" w-20 lg:w-36 h-10 border border-solid border-[#003F62] rounded-[20px] text-center">
            Cameras
          </button>
          <button className=" w-20 lg:w-36 h-10 border border-solid border-[#B5B5B5] rounded-[20px] text-center">
            Laptops
          </button>
          <button className=" w-20 lg:w-36 h-10 border border-solid  border-[#B5B5B5]  rounded-[20px] text-center">
            Tablets
          </button>
          <button className=" w-20 lg:w-36 h-10 border border-solid  border-[#B5B5B5]  rounded-[20px] text-center">
            Mouse
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center  gap-4">
        <div className="w-2/5 lg:w-1/5  h-56 lg:h-72 border border-solid border-[#B5B5B5] rounded-[20px] flex flex-wrap justify-center relative">
          <Image src={camera} className="lg:w-48 md:w-36 w-24 lg:h-32 md:h-28 h-20" />
          <Image
            src={icon}
            className="w-6 h-6 absolute  right-1 lg:right-4 top-8 "
          />
          <div className="flex w-3/5 h-14 bg-[#87BCD9] items-center rounded-[20px]">
            <span className="text-[#272727] font-semibold pl-3 text-xs lg:text-base">
              Add to cart
            </span>
            <span className="bg-[#EDA415] ml-8 rounded-full w-10 h-10 items-center flex justify-center ">
              <Image src={whitecart} className=" w-6 h-6" />
            </span>
          </div>
          <div className="w-1/5 h-14 bg-[#87bcd9] rounded-[20px]  ml-2 lg:ml-6 flex justify-center items-center">
            <Image src={eye} className="" />
          </div>
        </div>
        <Card imagesrc={headphone} title="Wireless Headphones" />
        <Card imagesrc={gamepad} title="Play game" />
        <Card imagesrc={laptop} title="Tablet as a laptop" />
        <Card imagesrc={headphone} title="Wireless Headphones" />
        <Card imagesrc={gamepad} title="Play game" />
        <Card imagesrc={laptop} title="Tablet as a laptop" />
        <Card imagesrc={gamepad} title="Play game" />
      </div>

      <div className="w-full flex justify-center items-center my-8">
        <Image src={dots} className="w-16 h-4 cursor-pointer" />
      </div>

      <div className=" w-4/5 m-auto lg:w-full h-full my-8 relative">
        <Image src={banner} className=" lg:h-96 h-48 m-auto " />
        <div className=" w-1/2 h-1/5 flex flex-col items-center justify-center  space-y-4 lg:space-y-8 absolute lg:right-4 right-[-16px] top-20 lg:top-32">
          <button className="bg-[#EDA415] w-36 h-11 rounded-[20px] text-white">
            New laptop
          </button>
          <h2 className="text-[#2E8FC5] font-bold text-2xl lg:text-6xl">
            Sale up to 50% off
          </h2>
          <span className="text-white font-medium  text-sm lg:text-lg">
            12 inch hd display
          </span>
          <button className="bg-[#EDA415] w-36 h-11 rounded-[20px] text-white">
            Shop now
          </button>
        </div>
      </div>

      <div className="w-full flex-wrap flex  justify-center items-center lg:space-x-8 ">
        <div className="  w-4/5 lg:w-1/2 lg:h-[500px] h-96  flex flex-wrap  items-center justify-center  border border-solid border-[#B6B6B6] rounded-[20px] space-x-8 ">
          <Image src={bass} className=" lg:h-64 h-36 lg:w-64 w-36 mt-20" />
          <div className="w-1/2  flex h-3/5 flex-col text-left space-y-4 ">
            <label className="text-[#003F62] font-semibold text-lg">
              Jbl bar 2.1 deep bass
            </label>
            <label className="font-semibold text-lg">$11,70</label>
            <Image src={stars} className="w-24 h-4" />
            <div className="flex w-full h-40 items-center gap-3">
              <div className="rounded-full bg-[#E2F4FF] flex justify-center items-center lg:w-16 w-20 lg:h-16 h-8 text-[#EDA415] font-bold   text-lg lg:text-xl">
                57
              </div>
              <div className="rounded-full bg-[#E2F4FF] flex justify-center items-center lg:w-16 w-20 lg:h-16 h-8 text-[#EDA415] font-bold   text-lg lg:text-xl">
                11
              </div>
              <div className="rounded-full bg-[#E2F4FF] flex justify-center items-center lg:w-16 w-20 lg:h-16 h-8 text-[#EDA415] font-bold   text-lg lg:text-xl">
                33
              </div>
              <div className="rounded-full bg-[#E2F4FF] flex justify-center items-center lg:w-16 w-20 lg:h-16 h-8 text-[#EDA415] font-bold   text-lg lg:text-xl">
                59
              </div>
            </div>

            <div className="flex w-full space-x-4">
              <div className="flex  w-3/5 h-16 bg-[#87BCD9] items-center rounded-[20px]">
                <span className="text-[#272727] font-semibold pl-3 text-xs ">
                  Add to cart
                </span>
                <span className="bg-[#EDA415]  rounded-full ml-20 w-16 lg:w-10 h-10 items-center flex justify-center ">
                  <Image src={whitecart} className=" w-6 h-6" />
                </span>
              </div>
              <div className=" w-full lg:w-1/5 h-16 bg-[#87bcd9] rounded-full flex justify-center items-center">
                <Image src={eye} className="" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center my-8">
            <Image src={dotsv2} className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center m-auto w-4/5 lg:w-1/3 space-y-4 my-4">
          <div className="w-full h-60 border border-solid border-[#B6B6B6] rounded-[20px] flex items-center justify-center space-x-6">
            <Image src={gamepad} className="w-40 h-32" />
            <div className="flex flex-col space-y-4 text-left">
              <span className="text-lg font-medium text-[#003F62]">
                Play game
              </span>
              <span className="text-lg font-semibold">$11,70</span>
              <Image src={stars} className="w-24 h-4" />
            </div>
          </div>
          <div className="w-full h-60 border border-solid border-[#B6B6B6] rounded-[20px] flex items-center justify-center space-x-6">
            <Image src={laptop} className="w-40 h-32" />
            <div className="flex flex-col space-y-4 text-left">
              <span className="text-lg font-medium text-[#003F62]">
                Play game
              </span>
              <span className="text-lg font-semibold">$11,70</span>
              <Image src={stars} className="w-24 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5  h-fit lg:h-32 m-auto rounded-[20px] bg-[#E2F4FF] flex flex-wrap justify-center items-center space-x-0 lg:space-x-12 space-y-3  my-16">
        <div className="w-full lg:w-1/4 flex flex-wrap items-center justify-center break-words space-x-4 text-left">
          <Image src={box} className="w-8 lg:w-12" />
          <div className="">
            <span className="font-semibold text-2xl text-[#003F62]">
              Free delivery
            </span>
            <br />
            <span className="text-xl font-normal text-[#003f62]">
              on order above $50,00
            </span>
          </div>
        </div>
        <div className=" w-full lg:w-1/4 flex flex-wrap items-center justify-center space-x-4 break-words">
          <Image src={crown} className=" w-8 lg:w-12" />
          <div className="">
            <span className="font-semibold text-2xl text-[#003F62]">
              Best quality
            </span>
            <br />
            <span className="text-xl font-normal text-[#003f62]">
              best quality in low price
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-wrap items-center justify-center break-words space-x-4">
          <Image src={shield} className=" w-8 lg:w-12" />
          <div className="">
            <span className="font-semibold text-2xl text-[#003F62]">
              1 year warranty
            </span>
            <br />
            <span className="text-xl font-normal text-[#003f62]">
              Available warranty
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center m-auto my-8  gap-4">
        <div className=" w-4/5 lg:w-1/4 h-64 bg-[#E2F4FF9] border border-solid border-[#BABABA] rounded-[20px]">
          <div className="flex flex-wrap items-center space-y-2 p-2">
            <Image src={h1} className="w-20 mt-4 mr-8" />
            <span className="text-lg font-medium text-[#003f62]">
              Savannah Nguyen
            </span>
            <div className="w-11/12 h-fit rounded-[20px] bg-[#E2F4FF] text-left m-auto p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </div>
          </div>
        </div>
        <div className="w-4/5 lg:w-1/4 h-64 bg-[#E2F4FF9] border border-solid border-[#BABABA] rounded-[20px] ">
          <div className="flex flex-wrap items-center space-y-2 p-2">
            <Image src={h2} className="w-20 mt-4 mr-8" />
            <span className="text-lg font-medium text-[#003f62]">
              Esther Howard
            </span>
            <div className="w-11/12 h-full rounded-[20px] bg-[#E2F4FF] text-left m-auto p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </div>
          </div>
        </div>
        <div className="w-4/5 lg:w-1/4 h-64 bg-[#E2F4FF9] border border-solid border-[#BABABA] rounded-[20px]">
          <div className="flex flex-wrap items-center space-y-2 p-2">
            <Image src={h3} className="w-20 mt-4 mr-8" />
            <span className="text-lg font-medium text-[#003f62]">
              Esther Howard
            </span>
            <div className="w-11/12 h-full rounded-[20px] bg-[#E2F4FF] m-auto text-left p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-4">
        <Image src={dots} className="cursor-pointer"></Image>
      </div>

      <div className="w-4/5 m-auto flex flex-wrap justify-center items-center bg-[#E2F4FF] h-20 space-x-4">
        <Image src={brand1} className="w-24 lg:w-48" />
        <Image src={brand2} className="w-24 lg:w-48" />
        <Image src={brand3} className="w-24 lg:w-48" />
        <Image src={brand4} className="w-24 lg:w-48" />
        <Image src={brand5} className="w-24 lg:w-48" />
      </div>

      <div className="w-4/5 flex items-center m-auto my-8">
        <div className="flex w-1/2 justify-start">
          <span className="font-semibold text-2xl text-[#1B5A7D] cursor-pointer">
            Latest news
          </span>
        </div>

        <div className="flex w-1/2 justify-end">
          <span className="font-medium text-xl text-[#1B5A7D] cursor-pointer">
            view all
          </span>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center my-8 space-x-4 space-y-4 lg:space-y-0 m-auto">
        <div className="w-4/5 lg:w-2/5 h-96 flex justify-center items-center border border-solid border-[#C8C8C8] rounded-[20px] p-2 space-x-4 cursor-pointer">
          <div className="flex flex-col w-1/2 justify-center items-center">
            <Image src={bannerv2} className="w-60" />
          </div>
          <div className="flex flex-col w-1/2 justify-center text-left space-y-4">
            <div className=" w-28 lg:w-40 rounded-full border border-solid border-[#D4D4D4] text-center  text-xl lg:text-2xl text-[#1B5A7D]">
              <span>22,oct,2021</span>
            </div>
            <h3 className="text-[#1B5A7D] font-semibold text-2xl">
              Who avoids a pain that produces?
            </h3>
            <p className=" text-xs text-[#003F62] font-normal">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <span className="text-xs text-[#003F62] font-normal">
              By spacing tech
            </span>
          </div>
        </div>
        <div className="w-4/5 lg:w-2/5 h-96 flex justify-center items-center border border-solid border-[#C8C8C8] rounded-[20px] p-2 space-x-4 cursor-pointer">
          <div className="flex flex-col w-1/2 justify-center items-center">
            <Image src={bannerv3} className="w-60" />
          </div>
          <div className="flex flex-col w-1/2 justify-center text-left space-y-4">
            <div className=" w-28 lg:w-40 rounded-full border border-solid border-[#D4D4D4] text-center  text-xl lg:text-2xl text-[#1B5A7D]">
              <span>22,oct,2021</span>
            </div>
            <h3 className="text-[#1B5A7D] font-semibold text-2xl">
              Who avoids a pain that produces?
            </h3>
            <p className=" text-xs text-[#003F62] font-normal">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <span className="text-xs text-[#003F62] font-normal">
              By spacing tech
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-4">
        <Image src={dotsv3} className="w-28 cursor-pointer" />
      </div>

      <div className="w-full h-fit bg-[#E2F4FF] flex flex-wrap justify-center items-center ">
        <div className="w-11/12 h-24 flex justify-center items-center bg-white rounded-[20px] space-x-4 lg:space-x-12 my-8 ">
          <span className=" text-lg lg:text-3xl text-[#1B5A7D] font-bold">
            Subscribe newsletter
          </span>
          <input
            placeholder="Email address"
            className="w-36 lg:w-96 h-16  bg-[#EDA415] text-[#FFFFFF] p-4 rounded-[20px] placeholder:text-white"
          ></input>
          <Image src={headphoneV2} className="w-12" />
          <span className="text-[#606060] text-xs">
            Call us 24/7 <br /> (+62) 0123 567 789
          </span>
        </div>
        <div className="w-11/12 flex  justify-center items-center h-fit  space-x-6 ">
          <div className="w-1/4 flex space-y-6 flex-col items-start justify-start text-left my-4 ">
            <Image src={logov2} className="w-28" />
            <span className="text-lg font-normal text-[#1B5A7D]">
              64 st james boulevard <br />
              hoswick , ze2 7zj
            </span>
            <div className="border-b border-solid border-[#9D9D9D] w-4/5"></div>
            <div className="flex space-x-4 items-start justify-start w-4/5">
              <Image src={google} className="w-4" />
              <Image src={facebook} className="w-4" />
              <Image src={whatsapp} className="w-4" />
            </div>
          </div>
          <div class="w-1/4 flex  flex-col space-y-4 ">
            <label class="text-xl font-semibold text-[#1B5A7D] w-2/5">
              Find product
            </label>
            <ul class="list-none text-[#D9D9D9] space-y-2 flex flex-col">
              <li class="text-[#1B5A7D] text-[0.6rem] lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Brownze arnold
              </li>
              <li class="text-[#1B5A7D] text-[0.6rem] lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Chronograph blue
              </li>
              <li class="text-[#1B5A7D] text-[0.6rem] lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Smart phones
              </li>
              <li class="text-[#1B5A7D] text-[0.6rem] lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Automatic watch
              </li>
              <li class="text-[#1B5A7D] text-[0.6rem] lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Hair straighteners
              </li>
            </ul>
          </div>
          <div class="w-1/4 flex flex-col space-y-2 ">
            <label class="text-xl font-semibold text-[#1B5A7D] w-2/5">
              Get help
            </label>
            <ul class="list-none text-[#D9D9D9] space-y-2">
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> About us
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Contact us
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Return policy
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Privacy policy
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Payment Policy
              </li>
            </ul>
          </div>
          <div class="w-1/4 flex flex-col space-y-2">
            <label class="text-xl font-semibold text-[#1B5A7D] w-2/5 ">
              About us
            </label>
            <ul class="list-none text-[#D9D9D9] space-y-2 ">
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9] ">•</span> News
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Service
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Our policy
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Customer care
              </li>
              <li class="text-[#1B5A7D]  text-xs lg:text-xl">
                <span class="text-[#D9D9D9]">•</span> Faq's
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
