import React from "react";
import destination1 from "../assets/kilima jaro.jpg";
import destination2 from "../assets/lake nakuru.jpg";
import destination3 from "../assets/savannah.jpg";
import destination4 from "../assets/mombasa.jpg"
import destination5 from "../assets/mt kenya.jpg"
import destination6 from "../assets/tsavo.jpg"

const images = [destination1, destination2, destination3, destination4, destination5, destination6];

const ImageGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-6">
      {images.map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt={`Destination ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
