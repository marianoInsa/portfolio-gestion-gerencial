'use client';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, className = '' }: ZoomableImageProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-nebula bg-dark-matter/50">
      <img
        src={src}
        alt={alt}
        className={`h-auto w-full object-contain ${className}`}
      />
    </div>
  );
}
