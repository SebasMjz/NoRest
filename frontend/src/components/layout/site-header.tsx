import { useState } from 'react'
import { Menu, ArrowUpRight } from 'lucide-react'

import { LogoMark } from '@/components/brand/logo-mark'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'FAQ', href: '#faq' },
]

interface SiteHeaderProps {
  onContactClick?: () => void
}

export function SiteHeader({ onContactClick }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)

  const handleContactClick = () => {
    setOpen(false)
    onContactClick?.()
  }

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-brand-ink bg-brand-paper/95 backdrop-blur-sm">
      <nav className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10" aria-label="Navegación principal">
        <a href="#inicio" className="focus-ring shrink-0" aria-label="Ir al inicio de NoRest">
          <LogoMark className="border-[3px] border-brand-ink p-1" imageClassName="h-10 sm:h-11" />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring border-b-[3px] border-transparent px-1 py-2 font-display text-sm font-black uppercase tracking-[0.12em] hover:border-brand-purple hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="focus-ring hidden h-12 rounded-none border-[3px] border-brand-ink bg-brand-gold px-5 font-display font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:bg-brand-gold hover:shadow-none sm:inline-flex"
          >
            <a href="#contacto" onClick={handleContactClick}>
              Hablemos
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="focus-ring rounded-none border-[3px] border-brand-ink bg-brand-paper lg:hidden"
                aria-label="Abrir menú de navegación"
              >
                <Menu className="size-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,360px)] border-l-[3px] border-brand-ink bg-brand-purple p-0 text-white">
              <SheetHeader className="border-b-[3px] border-brand-ink p-6 text-left">
                <SheetTitle className="font-display text-2xl font-black uppercase text-white">Menú</SheetTitle>
                <SheetDescription className="text-sm text-purple-100">Explora las soluciones de NoRest.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-6">
                {links.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      className={cn('focus-ring border-b border-white/20 px-2 py-4 font-display text-2xl font-black uppercase hover:bg-white/10')}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto p-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="focus-ring h-14 w-full rounded-none border-[3px] border-brand-ink bg-brand-gold font-display font-black uppercase text-brand-ink hover:bg-brand-gold"
                    onClick={handleContactClick}
                  >
                    <a href="#contacto">Hablemos</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
