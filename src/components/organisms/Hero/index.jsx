import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: '-100%',
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'Power3.easeOut',
      },
      '<'
    )
      .from(
        h12.current,
        {
          x: '-100%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        h13.current,
        {
          x: '-100%',
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        myimageref.current,
        {
          x: '200%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-primary dark:text-light-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋 <br /> My Name is <br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          ridho abyakta
        </h1>
        <h3
          ref={h13}
          className="w-full text-2xl text-dark-primary dark:text-light-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          Web Developer
        </h3>
      </div>
      <div className="mt-5 md:mt-0 w-48">
        <img
          src="https://avatars.githubusercontent.com/u/161543315?s=400&u=79f5af4a80401cc50199518b909c934e8c59bfe6&v=4"
          alt="Ridho"
          ref={myimageref}
          className="w-1/2 md:ml-auto w-100 border-8 border-d   ark-primary dark:border-light-primary rounded-full bg-slate-500"
        />
      </div>
    </main>
  );
};
