import Image from "next/image";
import bgc2 from "../Assests/bgc.jpg"

const Hero = () => {
    return (
        <div >
          <br />
          <br />
            <div className=''>
                  {/* <Image className="h-screen w-full " src={bgc2} alt="" /> */}
                  <Image className="h-screen w-full" src={bgc2} alt="" />
                
                  </div>
        </div>
    );
}

export default Hero;
