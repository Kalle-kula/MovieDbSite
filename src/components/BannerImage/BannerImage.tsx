import Image, { type ImageLoaderProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface IBannerImage {
  imageSrc: string;
  altText: string;
  className?: string;
}
const BannerImage = ({ imageSrc, altText, className }: IBannerImage) => {
  const imageLoader = ({ src }: ImageLoaderProps) => src;

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-transparent">
      {imageSrc && (
        <Image
          loader={imageLoader}
          alt={altText}
          src={imageSrc}
          fill
          priority
          unoptimized
          className={twMerge("object-cover", className)}
        />
      )}
    </div>
  );
};

export default BannerImage;
