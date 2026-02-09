import { useEffect, useMemo, useState } from 'react'

function HeroSection({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slideCount = slides.length

  const activeHero = useMemo(() => slides[activeSlide], [activeSlide, slides])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount)
    }, 5200)
    return () => clearInterval(timer)
  }, [slideCount])

  return (
    <section className="mx-auto w-full max-w-7xl px-1.5 pt-8 sm:px-2 lg:px-3">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${activeHero.image})`,
          }}
        />
        <div className="relative z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[650px]">
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-wrap items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeSlide ? 'bg-[#166534] w-16' : 'bg-white/50 hover:bg-white/70 w-12'
                }`}
                aria-label={`${slide.title} slaytını göster`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 px-4 py-3 text-2xl font-bold text-gray-800 shadow-lg backdrop-blur transition hover:bg-white hover:scale-110"
          aria-label="Önceki slayt"
        >
          ‹
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % slideCount)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 px-4 py-3 text-2xl font-bold text-gray-800 shadow-lg backdrop-blur transition hover:bg-white hover:scale-110"
          aria-label="Sonraki slayt"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default HeroSection

