import React, { useState } from 'react';
import { GalleryImage } from '../types';
import { GALLERY_ITEMS } from '../data/gallery';
import { MapPin, Maximize2, Filter } from 'lucide-react';

interface GalleryViewProps {
  onSelectImage: (img: GalleryImage) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 space-y-16 bg-[#faf8f5] text-[#1c1a17]">
      
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#997449] font-semibold">
          <span>Visual Anthology</span>
          <span>·</span>
          <span>Fine Art Photography</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1c1a17] font-normal leading-tight text-balance">
          Moments of <br />
          <span className="italic text-[#997449] font-light">Unhurried Grace</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#5c564c] font-light leading-relaxed">
          A glimpse into the quiet magic of private African wilderness: from golden hour cheetah hunts in Mara North to lantern-lit bush dining and aerial sweeps over the Great Rift.
        </p>
      </section>

      {/* CATEGORY TABS / SEGMENTED CONTROL */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#e8e2d5]">
          
          <div className="flex items-center gap-2 text-xs text-[#736f67]">
            <Filter className="w-3.5 h-3.5 text-[#997449]" />
            <span>Select Perspective:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#f5f0e6] border border-[#e8e2d5]">
            {[
              { id: 'all', label: 'All Photographs' },
              { id: 'wildlife', label: 'Wildlife Encounters' },
              { id: 'camps', label: 'Lodges & Tented Camps' },
              { id: 'landscapes', label: 'Savannah & Skies' },
              { id: 'aerial', label: 'Aerial & Bush Aviation' },
              { id: 'unhurried', label: 'Unhurried Rituals' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1c1a17] text-[#faf8f5]'
                    : 'text-[#5c564c] hover:text-[#1c1a17]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* MASONRY / GRID OF PHOTOGRAPHY */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group cursor-pointer bg-white border border-[#e8e2d5] hover:border-[#c5a880] transition-all overflow-hidden flex flex-col shadow-sm"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#e8e2d5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#1c1a17]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <div className="text-[10px] uppercase tracking-wider text-[#997449] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif text-xl text-[#1c1a17] group-hover:text-[#997449] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5c564c] line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
