import heroImage01 from "../assets/images/hero-img01.png";
import heroImage02 from "../assets/images/hero-img02.png";
import heroImage03 from "../assets/images/hero-img03.png";

const Home = () => {
  return (
    <section className="2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* left hero sectioin */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] mb-4 text-gray-900 font-extrabold md:text-[60px] md:leading-[70px]">
                We help patients live a healthy, longer life.
              </h1>
              <p className="text-gray-600 leading-7 text-lg mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus autem corrupti harum voluptatum quisquam iure quod
                atque a. Totam, blanditiis.
              </p>

              <button className="btn1">Requist an Appointment &rarr;</button>
            </div>

            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:terxt-[44px] lg:leading-[54px] font-bold text-gray-900">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellow-400 rounded-full block -mt-[18px]"></span>
                <p className="text-gray-600 mt-3 text-lg">
                  Years of Experience
                </p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:terxt-[44px] lg:leading-[54px] font-bold text-gray-900">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-purple-400 rounded-full block -mt-[18px]"></span>
                <p className="text-gray-600 mt-3 text-lg">Clinic Location</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:terxt-[44px] lg:leading-[54px] font-bold text-gray-900">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-blue-400 rounded-full block -mt-[18px]"></span>
                <p className="text-gray-600 mt-3 text-lg">
                  Patient Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* right hero sectioin */}

          <div className="flex gap-[30px] justify-end">
            <div>
              <img className="w-full" src={heroImage01} alt="" />
            </div>
            <div className="mt-[30px]">
              <img className="w-full mb-[30px]" src={heroImage02} alt="" />
              <img className="w-full" src={heroImage03} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
