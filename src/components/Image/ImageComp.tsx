import Image, { type StaticImageData, type ImageLoaderProps } from "next/image";

export interface IImageProps {
  imageSrc: string | StaticImageData;
  altText: string;
  imageWidth?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
}
const ImageComp = ({
  imageSrc,
  imageWidth,
  altText,
  className,
  fill,
  sizes,
}: IImageProps) => {
  const imageLoader = ({ src }: ImageLoaderProps) =>
    `http://image.tmdb.org/t/p/w${imageWidth}/${src}`;
  return (
    <Image
      loader={imageWidth ? imageLoader : undefined}
      alt={altText}
      src={imageSrc}
      className={className}
      fill={fill}
      sizes={sizes}
    />
  );
};

export default ImageComp;
