"use client"

import React from 'react';
import ReactPlayer from 'react-player';

type VideoCardProps = {
    src: string;
    className?: string;
}

export default function VideoCard({src, className}: VideoCardProps) {

    return <React.Fragment>

        <div className={`w-full rounded-xl aspect-video overflow-hidden ${className}`}>
            <ReactPlayer
                src={src} controls={true} width={'100%'} height={'100%'}
                className={`rounded-xl overflow-hidden shrink-0 h-auto`}
            />
        </div>

    </React.Fragment>

}
