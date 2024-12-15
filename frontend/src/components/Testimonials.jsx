import React from 'react'
import Slider from "react-slick";
import Footer from './Footer';
import NavContact from './NavContact';
import Navbar from './Navbar';


function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <>
            <NavContact />
            <Navbar />
            <div className="slider-container md:pt-48 pt-16 md:mx-12 mx-4 my-12">
                <Slider {...settings}>
                    <div className='md:h-28 h-72  w-full md:my-12 my-4 bg-green-200'>
                        <h5 className='px-12 py-4 text-black'>Very good experience. I visited there to consult a dietician. Dr. Akshay Pawar is a very good dietician over there. He is very cooperative & gentle in nature. Under his guidance & support, I reduced my weight. The best dietician I have ever found.</h5>
                        <h5 className='pl-12 text-blue-500'>-Shivam Sawargave</h5>
                    </div>
                    <div className='md:h-28 h-72 w-full md:my-12 my-4 bg-green-200'>
                    <h5 className='px-12 py-4 text-black'>Lifestyle changes and medicines prescribed by Dr Reema and Dietary suggestions from Dr Akshay Pawar did wonders for my health. Overall Good experience.</h5>
                    <h5 className='pl-12 text-blue-500'>-Ashwin Kornule</h5>
                    </div>
                    <div className='md:h-28 h-72 w-full md:my-12 my-4 bg-green-200'>
                    <h5 className='px-12 py-4 text-black'>Mr. Gulage Gangadhar came to show Dr. Mane, sir, at the noble hospital for my Diabetes. He gave me insulin and sent me to Dr. Reshma Kangude for counseling. She counseled me very nicely, taught me insulin, and made me confident about insulin. I am very happy about her service and hospital service..thank you very much.</h5>
                    <h5 className='pl-12 text-blue-500'>-Sunil Konale</h5>
                    </div>
                    <div className='md:h-28 h-78 w-full md:my-12 my-4 bg-green-200'>
                    <h5 className='px-12 py-4 text-black'>The diabetes treatment for my wife by Dr. Reemakashiva in December 2021 is very effective and with great human touch. The treatment is well coordinated by Dietitian Akshay Pawar sir. In fact, the importance of diet was first time realized by his Counseling. The coordination of medicine and diet treatment has gone a long way in controlling diabetes and restoring confidence inpatient. Thanks, Reema Madam and Akshay Pawar sir.</h5>
                    <h5 className='pl-12 text-blue-500'>-Ganesh Manore</h5>
                    </div>
                    <div className='md:h-28 h-72 w-full md:my-12 my-4 bg-green-200'>
                    <h5 className='px-12 py-4 text-black'>Noble hospital is the best hospital in Pune.I have ever come across.Dr. Mane sir .. humble,honest easily approachable,and making everyone the patients as well as relatives at ease are some your unique qualities,may God bless him abundantly.</h5>
                    <h5 className='pl-12 text-blue-500'>-Aditya Suryawanshi</h5>
                    </div>
                    <div className='md:h-32 h-84 w-full md:my-12 my-4 bg-green-200'>
                    <h5 className='px-12 py-4 text-black'>Dr. Sujit Sawadtkar-Cardiologist, Suggested us to get treated in Noble Hospital when my daughter went through seviour Accident, Dr. Sampat Dumre Patil Sir , Dr. Shailesh Patil Sir both Ortho Specialists treaded my daughter in very seviour condition she went through 3 major surgeries of foot Ankle and Hand . But she is doing very well now. Miss Mary Sister and all other staff is very supportive and cooperative. Thank you very much for each and every one who supported me in this situation.</h5>
                    <h5 className='pl-12 text-blue-500'>-Sajan Naitam</h5>
                    </div>
                </Slider>
            </div>
            <Footer />
        </>
    )
}

export default Testimonials
