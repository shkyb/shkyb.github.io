import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  options,
  plugins,
  setApi,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...options,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const onSelect = React.useEffectEvent((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
  })

  React.useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("reInit", onSelect)
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  const value = React.useMemo(
    () => ({
      carouselRef,
      api,
      orientation,
      canScrollPrev,
      canScrollNext,
      selectedIndex,
      scrollSnaps,
      scrollPrev: () => api?.scrollPrev(),
      scrollNext: () => api?.scrollNext(),
      scrollTo: (index) => api?.scrollTo(index),
    }),
    [
      api,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      orientation,
      scrollSnaps,
      selectedIndex,
    ]
  )

  return (
    <CarouselContext.Provider value={value}>
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute z-10 rounded-full",
        orientation === "horizontal"
          ? "left-4 top-1/2 -translate-y-1/2"
          : "left-1/2 top-4 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute z-10 rounded-full",
        orientation === "horizontal"
          ? "right-4 top-1/2 -translate-y-1/2"
          : "bottom-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

function CarouselDots({ className, dotClassName, ...props }) {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel()

  if (!scrollSnaps.length) return null

  return (
    <div className={cn("mt-4 flex items-center justify-center gap-2", className)} {...props}>
      {scrollSnaps.map((_, index) => {
        const isActive = index === selectedIndex

        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2.5 w-2.5 rounded-full bg-foreground/20 transition-all hover:bg-foreground/40",
              isActive ? "w-8 bg-foreground/70" : null,
              dotClassName
            )}
          />
        )
      })}
    </div>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
