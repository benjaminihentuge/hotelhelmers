const rooms = [
  { type: "Queen", price: 35000, image: "/images/room.jpg", rating: 4.5 },
  { type: "King", price: 45000, image: "/images/room.jpg", rating: 4.0 },
  { type: "Standard", price: 25000, image: "/images/room.jpg", rating: 3.5 },
];

const FeaturedRooms = () => (
  <section className="p-8 bg-black">
    <h2 className="text-3xl font-bold text-center text-white">Featured Rooms</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {rooms.map((room) => (
        <div key={room.type} className="border rounded-3xl p-4">
          {/* Rating */}
          <div className="flex justify-center mb-2">
            <span className="text-yellow-400 text-sm">
              {"★".repeat(Math.floor(room.rating)) +
                (room.rating % 1 !== 0 ? "☆" : "")}
            </span>
          </div>
          
          {/* Centered Image */}
          <img
            src={room.image}
            alt={room.type}
            className="w-fit h-40 object-cover rounded-3xl mx-auto"
          />
          
          {/* Room Title */}
          <h3 className="text-xl font-bold mt-2 text-white text-center">
            {room.type}
          </h3>
          
          {/* Price */}
          <p className="text-lg font-semibold text-white text-center">
            ₦{room.price.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedRooms;
