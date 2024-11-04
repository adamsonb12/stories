import Image from "next/image";

export const OptimizedBackgroundImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <Image
      src={src}
      fill
      className="absolute w-full h-full object-cover object-center z-0"
      alt={alt}
    />
  );
};
