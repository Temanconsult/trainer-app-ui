import React from 'react';
import avatar from '../../assets/images/avatar.png';

const AboutUs = () => {
  return (
    <div className="about-us h-auto p-2 pt-6 lg:px-24">
      <h1 className="text-2xl font-medium p-6 text-center">
        What they say about us
      </h1>
      <div className="about-us-cards__wrapper grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="about-us-card flex flex-col items-center bg-custom-aboutCard justify-between">
          <div className="p-6 flex flex-col items-center justify-around">
            <img src={avatar} alt="client testimony" />
            <div>
              <p className="text-3xl leading-3 pt-6 text-custom-primary">"</p>
              <span className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                erat felis. Sed odio lorem, facilisis
              </span>
            </div>
          </div>
          <div className="card-footer w-full bg-white text-center p-4 shadow-md">
            <h1 className="text-xl font-medium">Dayo Adebisi</h1>
            <span>Srum Master Student</span>
          </div>
        </div>

        <div className="about-us-card flex flex-col items-center bg-custom-aboutCard justify-between">
          <div className="p-6 flex flex-col items-center justify-around">
            <img src={avatar} alt="client testimony" />
            <div>
              <p className="text-3xl leading-3 pt-6 text-custom-primary">"</p>
              <span className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                erat felis. Sed odio lorem, facilisis
              </span>
            </div>
          </div>
          <div className="card-footer w-full bg-white text-center p-4 shadow-md">
            <h1 className="text-xl font-medium">Dayo Adebisi</h1>
            <span>Srum Master Student</span>
          </div>
        </div>
        <div className="about-us-card flex flex-col items-center bg-custom-aboutCard justify-between">
          <div className="p-6 flex flex-col items-center justify-around">
            <img src={avatar} alt="client testimony" />
            <div>
              <p className="text-3xl leading-3 pt-6 text-custom-primary">"</p>
              <span className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                erat felis. Sed odio lorem, facilisis
              </span>
            </div>
          </div>
          <div className="card-footer w-full bg-white text-center p-4 shadow-md">
            <h1 className="text-xl font-medium">Dayo Adebisi</h1>
            <span>Srum Master Student</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
