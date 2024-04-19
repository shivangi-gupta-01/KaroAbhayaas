import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Reviews, Students } from '../data/data';
import Footer from '../component/Footer';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full px-4">
      <div className="w-full mx-auto">
        <Slider {...settings} className="md:h-50">
          <div>
            <img className="w-full h-full md:h-[500px] object-cover  " src='https://media.istockphoto.com/id/1307257555/photo/teenager-girl-during-homeschooling.jpg?s=612x612&w=0&k=20&c=7jiJdzd27ee-rnnNg5ohuo4qM1H4dYGyH-3RKVlGbhQ=' alt="Slide 1" />
          </div>
          <div>
            <img className="w-full h-full md:h-[500px] object-cover  " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jBx4CBGs3YORwi-wEPZkAKG9izVCRRNZUv1WRsBozi6KPJl6ftW9GgpYOM6jgtJX9ng&usqp=CAU' alt="Slide 2" />
          </div>
          <div >
            <img className="w-full h-full md:h-[500px] object-cover " src='https://media.istockphoto.com/id/862661268/photo/the-student-life.jpg?s=1024x1024&w=is&k=20&c=pudj1YXDhrykmE1c01ny1yBmzt2oh5V8oKWkrniFEXU=' alt="Slide 3" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center mt-8">Top Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Students.map((item, id) => (
            <div key={id} className="bg-white rounded-lg shadow-lg p-4">
              <img src={item.img} alt={`Thumbnail ${id}`} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-2">"{item.des}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mt-8">REVIEWS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Reviews.map((item, id) => (
            <div key={id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">{item.name}</p>
              <p className="text-gray-600">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
