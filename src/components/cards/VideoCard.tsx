"use client"

import React from 'react';
import ReactPlayer from 'react-player';

type VideoCardProps = {
    src: string;
    playing?: boolean;
    className?: string;
    onPlay?: () => void;
}

export default function VideoCard({src, className, playing = false, onPlay}: VideoCardProps) {

    return <React.Fragment>

        <div className={`w-full rounded-xl aspect-video overflow-hidden bg-blackColor/30 ${className}`}>
            <ReactPlayer
                src={src} controls={true} width={'100%'} height={'100%'} playing={playing} onPlay={onPlay}
                className={`shrink-0 h-auto`}
            />
        </div>

    </React.Fragment>

}
