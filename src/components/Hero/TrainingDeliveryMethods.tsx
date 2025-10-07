export function TrainingDeliveryMethods() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Flexible Delivery Methods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg" 
            alt="In-person training" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">In-Person Training</h3>
              <p>Engaging face-to-face sessions for maximum interaction and impact</p>
            </div>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
            alt="Virtual training" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">Virtual Training</h3>
              <p>Interactive online sessions with real-time collaboration tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
