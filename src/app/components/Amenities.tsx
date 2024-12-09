import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const amenities = [
  { name: "WiFi", icon: <FaWifi /> },
  { name: "24/7 Electricity", icon: <BsLightningCharge /> },
  { name: "Parking Space", icon: <FaCar /> },
  { name: "Work Desk", icon: <MdWork /> },
  { name: "Swimming Pool", icon: <FaSwimmingPool /> },
  { name: "Breakfast", icon: <FaUtensils /> },
];

const Amenities = () => (
  <section className="p-8 bg-black text-white">
    <h2 className="text-3xl font-bold text-center">General Amenities</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {amenities.map((amenity) => (
        <div
          key={amenity.name}
          className="flex flex-col items-center justify-center text-center p-4 bg-gray-800 text-white border rounded shadow"
        >
          <div className="text-4xl mb-2">{amenity.icon}</div>
          <p className="font-medium">{amenity.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Amenities;
