import { motion } from 'motion/react'

import { Card, CardContent } from '@/components/ui/card'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { services } from '@/data/landing-content'
import { cn } from '@/lib/utils'
import { ServiceCard } from './service-card'

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-brand-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="type-label mb-5 text-brand-purple">Nuestras capacidades</p>
            <TypographyH2 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] uppercase">
              Soluciones
              <br />
              <span className="text-brand-ink/65">que impactan</span>
            </TypographyH2>
          </motion.div>
          <Card className="max-w-md rotate-1 rounded-none border-[3px] border-brand-ink bg-brand-purple p-0 text-white brutalist-shadow">
            <CardContent className="p-7 sm:p-8">
              <TypographyP className="text-xl font-medium leading-snug">
                No somos solo programadores. Somos arquitectos de soluciones que entienden tus metas de negocio.
              </TypographyP>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <ServiceCard service={services[0]} className="md:col-span-7" />
          <ServiceCard service={services[1]} className="md:col-span-5" />
          <ServiceCard service={services[2]} className="md:col-span-5" />
          <ServiceCard service={services[3]} className="md:col-span-7" />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-ink/60">
          {['Estrategia', 'Diseño', 'Desarrollo', 'Crecimiento'].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn('border-b-2 px-2 pb-1', index === 0 ? 'border-brand-purple' : 'border-brand-ink/20')}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
