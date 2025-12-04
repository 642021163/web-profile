'use client'
import { useState, useEffect } from "react"
import Image from "next/image"



export default function AutoImageSlider({ images }) {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 3000) // เปลี่ยนทุก 3 วินาที

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div className="w-full h-48 rounded-xl mb-4 overflow-hidden shadow-md relative">
            <Image
                src={images[current]}
                alt="Project Image"
                fill
                className="object-cover transition-opacity duration-500"
            />
        </div>
    )
}
