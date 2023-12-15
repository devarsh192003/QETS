import styles from "./styles";
import GetStarted from "./GetStarted";
import img from '../images/img14-removebg.png';
const Hero = () => {
  
  const pink_gradiant = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
  const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
  const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
  // const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
  // const text_gradient = ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text'
  // const white_to_grey_gradient = 'bg-gradient-to-br from-white to-gray-300';

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      
      <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className={`${pink_gradiant}}`}>Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Calibaration Laboratory.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Precision Beyond Words, Engineering Beyond Limits - Your Partner for Triumph!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={img} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `} />
        <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} bottom-40`} />
        <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`} />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;