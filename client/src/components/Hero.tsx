import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Ocean view restaurant dining */}
        <img
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80"
          alt="Dining by the sea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-white/90 font-medium tracking-wide text-sm uppercase">
              Rated 4.4/5 by our guests
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-display leading-tight drop-shadow-xl"
          >
            Taste the Ocean <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
              By the Bay
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Welcome to Prawn House. Experience fresh Filipino seafood favorites 
            alongside savory pork and beef dishes, all while enjoying stunning 
            views of Macajalar Bay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              onClick={scrollToMenu}
              className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg font-semibold shadow-xl shadow-primary/30 transition-all hover:scale-105"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-white/10 hover:bg-white hover:text-primary text-white backdrop-blur-sm px-8 h-14 text-lg font-semibold transition-all"
            >
              Find Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
