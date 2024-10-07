import AboutImg from '../assets/des.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Dinesh kumar. I am a Front-End web developer. I built beautiful Websites with React.js , Tailwind CSS ',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.',
        line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose'
    }

    return <section className='flex flex-col md:flex-row bg-third px-5' id='about'>
        <div className='py-6 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center  text-black'>
                <h1 className='text-3xl border-b-4  justify-center border-primary mb-10 w-[150px] font-bold'>About Me</h1>
                <p className='pb-6 text-1xl'>{config.line1}</p>
                <p className='pb-6 text-1xl'>{config.line2}</p>
                <p className='pb-6 text-1xl'>{config.line3}</p>
            </div>
        </div>
    </section>
}