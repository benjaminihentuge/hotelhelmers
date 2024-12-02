const rooms = [
    { type: "Queen", price: 50000, image: "/images/room.jpg" },
    { type: "King", price: 50000, image: "/images/room.jpg" },
    { type: "Standard", price: 50000, image: "/images/room.jpg" },
  ];
  
  const FeaturedRooms = () => (
    <section className="p-8 bg-black">
      <h2 className="text-3xl font-bold text-center">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {rooms.map((room) => (
          <div key={room.type} className="border rounded p-4">
            <img src={room.image} alt={room.type} className="w-fit h-40 object-cover rounded" />
            <h3 className="text-xl font-bold mt-2">{room.type}</h3>
            <p className="text-lg font-semibold">₦{room.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default FeaturedRooms;
  