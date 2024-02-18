import img from './assets/bg.jpg'

const Home = () => {
  return (
    <div style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0,0,0,0.7)),url(${img})`,
          }} className='h-dvh bg-cover'>

          <div className="container">
            <div className="flex justify-between items-center text-white py-3">
              <p className="text-3xl text-red-500 font-semibold">Tourist</p>
              <div className="space-x-20">
                <a href="" className="">Home</a>
                <a href="" className="">About Us</a>
                <a href="" className="">Services</a>
                <a href="" className="">Contact</a>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Home