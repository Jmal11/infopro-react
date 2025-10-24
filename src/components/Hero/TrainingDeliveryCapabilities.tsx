export function TrainingDeliveryCapabilities() {
  return (
    <section className="container mx-auto px-4 py-16 bg-[#f6f6f6]">
      <h2 className="text-3xl font-bold mb-12 text-center">Global Training Delivery Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Trainer Network */}
        <div className="border border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold mb-6">Trainer Network</h3>
          <img
            src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/trainer-network.png"
            alt="Trainer Network"
            className="mb-6 w-full h-auto"
          />
        </div>

        {/* Training Expertise In */}
        <div className="border border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold mb-6">Training Expertise In</h3>
          <img
            src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/training-expertise-in.png"
            alt="Training Expertise In"
            className="mb-6 w-full h-auto"
          />
        </div>

        {/* Training Administration */}
        <div className="border border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold mb-6">Training Administration</h3>
          <img
            src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/training-administration.webp"
            alt="Training Administration"
            className="mb-6 w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
