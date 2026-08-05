import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Project } from '@/data/landing-content'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="h-full min-w-[min(88vw,920px)] snap-start"
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <Card className="grid h-full min-h-[460px] overflow-hidden rounded-none border-[3px] border-brand-ink bg-white p-0 shadow-[8px_8px_0_var(--brand-purple)] md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[260px] overflow-hidden border-b-[3px] border-brand-ink md:border-r-[3px] md:border-b-0">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full min-h-[260px] w-full object-cover grayscale-[0.2] transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute left-5 top-5 bg-brand-lime px-3 py-2 font-display text-xs font-black uppercase tracking-[0.12em] text-brand-ink">
            Caso destacado
          </span>
        </div>
        <CardContent className="flex flex-col justify-between p-8 sm:p-10">
          <div>
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="type-label mb-3 text-brand-purple">Proyecto NoRest</p>
                <h3 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl">
                  {project.title}
                </h3>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                aria-label={`Ver detalles de ${project.title}`}
                className="focus-ring shrink-0 rounded-full border-[3px] border-brand-ink bg-brand-paper hover:bg-brand-gold"
              >
                <ArrowUpRight className="size-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mb-8 flex items-end gap-4 border-y-[3px] border-brand-ink py-5">
              <span className="font-display text-5xl font-black tracking-[-0.06em] text-brand-purple sm:text-6xl">
                {project.metric}
              </span>
              <span className="pb-2 font-semibold uppercase tracking-[0.12em] text-brand-ink/60">
                {project.metricLabel}
              </span>
            </div>
            <p className="font-display text-xl font-semibold italic leading-relaxed sm:text-2xl">
              “{project.quote}”
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <Avatar size="lg" className="border-[3px] border-brand-ink">
              <AvatarFallback className="bg-brand-gold font-display font-black text-brand-ink">
                {project.client
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-display font-black">{project.client}</p>
              <p className="text-sm text-brand-ink/60">{project.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
