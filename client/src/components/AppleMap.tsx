import { useEffect, useRef } from 'react';
import { FaApple } from 'react-icons/fa';
import { Apple } from 'lucide-react'; // Keeping for other potential uses if needed, or remove if unused

interface AppleMapProps {
  className?: string;
}

export function AppleMap({ className }: AppleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    // @ts-ignore
    const L = window.L;
    if (!L) return;

    const coords: [number, number] = [8.520615589173042, 124.57632017158996];
    
    // Apple-style Light Theme (CartoDB Positron)
    leafletRef.current = L.map(mapRef.current, {
      center: coords,
      zoom: 16,
      zoomControl: false,
      attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20
    }).addTo(leafletRef.current);

    // Custom Prawn Pin
    const customIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="
          background-color: hsl(10, 85%, 55%);
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          border: 3px solid white;
        ">
          <div style="transform: rotate(45deg); color: white; font-weight: bold;">🍤</div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });

    L.marker(coords, { icon: customIcon }).addTo(leafletRef.current);
    
    // Add zoom control at bottom right
    L.control.zoom({
      position: 'bottomright'
    }).addTo(leafletRef.current);

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
      }
    };
  }, []);

  const openInAppleMaps = () => {
    window.open('https://maps.apple.com/?q=Prawn+House+Opol&ll=8.520615589173042,124.57632017158996&z=17', '_blank');
  };

  return (
    <div className={`relative group ${className}`}>
      <div ref={mapRef} className="w-full h-full" />
      
      {/* 3D Apple Maps Button Overlay */}
      <button 
        onClick={openInAppleMaps}
        className="absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border flex items-center gap-2 hover:bg-white transition-all transform hover:-translate-y-0.5"
      >
        <span className="text-sm font-bold text-foreground">Open in Apple Map</span>
        <div className="w-5 h-5 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-sm flex items-center justify-center text-white">
          <FaApple size={14} />
        </div>
      </button>

      {/* Info Overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-border max-w-[200px]">
        <h4 className="font-bold text-sm text-primary">Prawn House Opol</h4>
        <p className="text-[10px] text-muted-foreground mt-1">Experience the authentic taste of the bay</p>
      </div>
    </div>
  );
}
