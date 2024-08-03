import React from 'react';

export default function Product(props) {
  return (
    <div
      className={`products rounded-xl relative ${props.styleContainer}`}
      style={{
        background: `linear-gradient(to bottom, rgba(18, 18, 18, 0), rgba(0, 0, 0, 1)), url(${props.image})`,
        filter: props.comingSoon ? 'grayscale(100%)' : 'none',
        transition: 'filter 0.3s ease',
      }}
    >
      <div
        className={`absolute bottom-[5%] left-[5%] w-[90%] text-left text-white font-normal ${props.styleText} transition-opacity duration-300`}
        style={{
          opacity: props.comingSoon ? '1' : '1',
          transition: props.comingSoon ? 'opacity 0.3s ease' : 'none',
        }}
      >
        <h1 className="lg:text-[2vw] text-[7vw]">{props.heading}</h1>
        <h3 className="lg:text-[0.8vw]  text-[3vw] tracking-[0.15vw] text-gray-300 mb-[2.75vh]">
          {props.description}
        </h3>
        {props.comingSoon?null:
        <a
          href={props.link}
          className="py-[1.5vw] px-[3vw] w-fit mx-auto rounded-md font-thin text-center justify-center border border-white lg:py-[0.4vw] lg:px-[1vw] hover:scale-110 transition-all ease-in-out tracking-wide"
        >
          Join
        </a>
        }
      </div>

      {props.comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white text-3xl font-bold coming-soon opacity-0 hover:opacity-100 transition-opacity duration-300">
          Coming Soon
        </div>
      )}

      <style jsx>{`
        .products:hover {
          filter: ${props.comingSoon ? 'grayscale(0%)' : 'none'};
        }
        .products:hover .original-text {
          opacity: ${props.comingSoon ? '0' : '1'};
        }
        .products:hover .coming-soon {
          opacity: ${props.comingSoon ? '1' : '0'};
        }
      `}</style>
    </div>
  );
}
