import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ZoomIn, X, Play, Pause } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Smile Transformations' | 'Our Office' | 'Advanced Clinical';
  image: string;
  description: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Smile Transformations' | 'Our Office' | 'Advanced Clinical'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const galleryItems: GalleryItem[] = [
    {
      id: 11,
      title: "Full Arch Rehabilitation",
      category: "Smile Transformations",
      image: "https://i.ibb.co/pBc0SJ03/image.jpg",
      description: "Meticulous clinical procedure restoring a patient's natural bite balance, anatomical alignment, and full aesthetic harmony."
    },
    {
      id: 9,
      title: "Welcoming Buckhead Lounge",
      category: "Our Office",
      image: "https://i.ibb.co/SwS8vPXG/image.jpg",
      description: "Our elegant, calming reception area designed to make you feel relaxed, comfortable, and right at home."
    },
    {
      id: 7,
      title: "Drs. Blackburn II & III",
      category: "Our Office",
      image: "https://i.ibb.co/s9LZjsbS/image.jpg",
      description: "Our leading prosthodontic specialists inside their Buckhead consultation office, representing over 50 years of combined specialized expertise."
    },
    {
      id: 8,
      title: "Buckhead Clinical Entrance",
      category: "Our Office",
      image: "https://i.ibb.co/4CsP8Dc/image.jpg",
      description: "Our modern clinical practice situated in the heart of Buckhead, Atlanta, featuring state-of-the-art diagnostic facilities."
    },
    {
      id: 10,
      title: "Our Clinical Team",
      category: "Advanced Clinical",
      image: "https://i.ibb.co/HTvW8DH4/image.jpg",
      description: "Our highly specialized dental assistants, hygienists, and coordinators who work closely with the doctors to deliver a premium patient experience."
    }
  ];

  // Filter items based on selected category
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Keep index within bounds if filtered list changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, filteredItems.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const categories: ('All' | 'Smile Transformations' | 'Our Office' | 'Advanced Clinical')[] = [
    'All', 'Smile Transformations', 'Our Office', 'Advanced Clinical'
  ];

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
              }}
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

        {/* Premium Slideshow Frame */}
        {filteredItems.length > 0 && currentItem && (
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-500">
              
              {/* Slide Content Layout (Split Image & Details for outstanding presentation) */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Visual Area */}
                <div className="lg:col-span-8 relative h-[320px] sm:h-[450px] md:h-[520px] bg-gray-950 overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentItem.id}
                      src={currentItem.image}
                      alt={currentItem.title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-contain image-render-sharp"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>

                  {/* Zoom Indicator/Button */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute bottom-4 right-4 bg-navy-900/80 backdrop-blur-md hover:bg-gold-500 text-white p-3 rounded-full border border-white/10 transition-all duration-300 shadow-lg z-10 flex items-center justify-center"
                    title="Zoom Image"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>

                  {/* Auto-play indicator badge */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md hover:bg-navy-900 text-white px-3 py-1.5 rounded-full border border-white/10 transition-all duration-300 shadow-md z-10 flex items-center gap-2 text-xs font-semibold"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-gold-500" /> : <Play className="w-3.5 h-3.5 text-white" />}
                    {isPlaying ? 'Autoplay Active' : 'Autoplay'}
                  </button>
                </div>

                {/* Details Panel */}
                <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-gray-100 text-left">
                  <div>
                    <span className="inline-block bg-champagne text-navy-900 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 border border-gold-500/15">
                      {currentItem.category}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h4 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 mb-4 leading-tight">
                          {currentItem.title}
                        </h4>
                        <p className="text-charcoal leading-relaxed text-sm sm:text-base font-light">
                          {currentItem.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Manual Arrow Controls and Slide Count */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">
                      Slide {currentIndex + 1} of {filteredItems.length}
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePrev}
                        className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gold-500 hover:text-white border border-gray-200 hover:border-gold-500 flex items-center justify-center text-navy-900 transition-all duration-300"
                        title="Previous Image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gold-500 hover:text-white border border-gray-200 hover:border-gold-500 flex items-center justify-center text-navy-900 transition-all duration-300"
                        title="Next Image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Thumbnail Nav Bar (Click to instantly skip and preview) */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-gray-100 flex-shrink-0 ${
                    currentIndex === idx 
                      ? 'border-gold-500 scale-105 shadow-md shadow-gold-500/10' 
                      : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover image-render-sharp"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

          </div>
        )}

        {/* Lightbox / Zoom Dialog */}
        <AnimatePresence>
          {isLightboxOpen && currentItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4 md:p-8 backdrop-blur-md"
              onClick={() => setIsLightboxOpen(false)}
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
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
                <div className="aspect-[16/10] w-full bg-black relative flex items-center justify-center">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-w-full max-h-[70vh] object-contain image-render-sharp"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8 bg-navy-900 text-left border-t border-white/10">
                  <span className="text-xs font-bold tracking-wider text-gold-500 uppercase block mb-1">
                    {currentItem.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                    {currentItem.title}
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {currentItem.description}
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
