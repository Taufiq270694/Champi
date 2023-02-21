
   import process from '../image/image 16-1.png'
   import process1 from '../image/Rectangle 69.jpg'
   import process2 from '../image/Rectangle 70.jpg'

  const Cardcontent = ()=> {
    return(
    <div className='flex flex-col mx-auto justify-between px-10 py-10 space-y-5 md:flex-row md:space-y-0 md:space-x-5'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img className='w-full hover:scale-110 transition duration-300' src={process} alt='Processing'></img>
            <div className='px-6 py-4'>
                <p>Champi is the leading producer of processed chili in Indonesia, producing over 10,000MT of chili paste annually. Our mission is to not only supply our industrial condiment manufacturer and foodservice customers with the freshest and best quality chili, but also to give small farmers a good standard of living by giving fair-trade prices and help improve their yields.</p>
            </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img className='w-full hover:scale-110 duration-300' src={process1} alt='Processing'></img>
            <div className='px-6 py-4'>
                <p>We use state-of-the-art European processing equipment to ensure that thermally preserved chili pastes are of the highest quality.</p>
            </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img className='w-full hover:scale-110 duration-300' src={process2} alt='Processing'></img>
            <div className='px-6 py-4'>
                <p>We conduct internal research and development to discover better yields and lower costs for chili pepper cultivation. We also partner with research and educational agricultural institutions to develop and high yielding chili peppers and cultivation methods to continually improve farmer yields and income.</p>
            </div>
        </div>
    </div>
    )
  }

  export default Cardcontent;
