import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import AutoScroll from "embla-carousel-auto-scroll"

import { Figure } from "@/components/case/blocks/Figure"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

/**
 * FigureCarousel
 *
 * items: Array<Figure props>
 *
 * Extra props:
 * - options?: Embla options
 * - plugins?: Embla plugin instances
 * - autoplay?: boolean | object
 * - autoScroll?: boolean | object
 * - showArrows?: boolean
 * - showDots?: boolean
 * - itemClassName?: string
 * - figureClassName?: string
 * - dotsClassName?: string
 * - dotClassName?: string
 * - dotsProgressDuration?: number
 * - previousClassName?: string
 * - nextClassName?: string
 * - setApi?: (api) => void
 */
export function FigureCarousel({
  items = [],
  options,
  plugins = [],
  autoplay = false,
  autoScroll = false,
  showArrows = true,
  showDots = true,
  className,
  contentClassName,
  itemClassName,
  figureClassName,
  dotsClassName,
  dotClassName,
  dotsProgressDuration,
  previousClassName,
  nextClassName,
  setApi,
}) {
  const emblaPlugins = React.useMemo(() => {
    const resolvedPlugins = []

    if (autoplay) {
      resolvedPlugins.push(Autoplay(autoplay === true ? {} : autoplay))
    }

    if (autoScroll) {
      resolvedPlugins.push(AutoScroll(autoScroll === true ? {} : autoScroll))
    }

    return [...resolvedPlugins, ...plugins]
  }, [autoplay, autoScroll, plugins])

  if (!items?.length) return null

  return (
    <Carousel
      className={className}
      options={options}
      plugins={emblaPlugins}
      setApi={setApi}
    >
      <CarouselContent className={contentClassName}>
        {items.map((item, index) => {
          const { className: itemFigureClassName, ...figureProps } = item

          return (
            <CarouselItem key={item.src ?? index} className={itemClassName}>
              <Figure
                {...figureProps}
                className={cn("h-full", figureClassName, itemFigureClassName)}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>

      {showArrows ? (
        <>
          <CarouselPrevious className={previousClassName} />
          <CarouselNext className={nextClassName} />
        </>
      ) : null}

      {showDots ? (
        <CarouselDots
          className={dotsClassName}
          dotClassName={dotClassName}
          progressDuration={dotsProgressDuration}
        />
      ) : null}
    </Carousel>
  )
}
