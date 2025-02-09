// components/Destinations.tsx
import React from "react";


// Import destination images
import MaasaiMara from "../assets/masai mara.jpg";
import LakeNakuru from "../assets/lake-nakuru.jpg";
import DianiBeach from "../assets/diani-beach.jpg";
import AmboseliNationalPark from "../assets/amboseli.jpg";
import TsavoNationalPark from "../assets/tsavo-national-park.jpg";
import NairobiNationalPark from "../assets/nairobi-national-park.jpg";
import LamuIsland from "../assets/lamu-island.jpg";
import MountKenya from "../assets/mount-kenya.jpg";
import Malindi from "../assets/malindi.jpg";
import WatamuBeach from "../assets/watamu-beach.jpg";
import HellsGate from "../assets/hell`s-gate.jpg";
import LakeVictoria from "../assets/lake-victoria.jpg";
import LakeNaivasha from "../assets/lake-naivasha.jpg";
import MountLongonot from "../assets/mount-logonot.jpg";
import MasaiMaraGameReserve from "../assets/masai-mara-game-reserve.jpg";
import SamburuNationalReserve from "../assets/samburu-national-reseve.jpg";
import ShimbaHills from "../assets/shimba-hills.jpg";
import OlPejetaConservancy from "../assets/ol-pageta-consavancy.jpg";
import ChuluHills from "../assets/chulu-hills.jpg";
import TheGiraffeCenter from "../assets/the-giraffe-center.jpg";
import KakamegaForest from "../assets/kakamega-forest.jpg";
import Kisumu from "../assets/kisumu.jpg";
import Nyeri from "../assets/nyeri.jpg";
import KiambethuTeaFarm from "../assets/kiambethu-farm.jpg";
import TaitaHills from "../assets/taita-hills.jpg";
import NandiHills from "../assets/nandi-hills.jpg";
import MeruNationalPark from "../assets/meru-national-park.jpg";
import AbadareNationalPark from "../assets/abadare-national-park.jpg";
import amboseli from "../assets/ambseli.jpg";
import SoiPort from "../assets/sio-port.jpg";
import ngongHills from "../assets/ngong-hill.jpg";
import lakeBogoria from "../assets/lake-bogoria.jpg";
import kakamegaForest from "../assets/kakamega-forest.jpg";
import mombasa from "../assets/mombasa.jpg";
import FortJesus from "../assets/fort-jesus.jpg";
import mpungutiMarine from "../assets/mpuguti-marine.jpg";
import gediRuins from "../assets/gedi-ruins.jpg";
import LakeTurkana from "../assets/lake-turkana.jpg";
import baringo from "../assets/lake-baringo.jpg";
import kitale from "../assets/kitale.jpg";

// Sample destination data
const destinations = [
  { name: "Maasai Mara", image: MaasaiMara, description: "Experience the wild beauty of Maasai Mara with a safari." },
  { name: "Nakuru Lake", image: LakeNakuru, description: "Explore the stunning views and wildlife around Lake Nakuru." },
  { name: "Diani Beach", image: DianiBeach, description: "Relax at the beautiful white sand beaches of Diani." },
  { name: "Amboseli National Park", image: AmboseliNationalPark, description: "Get a glimpse of elephants with Mount Kilimanjaro in the backdrop." },
  { name: "Tsavo National Park", image: TsavoNationalPark, description: "Visit one of the largest game reserves, home to diverse wildlife." },
  { name: "Nairobi National Park", image: NairobiNationalPark, description: "Enjoy a safari with Nairobi’s skyline in the background." },
  { name: "Lamu Island", image: LamuIsland, description: "Step back in time and explore the historic streets of Lamu." },
  { name: "Mount Kenya", image: MountKenya, description: "Climb Africa’s second-highest mountain for an unforgettable adventure." },
  { name: "Malindi", image: Malindi, description: "Enjoy the coastal beauty and rich history of Malindi." },
  { name: "Watamu Beach", image: WatamuBeach, description: "Snorkel and dive in Watamu’s clear turquoise waters." },
  { name: "Hell's Gate National Park", image: HellsGate, description: "Hike through dramatic landscapes and geothermal features." },
  { name: "Lake Victoria", image: LakeVictoria, description: "Explore the largest lake in Africa and its islands." },
  { name: "Lake Naivasha", image: LakeNaivasha, description: "Take a boat ride on Lake Naivasha and spot wildlife." },
  { name: "Mount Longonot", image: MountLongonot, description: "Hike to the top of Mount Longonot for spectacular views." },
  { name: "Masai Mara Game Reserve", image: MasaiMaraGameReserve, description: "Witness the Great Migration and abundant wildlife in Masai Mara." },
  { name: "Samburu National Reserve", image: SamburuNationalReserve, description: "See unique wildlife in the arid but beautiful Samburu region." },
  { name: "Shimba Hills", image: ShimbaHills, description: "Explore this lush, tropical reserve and see elephants and sable antelope." },
  { name: "Ol Pejeta Conservancy", image: OlPejetaConservancy, description: "Visit the conservancy that’s home to rhinos and endangered chimpanzees." },
  { name: "Chyulu Hills", image: ChuluHills, description: "Hike through scenic hills with views of Mount Kilimanjaro." },
  { name: "The Giraffe Centre", image: TheGiraffeCenter, description: "Meet and feed endangered giraffes in Nairobi." },
  { name: "Kakamega Forest", image: KakamegaForest, description: "Explore Kenya’s last tropical rainforest and its birdlife." },
  { name: "Kisumu", image: Kisumu, description: "Discover Kisumu’s rich culture and its location on Lake Victoria." },
  { name: "Nyeri", image: Nyeri, description: "Visit Nyeri for a peaceful retreat with views of Mount Kenya." },
  { name: "Kiambethu Tea Farm", image: KiambethuTeaFarm, description: "Learn about Kenya’s tea industry while enjoying beautiful views." },
  { name: "Taita Hills", image: TaitaHills, description: "Enjoy panoramic views and abundant bird species." },
  { name: "Nandi Hills", image: NandiHills, description: "Escape to the cool highlands and enjoy serene walks and views." },
  { name: "Meru National Park", image: MeruNationalPark, description: "Explore a remote park known for its diverse flora and fauna." },
  { name: "Aberdare National Park", image: AbadareNationalPark, description: "Visit the lush, mountainous park, famous for its waterfalls and wildlife." },
  { name: "Lake Turkana", image: LakeTurkana, description: "Explore Kenya’s desert lake and its unique culture and wildlife." },
  { name: "Fort Jesus", image: FortJesus, description: "Step back in time at this historical fortress in Mombasa." },
  { name: "Amboseli", image: amboseli, description: "Admire elephants in the shadow of Mount Kilimanjaro." },
  { name: "Sio Port", image: SoiPort, description: "Explore the untouched beauty and tranquility of Sio Port." },
  { name: "Ngong Hills", image: ngongHills, description: "Trek the rolling hills with panoramic views of Nairobi and the Rift Valley." },
  { name: "Kekamega Forest", image: kakamegaForest, description: "Experience nature walks and zip-lining in Kereita Forest." },
  { name: "Lake Bogoria", image: lakeBogoria, description: "Visit this shallow, alkaline lake known for its flamingos and hot springs." },
  { name: "Mombasa Old Town", image: mombasa, description: "Explore the rich Swahili culture and architecture of Mombasa Old Town." },
  { name: "Fort Jesus", image: FortJesus, description: "Step back in time at this historical fortress in Mombasa." },
  { name: "Kisite-Mpunguti Marine National Park", image: mpungutiMarine, description: "Snorkel and dive in this beautiful marine park with coral reefs." },
  { name: "Gedi Ruins", image:gediRuins, description: "Discover the ruins of an ancient Swahili town near Watamu." },
  // { name: "Rusinga Island", image: , description: "Relax on the serene island surrounded by the stunning Lake Victoria." },
  { name: "Lake Turkana", image: LakeTurkana, description: "Explore Kenya’s desert lake and its unique culture and wildlife." },
  { name: "Baringo", image:baringo, description: "Experience the tranquility and natural beauty around Lake Baringo." },
  { name: "Kitale", image: kitale, description: "Explore the agricultural hub and visit the nearby Cherangani Hills." }
];
const Destinations: React.FC = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 lg:grid-cols-4 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover"
              width={500}
              height={280}
            />
            <div className="absolute inset-0 bg-blue bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-bold text-gray-200">{destination.name}</h2>
              <p className="text-sm">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Destinations;
  