import quote from '../../../assets/icons/quote.svg'
import images from '../../../assets/icons/images.jpg'
const Testimonials = () => {

    return (
        <div className="mt-10 mb-20">
            <div className="text-center ">
                <h2 className="text-xl font-medium text-orange-500">Testimonial</h2>
                <h3 className="text-3xl font-bold">What Customer Says</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            {/* customer review */}

            <div className="mt-10 flex gap-4">
                {/* first testimonials */}
                <div className="border w-1/2 p-4 space-y-5">
                    <div className="flex items-center">
                        <div className="w-20 rounded-full">
                            <img className="rounded-full h-20" alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-3xl font-medium">Awlad Hossain</h2>
                            <p>Businessman</p>
                        </div>
                        <img className='w-[14px] lg:ml-20 ' src={quote} alt="" />
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    {/* rating */}
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                {/* second testimonials */}
                <div className="border w-1/2 p-4 space-y-5">
                    <div className="flex items-center">
                        <div className="w-20  rounded-full">
                            <img className="rounded-full h-20"  alt="Tailwind CSS Navbar component" src={images} />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-3xl font-medium">Awlad Hossain</h2>
                            <p>Businessman</p>
                        </div>
                        <img className='w-[14px] lg:ml-20 ' src={quote} alt="" />
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    {/* rating */}
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;