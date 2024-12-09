const rooms = [
    { type: "Queen", price: 35000, image: "/images/room.jpg" },
    { type: "King", price: 45000, image: "/images/room.jpg" },
    { type: "Standard", price: 25000, image: "/images/room.jpg" },
  ];
  
  const FeaturedRooms = () => (
    <section className="p-8 bg-black">
      <h2 className="text-3xl font-bold text-center">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  {rooms.map((room) => (
    <div key={room.type} className="border rounded-3xl p-4">
      {/* Centered Image */}
      <img
        src={room.image}
        alt={room.type}
        className="w-fit h-40 object-cover rounded-3xl mx-auto"
      />
      <h3 className="text-xl font-bold mt-2 text-rose-white text-center">{room.type}</h3>
      <p className="text-lg font-semibold text-rose-white  text-center">₦{room.price.toLocaleString()}</p>
    </div>
  ))}
</div>
    </section>
  );
  
  export default FeaturedRooms;
  