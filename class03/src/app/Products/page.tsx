import Image from 'next/image';
import card1 from "../Assests/card1.jpg"
import card2 from "../Assests/card2.jpg"
import card3 from "../Assests/card3.jpg"
import card4 from "../Assests/card4.jpg"
import card5 from "../Assests/card5.jpg"
import card6 from "../Assests/card6.jpg"

const Page = () => {
    return (
        <div>
            <div>
           
            <h2 className='text-center p-16 bg-amber-700   h-14 shadow-xl shadow-amber-800 text-3xl font-serif font-bold'>Our products  </h2>
            </div>

            <div className='flex bg-amber-950 w-screen  flex-wrap'>
            <div className='h-96 w-72 mt-20 max-sm:w-64 max-md:w-56 max-md:m-4 lg:w-96 lg:ml-8  m-8 max-2xl:w-80 rounded-xl items-center text-center bg-amber-800   '>
                <Image className='rounded-t-xl h-32 w-full' src={card1} alt="" />
                <div className="text-2xl text-white font-mono mt-4"> Hazelnut </div>
             <p>Considered a good choice almost anywhere, hazelnut flavoring provides a sweet and buttery taste. It emits a nutty aroma in freshly brewed batches.</p>      
            </div>

            <div className='h-96 w-72 mt-20 max-sm:w-64 max-md:w-56 max-md:m-4 lg:w-96 lg:ml-8  m-8 rounded-xl items-center text-center bg-amber-800  '>
                <Image className='rounded-t-xl h-32 w-full' src={card2} alt="" />
                <div className='text-2xl text-white font-mono mt-4'>French Vanilla </div>
                <p className='flex-wrap'>French vanilla is a classic <br /> coffee flavor  that offers <br />a subtle and pleasing . <br /> Its aromatic touch enhances <br /> decaf blends and standard <br /> beverages packed <br /> with morning fuel. 
                </p>
            
            </div>

            <div className='h-96 w-72 mt-20 max-sm:w-64 max-md:w-56 max-md:m-4 lg:w-96 lg:ml-8  m-8 max-2xl:w-80 rounded-xl items-center text-center bg-amber-800  '>
                <Image className='rounded-t-xl h-32 w-full' src={card3} alt="" />
                <div className='text-2xl text-white font-mono mt-4'>Caramel</div>
                <p>The candied and toasty palate of caramel complements any cup of coffee as an alternative to adding a spoonful of sugar. This flavor is gaining momentum because it offers a sweetness you can savor
                </p>
                
            </div>

            <div className='h-96 w-72 mt-20 max-sm:w-64 max-md:w-56 max-md:m-4 lg:w-96 lg:ml-8  m-8 max-2xl:w-80 rounded-xl items-center text-center bg-amber-800 '>
                <Image className='rounded-t-xl h-32 w-full' src={card4} alt="" />
                <div className='text-2xl text-white font-mono mt-4'> Peppermint</div>
                <p>Peppermint is becoming more common for brands because of its notable and refreshing taste. The minty fragrance works well in hot drinks as a seasonal delight in winter. </p>
            </div>
            
            <div className='h-96 w-72 mt-20 max-sm:w-64 max-md:w-56 max-md:m-4 lg:w-96 lg:ml-8  m-8 max-2xl:w-80 rounded-xl items-center text-center bg-amber-800 '>
                    <Image className='rounded-t-xl h-32 w-full' src={card5} alt="" />
                <div className='text-2xl text-white font-mono mt-4'> Mocha</div>
                <p> You cant go wrong with mocha, which is the perfect mix of richness and sweetness. It blends well with milk, chocolate, and coffee.
                </p>

            </div>
            
            <div className='h-96 w-72 mt-20 max-sm:w-64 max-md:w-56 max-md:m-4 lg:w-96 lg:ml-8  m-8 max-2xl:w-80 rounded-xl items-center text-center bg-amber-800 '>
                <Image className='rounded-t-xl h-32 w-full' src={card6} alt="" />
                <div className='text-2xl text-white font-mono mt-4'> Amaretto</div>
                <p>When you want the flavoring of an Italian liqueur without the alcohol, consider amaretto. The nutty aroma and taste of toasted almonds offer a sophisticated flair to many hot coffees. 

</p>
            </div>
            
         </div> 
     </div>
    );
}

export default Page;
