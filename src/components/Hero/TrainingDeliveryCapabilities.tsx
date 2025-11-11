export function TrainingDeliveryCapabilities() {
  return (
    <section className="w-full bg-[#f6f6f6] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Global Training Delivery Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Trainer Network */}
          <div className="border border-purple-200 rounded-lg bg-white">
            <h3 className="font-semibold p-6 pb-0">Trainer Network</h3>
            <img
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/trainer-network.png"
              alt="Trainer Network"
              className="w-full h-auto"
            />
          </div>

          {/* Training Expertise In */}
          <div className="border border-purple-200 rounded-lg bg-white">
            <h3 className="font-semibold p-6 pb-0">Training Expertise In</h3>
            <img
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/training-expertise-in.png"
              alt="Training Expertise In"
              className="w-full h-auto"
            />
          </div>

          {/* Training Administration */}
          <div className="border border-purple-200 rounded-lg bg-white">
            <h3 className="font-semibold p-6 pb-0">Training Administration</h3>
            <img
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/training-administration.webp"
              alt="Training Administration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}