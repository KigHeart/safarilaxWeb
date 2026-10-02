import React, { useState } from 'react';
import { GalleryImage } from '../types';
import { GALLERY_ITEMS } from '../data/gallery';
import { MapPin, Maximize2, Filter, Eye } from 'lucide-react';

interface GalleryViewProps {
  onSelectImage: (img: GalleryImage) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 space-y-16">
      
      {/* HEADER SECTION */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
          <span>Visual Anthology</span>
          <span>·</span>
          <span>Fine Art Photography</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
          Moments of <br />
          <span className="italic text-[#c5a880] font-light">Unhurried Grace</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#ded7c8] font-light leading-relaxed">
          A glimpse into the quiet magic of private African wilderness: from golden hour cheetah hunts in Mara North to lantern-lit bush dining and aerial sweeps over the Great Rift.
        </p>
      </section>

      {/* CATEGORY TABS / SEGMENTED CONTROL */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#211f1a]">
          
          <div className="flex items-center gap-2 text-xs text-[#8e8a80]">
            <Filter className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Select Perspective:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141311] border border-[#24221d]">
            {[
              { id: 'all', label: 'All Photographs' },
              { id: 'wildlife', label: 'Wildlife Encounters' },
              { id: 'camps', label: 'Lodges & Tented Camps' },
              { id: 'landscapes', label: 'Savannah & Skies' },
              { id: 'aerial', label: 'Aerial & Heli-Safari' },
              { id: 'unhurried', label: 'Unhurried Rituals' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#c5a880] text-[#0e0d0b]'
                    : 'text-[#8e8a80] hover:text-[#FAF8F5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onSelectImage(img)}
              className="group relative cursor-pointer bg-[#141311] border border-[#24221d] overflow-hidden hover:border-[#c5a880]/60 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* View expand indicator */}
                <div className="absolute top-4 right-4 p-2 bg-[#0e0d0b]/70 border border-[#2e2a22] text-[#ded7c8] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#c5a880]" />
                </div>

                {/* Details caption */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-[#c5a880] flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{img.location}</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#FAF8F5] leading-snug">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#a8a396] line-clamp-1 italic font-serif">
                    “{img.caption}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#8e8a80]">
          Click any photograph to view high-resolution fullscreen contemplation mode with complete field notes.
        </div>
      </section>

    </div>
  );
};
