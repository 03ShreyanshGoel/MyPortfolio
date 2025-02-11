import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroFooter from '../components/HeroFooter';
import PortfolioText from '../components/PortfolioText';
import { LuArrowDownRight } from 'react-icons/lu';

const Hero = () => {
  const heroRef = useRef(null);
  const arrowRef = useRef(null);
  const tagsRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(heroRef.current, { visibility: 'visible' });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(portfolioRef.current, {
        duration: 1.2,
        opacity: 0,
        y: 50,
        stagger: 0.1,
      });

      tl.from(
        arrowRef.current,
        {
          duration: 0.8,
          rotation: -180,
          scale: 0.5,
          opacity: 0,
        },
        '-=0.5',
      );

      tl.from(
        tagsRef.current?.children || [],
        {
          duration: 0.8,
          x: 100,
          opacity: 0,
          stagger: 0.1,
        },
        '-=0.3',
      );

      tl.from(
        footerRef.current?.children || [],
        {
          duration: 0.6,
          y: 30,
          opacity: 0,
          stagger: 0.05,
        },
        '-=0.2',
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} style={{ visibility: 'hidden' }}>
      <div className="mx-3 grid grid-rows-[2.5fr_0.5fr] py-3 sm:mx-auto sm:max-w-[85rem] md:h-[80dvh] md:grid-cols-[0.3fr_1.7fr] md:grid-rows-1 md:gap-14 md:py-5">
        <div className="order-1 h-full md:order-2" ref={portfolioRef}>
          <PortfolioText />
        </div>
        <div className="order-2 mt-auto flex flex-row-reverse md:order-1 md:flex-col">
          <span
            ref={arrowRef}
            className="text-9xl font-bold text-gray-900 md:ml-auto"
          >
            <LuArrowDownRight
              strokeWidth={4}
              viewBox="0 0 19 19"
              className="ml-auto cursor-pointer transition-all duration-700 ease-in-out hover:scale-110 hover:rotate-[20deg] md:hover:rotate-[-100deg]"
            />
          </span>
          <div ref={tagsRef} className="pt-5 md:pb-8">
            <div className="flex justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
              <p>#hello_world</p>
            </div>
            <div className="flex items-center justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
              <p>#softwareEngineer</p>
              <p className="cursor-wait">#💻</p>
            </div>
            <div className="flex items-center justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
              <p>#coder</p>
              <p>#webDeveloper</p>
            </div>
            <div className="flex items-center justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
              <p>#next.Js</p>
              <p>#react.Js</p>
              <p>#flutter</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={footerRef}>
        <HeroFooter />
      </div>
    </div>
  );
};

export default Hero;
