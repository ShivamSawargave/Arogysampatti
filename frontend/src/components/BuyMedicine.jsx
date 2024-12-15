import React from 'react'
import Slider from "react-slick";
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';

function BuyMedicine() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    var settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <NavContact />
            <Navbar />
            <div className='md:ml-20 md:mr-44 mb-12 md:pt-40 pt-20'>
                <img src="https://images.apollo247.in/images/category/consult_doctor_symtom_checker_web_new..jpeg?tr=w-1276,q-100,f-webp,c-at_max" className='m-10 md:w-full w-80'></img>
            </div>
            <div className="slider-container md:mx-32 mb-10">
                <Slider {...settings}>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://cdn.dribbble.com/users/7066371/screenshots/15289384/media/ec92519c160a4ec7f45481d649b5a702.png' className='rounded-lg md:p-0 p-2 md:h-96' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://img.freepik.com/premium-vector/modern-medical-clinic-advertisement-social-media-post-banner-template_694991-2173.jpg' className='rounded-lg md:p-0 p-2 md:pr-8 md:h-96' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://imageio.forbes.com/images-forbes/media/2010/02/02/0202_latisse_485x340.jpg?height=400&width=711&fit=bounds' className='rounded-lg md:p-0 p-2 md:h-96' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://gumlet-images.assettype.com/afaqs%2F2021-03%2Ffc54d8e2-1621-4d48-b126-ae8dd83993b0%2Fe5d8d6_246350_19_mr.jpg?auto=format%2Ccompress&w=1200' className='rounded-lg md:p-0 p-2 md:h-96' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://www.motrin.com/images/hero/hero-MOTRIN_PLP.webp' className='rounded-lg md:p-0 p-2 md:h-96 md:pr-8' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://images.thequint.com/thequint%2F2024-02%2F75c83d19-4cdc-4665-aac7-ebb92fb20636%2FUntitled_design__43_.jpg?auto=format%2Ccompress&fmt=webp&width=120&w=1200' className='rounded-lg md:p-0 p-2 md:h-96' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://www.shutterstock.com/image-vector/template-design-branding-medical-products-260nw-617864267.jpg' className='rounded-lg md:p-0 p-2 md:h-96' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://www.shutterstock.com/image-vector/template-design-branding-medical-products-260nw-621965219.jpg' className='rounded-lg md:p-0 p-2 md:h-96 md:pr-8' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <a>
                                <div>
                                    <img src='https://www.pharmavisualaidsprinting.com/pharma-medicine-poster/gif/Pharma-Medicine-Poster-Printing-Bihar.gif' className='rounded-lg md:p-0 p-2 md:h-96' alt=''></img>
                                </div>
                            </a>
                        </h3>
                    </div>
                </Slider>
            </div>
            <div className='md:mx-32 mb-12'>
                <div className='text-3xl font-bold m-10 '>Volini Pain Relief</div>
                <div>
                    <div className="slider-container mx-10">
                        <Slider {...settings1}>
                            <div>
                                <h3>
                                    <div className="card bg-base-100 w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/b979a56155544634a1336c53f89c7e90.jpg"
                                                alt=""
                                                className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>Volini Pain Relief Gel, 75gm</p>
                                            <h3 className='font-bold'>RS.225</h3>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100 md:w-64 md:h-96  w-88 h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn01.pharmeasy.in/dam/products_otc/I35531/volini-maxx-pain-relief-spray-bottle-of-55-g-6.1-1712726474.jpg"
                                            alt="Shoes"
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Maxx Pain Relief Spray, 25gm</p>
                                        <h3 className='font-bold'>RS.91</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://images.apollo247.in/pub/media/catalog/product/v/o/vol0213_1-may23_2_.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Pain Relief Spray, 100gm</p>
                                        <h3 className='font-bold'>RS.315</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn01.pharmeasy.in/dam/products_otc/I35531/volini-maxx-pain-relief-spray-bottle-of-55-g-6.1-1712726474.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Maxx Pain Relief Spray, 55gm</p>
                                        <h3 className='font-bold'>RS.200</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn01.pharmeasy.in/dam/products_otc/I37838/volini-maxx-pain-relief-gel-tube-of-30-g-6.1-1712725348.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Maxx Pain Relief Gel, 30gm</p>
                                        <h3 className='font-bold'>RS.150</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://images.apollo247.in/pub/media/catalog/product/v/o/vol0343_1_1_1_.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Maxx Pain Relief Gel, 4gm</p>
                                        <h3 className='font-bold'>RS.18</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.kauverymeds.com/uploads/product/main/1669874215_137244_0.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Maxx Pain Relief Spray, 60gm</p>
                                        <h3 className='font-bold'>RS.240</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.bigbasket.com/media/uploads/p/l/40290850_1-volini-pain-relief-spray-long-lasting.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Maxx Pain Relief Spray, 15gm</p>
                                        <h3 className='font-bold'>RS.70</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn.zeptonow.com/production///tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/15740c7b-3577-477c-ac19-481574394234.jpeg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>Volini Maxx Pain Relief Gel, 80gm</p>
                                        <h3 className='font-bold'>RS.300</h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>




            <div className='md:mx-32 mb-12'>
                <div className='text-3xl font-bold m-10 '>Shop By Category</div>
                <div>
                    <div className="slider-container mx-10">
                        <Slider {...settings1}>

                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.adzze.com/wp-content/uploads/2020/02/Medical-Advertising-Pharmacy-bags-Vaccine.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>

                                        <div className="card-actions">
                                            <button className="btn">Arogyasampatti Products</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://5.imimg.com/data5/UH/RN/OK/SELLER-3121225/fmcg-baby-care-products-under-ayurvedic-medicated-category.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Baby Product</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://images.apollo247.in/images/category/monsoon_brand_vicks.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Monsoon Essentials</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2508145/2023/5/31/1e1b780b-66b6-42a3-a08e-7a3256c6f4641685528431373-Indulekha-Bringha-Hair-Oil-100-ml-5081685528430928-1.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Personal Care</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.nowfoods.com/sites/default/files/styles/xxl_container_25/public/2021-11/Supplement-Catagory_Amino-Acids.jpg?itok=BNeoSRT6"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Nutritional Drinks</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container mx-10 mt-12">
                        <Slider {...settings1}>

                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://rukminim2.flixcart.com/image/850/1000/kwpam4w0/ayurvedic/n/t/z/skin-care-100-ayurvedic-capsule-for-spot-acne-removing-whitening-original-imag9bkjuhxmrskr.jpeg?q=90&crop=false"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Skin Care</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn01.pharmeasy.in/dam/products_otc/264323/b-protin-chocolate-nutrition-supplement-bottle-of-500-g-3-1669655066.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Protein Powders & Drinks</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://5.imimg.com/data5/MH/KW/KU/SELLER-1733081/antioxidants-multivitamin-multimineral-capsules.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Multivitamins</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://b-arm.com/wp-content/uploads/2023/01/10-strips-combo.png"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Glucometers & Test Strips</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.eetasia.com/wp-content/uploads/sites/2/2023/08/Macronix-9Aug23-3.jpg?w=740"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <button className="btn">Health Devices</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>


            <div className='md:mx-32 mb-12'>
                <img src="https://images.apollo247.in/pd-cms/cms/2023-09/Diag_Web_Desktop.jpg?tr=w-1276,q-100,f-webp,c-at_max" className='m-10 md:w-full w-80'></img>
            </div>



            <div className='md:mx-32 mb-12'>
            <div className='text-3xl font-bold m-10 '>One Touch Diabities Management</div>
                
                    <div className="slider-container mx-10">
                        <Slider {...settings1}>

                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://images-eu.ssl-images-amazon.com/images/I/614kGUJTB8L._AC_UL200_SR200,200_.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>One Touch Select Plus Simple Glucometers</p>
                                        <h3 className='font-bold'>RS.760<p className='font-light line-through'>(RS.1000)</p> <p className='text-green-400'>24% Off</p></h3>

                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn01.pharmeasy.in/dam/products_otc/N37764/onetouch-select-plus-test-strips-pack-of-50-strips-for-use-with-onetouch-select-plus-simple-3-1699443509.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>One Touch Select Plus Simple Test Strips, 50 Count</p>
                                        <h3 className='font-bold'>RS.1140<p className='font-light line-through'>(RS.1200)</p> <p className='text-green-400'>5% Off</p></h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn01.pharmeasy.in/dam/products_otc/N37764/onetouch-select-plus-test-strips-pack-of-50-strips-for-use-with-onetouch-select-plus-simple-3-1699443509.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>One Touch Select Plus Simple Test Strips, 25 Count</p>
                                        <h3 className='font-bold'>RS.576<p className='font-light line-through'>(RS.600)</p> <p className='text-green-400'>4% Off</p></h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://m.media-amazon.com/images/I/619YmtmJohL._AC_UF1000,1000_QL80_.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>One Touch Verio test strips, 50 count</p>
                                        <h3 className='font-bold'>RS.1140<p className='font-light line-through'>(RS.1200)</p> <p className='text-green-400'>5% Off</p></h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-96 md:w-64 md:h-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://ik.imagekit.io/wlfr/wellness/images/products/335076-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>One Touch Verio Flex Blood Glucose Monitors</p>
                                        <h3 className='font-bold'>RS.1105<p className='font-light line-through'>(RS.1300)</p> <p className='text-green-400'>15% Off</p></h3>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            
                        </Slider>
                    </div>
            </div>
           
            <Footer />
        </>
    )
}

export default BuyMedicine
