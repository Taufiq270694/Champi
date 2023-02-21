import React from 'react'
import Cardcontent from './Cardcontent'
import Footer from './Footer'
import jamur from '../image/shutterstock.png'
import chain from '../image/valuechain_graph.svg'
import farm from '../image/image 14.png'
import distri1 from '../image/image 15.png'
import distri2 from '../image/image 17.png'
import distri3 from '../image/image 20.png'
import fmcg from '../image/image 16.png'
import retail from '../image/image 29.png'
import outlets from '../image/Screenshot 2022-12-18 at 23.46 1.png'


const Maincontent = ()=> {
    return(
        <div className='container mx-auto bg-slate-100'>
            <section>
                <div className='flex flex-col-reverse items-center justify-between space-y-5 md:flex-row md:space-y-0'>
                    <div className='container py-5 px-5'>
                        <div className='max-w-lg mx-auto'>
                            <h1 className='text-sky-500 font-extrabold text-2xl sm:text-2xl' >We want to be your valued and trusted business partner by aiming to deliver quality fresh, frozen, and shelf-stable ingredients as ordered, on-time, and at fair and stable prices.</h1>
                            <p className='text-lg text-center mt-5 md:text-left'>Champi has been a trusted producer, seller, marketer, and distributor of food and non-food items to supermarkets, general trade stores, hotels, restaurants, caterers, and industrial manufacturers in Indonesia for over two decades.</p>
                        </div>
                    </div>
                    <div className='container items-center py-5 px-5'>
                        <div className='container flex justify-center mx-auto'>
                            <img className='rounded-lg w-2/3' src={jamur} alt='jamur champignon'></img>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container bg-white shadow-lg'>
                    <img src={chain} alt='chain' className='w-full'></img>
                </div>
            </section>
            <section>
                <div className='flex flex-col items-center justify-between space-y-5 bg-white shadow-lg py-10 md:flex-row md:space-y-0'>
                    <div className='container py-5 px-5'>
                        <div className='max-w-lg mx-auto'>
                            <h1 className='text-4xl font-extrabold text-sky-500 md:text-left'>Farm and Plantaion</h1>
                            <h1 className='text-2xl text-red-800 md:text-left'>FRESH PRODUCE</h1>
                            <p className='mt-5 font-bold md:text-left'>Champi is on a mission to provide the freshest, healthiest produce to our customers. Not only do we grow many fresh produce ourselves, we also work closely with local farmers and importers to bring you the best of what's in season, all year round. Our vertically integrated supply chain means we can control quality and freshness from farm to table. Whether you're looking for mushrooms, fresh salad greens, broccoli, bell peppers, cucumbers, cauliflower, asian greens, squashes, carrots, or local fruit - Champi has you covered!</p>
                        </div>
                    </div>
                    <div className='container items-center px-5 py-5'>
                        <div className='container flex justify-center mx-auto'>
                            <img src={farm} alt='Farmer' className='w-2/3 rounded-2xl'></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container bg-gray-100 shadow-lg'>
                <div className='p-5'>
                    <h1 className='text-2xl font-extrabold text-sky-500'>FOOD AND INGREDIENTS PROCESSING</h1>
                </div>
                <Cardcontent />
            </section>
            <section>
                <div className='flex flex-col items-center justify-between bg-gray-100 md:flex-row md:space-y-0'>
                    <div className='container items-center px-5 py-5'>
                        <div className='container flex justify-center mx-auto'>
                            <img src={fmcg} alt='FMCG Manufacturing' className='w-2/3 rounded-2xl'></img>
                        </div>
                    </div>
                    <div className='container px-5 py-5'>
                        <div className='max-w-lg mx-auto'>
                            <h1 className='text-4xl text-sky-500 font-extrabold text-left md:text-left'>FMCG Manufacturing</h1>
                            <p className='text-lg text-left mt-5 md:text-left'>Champi is a notable beverage and snack food company. We have a large manufacturing facility that produces over 12 million cases of beverages and 2 million cases of snack foods annually. Our product range includes teas, coffee, drinking jellies, cream drinks, puff snacks, and nut-based snacks. We are committed to providing the best quality products and services to our customers.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container items-center justify-between shadow-lg bg-white'>
                <div className='container flex flex-col items-center justify-between mx-auto p-10'>
                    <h1 className='text-4xl text-center font-extrabold text-sky-500 md:text-left'>DISTRIBUTION</h1>
                    <p className='text-center px-10'>ABC Group has an extensive distribution network covering all major population centers of Indonesia’s 270 million consumers, serving over 500,000 wholesalers and retailers.</p>
                </div>
                <div className='flex flex-col justify-between px-10 py-10 md:flex-row md:space-y-0'>
                    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                        <img className='w-full' src={distri1} alt='Distribution 1'></img>
                        <div className='px-6 py-4'>
                            <p>Our products are sold through a combination of third party distributors and our own distribution depots, reaching most major and second tier cities in Indonesia.Read More </p>
                        </div>
                    </div>
                    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                        <img className='w-full' src={distri2} alt='Distribution 2'></img>
                        <div className='px-6 py-4'>
                            <p>To allow us to provide our customers with the highest quality products while ensuring food safety and reducing wastage, Champi has developed an extensive cold chain distribution network in metropolitan Jakarta and cold chain logistics that extend throughout Java and Bali, providing a cold chain system linking farms to refrigerated shelves.Read More </p>
                        </div>
                    </div>
                    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                        <img className='w-full' src={distri3} alt='Distribution'></img>
                        <div className='px-6 py-4'>
                            <p>Champi is a leading food ingredient distributor and a provider of tailored food solutions for the QSR, restaurant, hotel, and catering industries. We work closely with these institutions to provide them with the highest quality whole and processed ingredients so they can offer their customers the best possible experience. With our extensive knowledge of the supply market and our commitment to providing only the highest quality products and services, Champi is your ideal partner in supplying your business with everything it needs to succeed.Read More </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container items-center justify-between bg-gray-100 shadow-lg p-10'>
                <div className='container flex flex-col items-center justify-center max-w-lg mx-auto p-10'>
                    <h1 className='text-4xl font-extrabold text-sky-500 text-center md:text-left'>RETAIL</h1>
                    <p className='text-center mt-5'>Our commercial size allows us to plant ourselves or contract with multiple farmers to diversify sources. With scale, it also allows for a cold chain infrastructure to maintain quality. Planting ourselves and contract buying from multiple sources directly captures margins lost to middlemen and to offset crop seasonality.</p>
                </div>
                <div className='container flex flex-col items-center justify-center'>
                    <img src={retail} alt='Retail' className='w-3/4 items-center'></img>
                </div>
            </section>
            <section className='container justify-between items-center bg-white shadow-lg p-10'>
                <div className='max-w-lg mx-auto'>
                    <h1 className='text-2xl font-extrabold text-center'>These outlets have switched 100% to Champi</h1>
                </div>
                <div className='container flex flex-col items-center justify-center'>
                    <img src={outlets} alt='Outlets' className='w-3/4'></img>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Maincontent ;