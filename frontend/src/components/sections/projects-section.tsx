import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { projects } from '@/data/landing-content'
import { ProjectCard } from './project-card'

export function ProjectsSection() {
  const railRef = useRef<HTMLDivElement>(null)

  const moveRail = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * railRef.current.clientWidth * 0.82, behavior: 'smooth' })
  }

  return (
    <section id="proyectos" className="overflow-hidden bg-brand-mist px-6 py-24 sm:px-8 sm:py-32 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="type-label mb-5 border-l-[6px] border-brand-lime pl-4 text-brand-ink">Casos que hablan</p>
            <TypographyH2 className="text-[clamp(3.6rem,8vw,7.4rem)] uppercase">
              Proyectos
              <br />
              <span className="text-brand-ink/35">que hablan</span>
            </TypographyH2>
            <TypographyP className="mt-8 max-w-xl text-lg font-semibold text-brand-ink/70 sm:text-xl">
              Casos de éxito que transformaron industrias y equipos completos.
            </TypographyP>
          </div>
          <TooltipProvider>
            <div className="flex gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-lg"
                    aria-label="Proyecto anterior"
                    onClick={() => moveRail(-1)}
                    className="focus-ring rounded-full border-[3px] border-brand-ink bg-brand-paper hover:bg-brand-gold"
                  >
                    <ArrowLeft className="size-6" aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Anterior</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-lg"
                    aria-label="Proyecto siguiente"
                    onClick={() => moveRail(1)}
                    className="focus-ring rounded-full border-[3px] border-brand-ink bg-brand-paper hover:bg-brand-gold"
                  >
                    <ArrowRight className="size-6" aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Siguiente</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
      <div ref={railRef} className="no-scrollbar mx-auto flex w-full max-w-[1600px] snap-x gap-8 overflow-x-auto px-0 pb-8 sm:px-1 lg:px-0">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  )
}
