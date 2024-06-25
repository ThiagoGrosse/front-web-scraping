'use client';

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useEffect } from "react";

type Props = {
    urlImg: string;
    setImageOpen: (value: boolean) => void;
    nextImage: () => void;
    prevImage: () => void;
}
export const ImagesFullScreen = ({ urlImg, setImageOpen, nextImage, prevImage }: Props) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed max-h-screen inset-0 flex items-center justify-center bg-black/80 text-white h-full w-full">
            <div className="overflow-auto h-full w-full mx-auto my-5">
                <button
                    type="button"
                    className="absolute top-1 right-2 text-3xl p-2"
                    onClick={() => setImageOpen(false)}
                >x</button>
                <div className="w-full mx-auto" >
                    <img src={urlImg} alt="Imagem full screen" className="w-full p-10 object-cover" />
                </div>
            </div>
            <div className="fixed top-[50%] w-full">
                <div className="w-full flex justify-between items-center pl-1 pr-1 sm:pl-6 sm:pr-6">
                    <button type="button" onClick={prevImage}><ArrowBigLeft size={40} /></button>
                    <button type="button" onClick={nextImage}><ArrowBigRight size={40} /></button>
                </div>
            </div>
        </div>
    )
}