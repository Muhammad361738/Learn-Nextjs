// import Image from "next/image";

import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import About from "./About/page";
import Hero from "./Hero/hero";
import Products from "./Products/page"
import Navbar from "./Navbar/page";

export default function Home() {
  return (
    <div >  
      
      {/* <About/> */}
      <Navbar/>
      <Hero/>
      {/* <About/>
      <Products/> */}
     </div>
  );
}
