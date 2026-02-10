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
    <section className="mx-auto w-full max-w-7xl px-2 pt-4 sm:px-2 sm:pt-6 lg:px-3 lg:pt-8">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-gray-100 md:bg-transparent">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover"
          style={{
            backgroundImage: `url(${activeHero.image})`,
          }}
        />
        <div className="relative z-10 min-h-[350px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap items-center gap-2 sm:bottom-6 sm:gap-3 md:bottom-8">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  index === activeSlide 
                    ? 'bg-[#166534] w-8 sm:w-12 md:w-16' 
                    : 'bg-white/50 hover:bg-white/70 w-6 sm:w-8 md:w-12'
                }`}
                aria-label={`${slide.title} slaytını göster`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 px-2 py-1.5 text-lg font-bold text-gray-800 shadow-lg backdrop-blur transition hover:bg-white hover:scale-110 sm:left-2 sm:px-3 sm:py-2 sm:text-xl md:left-4 md:px-4 md:py-3 md:text-2xl"
          aria-label="Önceki slayt"
        >
          ‹
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % slideCount)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 px-2 py-1.5 text-lg font-bold text-gray-800 shadow-lg backdrop-blur transition hover:bg-white hover:scale-110 sm:right-2 sm:px-3 sm:py-2 sm:text-xl md:right-4 md:px-4 md:py-3 md:text-2xl"
          aria-label="Sonraki slayt"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default HeroSection

