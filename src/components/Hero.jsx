
import heroimg from '../assets/hee.png.png';
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    return <section className='flex  flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <br />
        <div className='md:w-1/2' flex flex-col>
            <br />
        <h1  className=' text-black text-6xl font-hero-font'> <br />hi,<br/> Im Dinesh Kumar 
        <p className='text-2xl'>Im a Front -End Developer</p>
        </h1>
        <div className='flex py-9'>
           <a a href='#' className='pr-5 hover:text-orange-300'><AiOutlineTwitter size={40}/></a>
           <a a href='#' className='pr-5  hover:text-orange-300'><AiOutlineInstagram size={40}/></a>
           <a a href='#' className=' hover:text-orange-300'><AiOutlineLinkedin size={40}/></a>
        </div>

        </div>
      
        <img className='md:w-1/3' src={heroimg}></img>
    </section>
    
}