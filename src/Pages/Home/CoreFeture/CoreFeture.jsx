import logo1 from '../../../assets/icons/check.svg'
import logo2 from '../../../assets/icons/deliveryt.svg'
import logo3 from '../../../assets/icons/group.svg'
import logo4 from '../../../assets/icons/person.svg'
import logo5 from '../../../assets/icons/60537-1024x1024.jpg'
import logo6 from '../../../assets/icons/Wrench.svg'

const CoreFeture = () => {

    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-xl font-medium text-orange-500">Core Features</h2>
                <h3 className="text-3xl font-bold">Why Choose Us</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            {/* features card */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 '>
                <div className="card card-compact  bg-base-100 border p-4">
                    <figure><img src={logo1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">100% Guranty</h2>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 border p-4">
                    <figure><img src={logo2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Timely Delivery</h2>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 border p-4">
                    <figure><img src={logo3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Expert Team</h2>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 border p-4">
                    <figure><img src={logo4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">24/7 Support</h2>
                    </div>
                </div>
                <div className="card card-compact h-[150px] bg-base-100 border p-4">
                    <figure><img className='mt-4'  src={logo5} alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="card-title text-center">Timely Delivery</h2>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 border p-4">
                    <figure><img src={logo6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Best Equipment</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoreFeture;