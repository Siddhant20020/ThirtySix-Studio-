import './index.css';
import Canvas from './Canvas';
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    // Initialize LocomotiveScroll
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    // Add click event to heading
    if (headingRef.current) {
      headingRef.current.addEventListener("click", () => {
        setShowCanvas(true);
      });
    }

    // Cleanup LocomotiveScroll on component unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      {/* Main container with LocomotiveScroll support */}
      <div data-scroll-container className="w-full relative min-h-screen font-['Helvetica_Now_Display'] pt-20">
        {/* Render Canvas only when showCanvas is true */}
        {showCanvas && data[0].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}

        {/* Navbar */}
        <div className="w-full relative z-[1] h-screen text-white">
          <nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50">
            <div className="brand text-4xl font-regular">Thirtysixstudio</div>
            <div className="links flex gap-10 text-2xl">
              {["Home", "About", "Project", "Contacts"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* Hero Section */}
          <div className="textcontainer w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">
                At ThirtySixStudios, we build immersive digital experiences for brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>

          {/* Large Heading */}
          <div className="w-full absolute bottom-0 left-10">
            <h1
              ref={headingRef}
              className="text-[14rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full relative h-screen text-white mt-32 px-10">
        {data[1].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
        <div className="relative z-[1]">
          <h1 className="text-4xl tracking-tighter">About the Brand</h1>
          <p className="text-2xl leading-[1.8] w-[80%] mt-10 font-light">
            We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
          </p>
          <img
            className="w-[80%] relative z-0 mt-10"
            src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
            alt="Brand"
          />
        </div>
      </div>
    </>
  );
}

export default App;
