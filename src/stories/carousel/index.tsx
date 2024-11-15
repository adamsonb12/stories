import { useState } from "react";

export const ImageCarousel = ({ images }: { images: { src: string, alt: string }[] }) => {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(Math.floor(images.length / 2));

    const handlePrevious = () => {
        if (activeImageIndex === 0) {
            return;
        }

        setActiveImageIndex(activeImageIndex - 1);
    }

    const handleNext = () => {
        if (activeImageIndex === images.length - 1) {
            return;
        }

        setActiveImageIndex(activeImageIndex + 1);
    }

    return (
        <div className="flex flex-col gap-4">
            <h1>Image Carousel</h1>
            <div className="w-full min-h-[400px] flex justify-center items-center">
                <img src={images[activeImageIndex].src} alt={images[activeImageIndex].alt} className="w-full h-full object-cover max-w-[600px] max-h-[400px]" />
            </div>
            <div className="flex gap-4 justify-between">
                <button onClick={handlePrevious} disabled={activeImageIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={activeImageIndex === images.length - 1}>Next</button>
            </div>
        </div>
  );
}
