"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage(
      currentImage === images.length - 1
        ? 0
        : currentImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage(
      currentImage === 0
        ? images.length - 1
        : currentImage - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, currentImage]);

  return (
    <div>
      {/* Foto Utama */}
      <Image
        src={images[currentImage]}
        alt={title}
        width={700}
        height={450}
        onClick={() => setIsOpen(true)}
        className="rounded-xl shadow-lg w-full cursor-pointer hover:scale-[1.02] transition"
      />

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300"
        >
          ←
        </button>

        <button
          onClick={nextImage}
          className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300"
        >
          →
        </button>
      </div>

      {/* Thumbnail */}
      <div className="flex gap-3 mt-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            width={100}
            height={70}
            onClick={() => setCurrentImage(index)}
            className={`cursor-pointer rounded border-2 transition ${
              currentImage === index
                ? "border-sky-500 scale-110"
                : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Tombol Tutup */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            ✕
          </button>

          {/* Tombol Kiri */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-5 text-white text-5xl"
          >
            ←
          </button>

          {/* Gambar */}
          <Image
            src={images[currentImage]}
            alt={title}
            width={1200}
            height={800}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] w-auto object-contain"
          />

          {/* Tombol Kanan */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-5 text-white text-5xl"
          >
            →
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 text-white text-lg">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}