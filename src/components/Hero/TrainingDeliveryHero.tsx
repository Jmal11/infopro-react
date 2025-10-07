import { motion, AnimatePresence } from 'framer-motion';

const slide = {
  id: 1,
  image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/raining-delivery.webp",
  title: "Training Delivery",
  subtitle: "Providing impactful training experiences through our global network of certified trainers"
};

export function TrainingDeliveryHero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slide */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {slide.subtitle}
            </p>
            <button className="border border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors">
              CONNECT WITH US
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
