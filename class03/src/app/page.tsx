// import Image from "next/image";

import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import About from "./About/About";
import Hero from "./Hero/hero";
import Products from "./Products/page"

export default function Home() {
  return (
    <div >  
      
      {/* <About/> */}
      <Hero/>
      <Products/>
     </div>
  );
}
