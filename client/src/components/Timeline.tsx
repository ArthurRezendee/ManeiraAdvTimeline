"use client"

import { useState } from "react"

interface TimelineItem {
  year: string
  title: string
  description: string
  details: string
  image: string
}

interface Props {
  items: TimelineItem[]
}

function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full">
      <img
        src={images[index]}
        alt=""
        className="rounded-xl w-full h-[320px] object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}

export default function Timeline({ items }: Props) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {items.map((item, i) => {
          const reverse = i % 2 !== 0

          return (
            <div
              key={item.year}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <h2 className="text-5xl font-bold opacity-20">
                  {item.year}
                </h2>
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="opacity-70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex-1">
                <Carousel images={[item.image]} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}