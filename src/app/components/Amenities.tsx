const amenities = [
    "WiFi", "24/7 Electricity", "Parking Space", "Working Desk", "Swimming Pool", "Breakfast"
  ];
  
  const Amenities = () => (
    <section className="p-8 bg-black">
      <h2 className="text-3xl font-bold text-center">General Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {amenities.map((amenity) => (
          <div key={amenity} className="text-center p-4 bg-white border rounded">
            {amenity}
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Amenities;
  