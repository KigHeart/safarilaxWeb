import React, { useEffect, useState } from 'react';
import { GalleryImage } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2, Minimize2 } from 'lucide-react';

interface GalleryModalProps {
  image: GalleryImage | null;
  allImages: GalleryImage[];
  onClose: () => void;
  onSelectImage: (img: GalleryImage) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  image,
  allImages,
  onClose,
  onSelectImage
}) => {
  const [fullscreenContemplation, setFullscreenContemplation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!image) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image]);

  if (!image) return null;

  const currentIndex = allImages.findIndex((i) => i.id === image.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    onSelectImage(allImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    onSelectImage(allImages[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Top Controls */}
      <div className={`absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10 transition-opacity ${fullscreenContemplation ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        <div className="flex items-center gap-2 text-xs text-[#8e8a80]">
          <span className="font-mono text-[#c5a880]">{currentIndex + 1}</span>
          <span>/</span>
          <span className="font-mono">{allImages.length}</span>
          <span className="mx-2">·</span>
          <span className="capitalize">{image.category}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setFullscreenContemplation(!fullscreenContemplation)}
            className="p-2.5 text-[#ded7c8] hover:text-[#FAF8F5] bg-black/40 border border-[#2e2a22] transition-colors"
            title={fullscreenContemplation ? "Show details" : "Fullscreen contemplation"}
          >
            {fullscreenContemplation ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          
          <button
            onClick={onClose}
            className="p-2.5 text-[#ded7c8] hover:text-[#FAF8F5] bg-black/40 border border-[#2e2a22] transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-[#ded7c8] hover:text-[#FAF8F5] bg-black/50 hover:bg-black/80 border border-[#2e2a22] transition-colors z-10 hidden sm:block focus:outline-none"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-[#ded7c8] hover:text-[#FAF8F5] bg-black/50 hover:bg-black/80 border border-[#2e2a22] transition-colors z-10 hidden sm:block focus:outline-none"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div className="max-w-6xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <img
          src={image.image}
          alt={image.title}
          className="max-h-[72vh] max-w-full object-contain border border-[#24221d] shadow-2xl"
          referrerPolicy="no-referrer"
        />

        {/* Caption & Location Card */}
        {!fullscreenContemplation && (
          <div className="mt-4 text-center max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <h3 className="font-serif text-lg sm:text-xl text-[#FAF8F5]">
              {image.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#ded7c8] mt-1 italic font-serif">
              “{image.caption}”
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#c5a880]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{image.location}</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
