import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageCardProps = {
    alt: string;
    className?: string;
    src: StaticImageData;
}

export default function ImageCard({src, alt, className = ''}: ImageCardProps) {

    return <React.Fragment>

        <Image 
            src={src} alt={alt} 
            className={`w-full aspect-video object-cover bg-blackColor/40 rounded-md ${className}`} 
        />

    </React.Fragment>

}
