
import React from "react";
import './App.css';
import { useState, useEffect } from 'react';
import './darkMode.css';
import { Moon, Sun, RedditLogo, GithubLogo, YoutubeLogo, StackOverflowLogo, LinuxLogo, DiscordLogo } from 'phosphor-react';

const SearchBar = () => {
  return (
    <div id="main" className="flex shadow-full shadow-[#0d0d0e]">
      <div className="form-search">
        <form action="https://google.com/search" method="GET" className="">
          <input autoFocus name="q" type="search" className="font-regular w-98 border-0 border-solid hover:border-2 hover:border-blue-300 bg-[#1e2528] p-2 px-4 rounded-xl text-lg" placeholder="Go brrrr..." autoComplete="off" />
        </form>
      </div>
    </div>
  )
}

const Timer = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className="flex">
      <div className="text-white-200 text-center text-8xl font-bold">
        <h1>
          {hours}<span className="text-[#bab3e5]">:</span>{minutes < 10 ? `${minutes}` : minutes}
        </h1>
        <h1 className="greet text-2xl">
          こんにちは, はじめまして!!
        </h1>
      </div>
    </div>
  );
}

const Links = () => {
  return (
    <div className="bg-[#141a1b] bottom-0 m-2 rounded-lg shadow-2xl">
      <div className="flex flex-row justify-center items-center">
        <div className="">
          <a href="https://linux.org" >
            <LinuxLogo size={32} className="hover:text-[#0d0d0e] text-[#dadada] m-2 p-1 rounded-lg hover:bg-[#f0cd61] " weight="duotone" />
          </a>
        </div>
        <div className="p-2">
          <a href="https://github.com/dashboard" className="hover:text-[#0d0d0e]">
            <GithubLogo size={32} className="hover:text-[#0d0d0e] text-[#dadada] m-2 p-1 rounded-lg hover:bg-[#d6d2c8] " weight="duotone" />
          </a>
        </div>
        <div className="p-2">
          <a href="https://discord.com" className="hover:text-[#0d0d0e] ">
            <DiscordLogo size={32} className="hover:text-[#0d0d0e] text-[#dadada] m-2 p-1 rounded-lg hover:bg-[#aa8be1] " weight="duotone" />
          </a>
        </div>
        <div className="p-2">
          <a href="https://reddit.com" className="hover:text-[#0d0d0e] hover:bg-[#e46a4a ">
            <RedditLogo size={32} className="hover:text-[#0d0d0e] text-[#dadada] m-2 p-1 rounded-lg hover:bg-[#e18256] " weight="duotone" />
          </a>
        </div>
        <div className="p-2">
          <a href="https://youtube.com" className="hover:text-[#0d0d0e] ">
            <YoutubeLogo size={32} className="hover:text-[#0d0d0e] text-[#dadada] m-2 p-1 rounded-lg hover:bg-[#e57474] " weight="duotone" />
          </a>
        </div>
        <div className="p-2">
          <a href="https://stackoverflow.com" className="hover:text-[#0d0d0e] ">
            <StackOverflowLogo size={32} className="hover:text-[#0d0d0e] text-[#dadada] m-2 p-1 rounded-lg hover:bg-[#f0cd61] " weight="duotone" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function funcExport() {
  return (
    <>
      <div className="h-screen bg-black flex justify-around items-center">
        <Timer />
        <SearchBar />
        <div className="flex justify-center bottom-0 absolute">
        <Links />
        </div>
      </div>
      <div className="bg-black">
      </div>
    </>
  );
}