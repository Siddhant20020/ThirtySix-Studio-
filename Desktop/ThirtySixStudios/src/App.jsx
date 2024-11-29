import './index.css';
import Canvas from './Canvas';
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();


  }, []);
  return (
    <>
      <div className='w-full  relative min-h-screen '>
        {/* <Canvas startIndex={150} />
        <Canvas startIndex={300} />  */}

        {/* // data.map((item, index) => (
            // <Canvas startIndex={item.startIndex} />
          //   <div key={index}>
          //     {item.map((canvasdets, index) => (
          //       <Canvas details={canvasdets} />) )

        
          // ))}
          //    }

          //   </div> */} */
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} />
        ))}

      </div>
      {/* <div className='w-full relative min-h-screen'>
        {
          data[1].map((canvasdets, index) => (
            <Canvas details={canvasdets} />
          ))
        }
      </div>
      <div className='w-full relative min-h-screen'>
        {
          data[2].map((canvasdets, index) => (
            <Canvas details={canvasdets} />
          ))
        }
      </div>
      <div className='w-full relative min-h-screen'>
        {
          data[3].map((canvasdets, index) => (
            <Canvas details={canvasdets} />
          ))
        }
      </div> */}
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Dispaly']"></div>

    </>
  )
}
export default App;