import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Smile Transformations' | 'Our Office' | 'Advanced Clinical';
  image: string;
  description: string;
  aspect?: string;
  span?: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Smile Transformations' | 'Our Office' | 'Advanced Clinical'>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 7,
      title: "Full Arch Rehabilitation",
      category: "Smile Transformations",
      image: "https://i.ibb.co/XxWtcGZ5/image.jpg",
      description: "Complete dynamic arch rehabilitation restoring full occlusal balance, anatomical alignment, and a healthy patient bite.",
      aspect: "aspect-[4/3]",
      span: "col-span-1"
    },
    {
      id: 8,
      title: "Digital Guided Surgical Planning",
      category: "Advanced Clinical",
      image: "https://i.ibb.co/bMXGJd2s/image.jpg",
      description: "Three-dimensional computed guidance mapping and high-precision prosthetic surgical templates.",
      aspect: "aspect-[3/4]",
      span: "col-span-1 md:row-span-2"
    },
    {
      id: 9,
      title: "Welcoming Buckhead Lounge",
      category: "Our Office",
      image: "https://i.ibb.co/Mkr02XMr/image.jpg",
      description: "Our elegant, serene Buckhead-inspired reception area designed to make you feel comfortable and right at home.",
      aspect: "aspect-[4/3]",
      span: "col-span-1"
    },
    {
      id: 10,
      title: "Artisanal Crown Design Studio",
      category: "Our Office",
      image: "https://i.ibb.co/3m0tmRcL/image.jpg",
      description: "Bespoke dental prosthetics engineered and custom-shaded by master dental craftspeople on-site in Buckhead.",
      aspect: "aspect-[16/9]",
      span: "col-span-1 md:col-span-2"
    },
    {
      id: 11,
      title: "Virtual Smile Architecture",
      category: "Advanced Clinical",
      image: "https://i.ibb.co/r2FKZW4V/image.jpg",
      description: "Precision digital mapping of oral structures to design a balanced, natural smile with microscopic detail.",
      aspect: "aspect-[4/3]",
      span: "col-span-1"
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const categories: ('All' | 'Smile Transformations' | 'Our Office' | 'Advanced Clinical')[] = [
    'All', 'Smile Transformations', 'Our Office', 'Advanced Clinical'
  ];

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const activeItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <section id="gallery" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Our Work & Facility</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">Clinic Gallery</h3>
            <p className="text-lg text-charcoal max-w-2xl mx-auto font-light">
              Explore our state-of-the-art Buckhead practice, advanced clinical technology, and life-changing smile transformations.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-500/20 scale-[1.02]'
                  : 'bg-white text-navy-900 border border-gray-200 hover:border-gold-500/50 hover:bg-champagne-light/25'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:border-gold-500/20 transition-all duration-300 cursor-pointer flex flex-col ${item.span || 'col-span-1'}`}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className={`w-full overflow-hidden bg-gray-100 relative ${item.aspect || 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                    {item.category}
                  </span>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-charcoal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4 md:p-8 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-6 right-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-10"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-10"
                title="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-10"
                title="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                className="max-w-4xl w-full flex flex-col bg-navy-900/40 rounded-2xl overflow-hidden border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-[16/10] w-full bg-black relative">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8 bg-navy-900 text-left border-t border-white/10">
                  <span className="text-xs font-bold tracking-wider text-gold-500 uppercase block mb-1">
                    {activeItem.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                    {activeItem.title}
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
