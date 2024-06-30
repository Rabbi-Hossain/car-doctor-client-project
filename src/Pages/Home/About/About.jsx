import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.png'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative '>
                <img src={person} className="w-4/5 rounded-lg  shadow-2xl" />
                <img src={parts} className='w-1/2 absolute border-8 border-white right-5 top-1/2' alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className="text-xl font-semibold text-orange-600">About Us</h1>
                    <p className="py-6 text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</p>
                    <p className='text-2xl'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='text-2xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;