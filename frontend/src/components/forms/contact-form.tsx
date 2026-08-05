import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Send } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface ContactFormValues {
  name: string
  email: string
  service: string
  message: string
}

type FormStatus = 'idle' | 'success' | 'error'

const initialValues: ContactFormValues = { name: '', email: '', service: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')

  const setValue = (key: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }))
    setStatus('idle')
    setError('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!values.name.trim() || !values.email.trim() || !values.service || !values.message.trim()) {
      setStatus('error')
      setError('Completa todos los campos para que podamos entender tu proyecto.')
      return
    }

    setStatus('success')
  }

  return (
    <div className="relative min-h-[560px]">
      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        <FieldGroup>
          <div className="grid gap-7 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="contact-name" className="type-label text-brand-ink">Nombre</FieldLabel>
              <Input
                id="contact-name"
                value={values.name}
                onChange={(event) => setValue('name', event.target.value)}
                placeholder="Tu nombre"
                required
                className="h-14 rounded-none border-[3px] border-brand-ink bg-white px-4 text-lg focus-visible:border-brand-purple focus-visible:ring-0"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="contact-email" className="type-label text-brand-ink">Email</FieldLabel>
              <Input
                id="contact-email"
                type="email"
                value={values.email}
                onChange={(event) => setValue('email', event.target.value)}
                placeholder="email@ejemplo.com"
                required
                className="h-14 rounded-none border-[3px] border-brand-ink bg-white px-4 text-lg focus-visible:border-brand-purple focus-visible:ring-0"
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="contact-service" className="type-label text-brand-ink">Tipo de proyecto</FieldLabel>
            <Select value={values.service} onValueChange={(value) => setValue('service', value)}>
              <SelectTrigger id="contact-service" className="h-14 w-full rounded-none border-[3px] border-brand-ink bg-white px-4 text-lg focus:ring-0">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent className="rounded-none border-[3px] border-brand-ink bg-white">
                <SelectItem value="web">Software Web</SelectItem>
                <SelectItem value="mobile">App Móvil</SelectItem>
                <SelectItem value="desktop">Aplicación Desktop</SelectItem>
                <SelectItem value="systems">Sistemas a medida</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-message" className="type-label text-brand-ink">Mensaje</FieldLabel>
            <Textarea
              id="contact-message"
              value={values.message}
              onChange={(event) => setValue('message', event.target.value)}
              placeholder="Cuéntanos brevemente qué tienes en mente..."
              required
              rows={5}
              className="resize-none rounded-none border-[3px] border-brand-ink bg-white px-4 py-3 text-lg focus-visible:border-brand-purple focus-visible:ring-0"
            />
            <FieldDescription className="text-brand-ink/55">Te responderemos con próximos pasos claros.</FieldDescription>
          </Field>
        </FieldGroup>
        {status === 'error' && <FieldError>{error}</FieldError>}
        <Button type="submit" size="lg" className="focus-ring h-16 w-full rounded-none border-[3px] border-brand-ink bg-brand-lime px-6 font-display text-xl font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:bg-brand-lime hover:shadow-none sm:text-2xl">
          Enviar mensaje
          <Send className="size-6" aria-hidden="true" />
        </Button>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center border-[3px] border-brand-ink bg-brand-lime p-8 text-center brutalist-shadow"
          >
            <div className="mb-7 flex size-24 items-center justify-center rounded-full border-[3px] border-brand-ink bg-white text-brand-purple">
              <Check className="size-12" aria-hidden="true" />
            </div>
            <h3 className="font-display text-4xl font-black uppercase tracking-[-0.04em]">¡Recibido!</h3>
            <p className="mt-4 max-w-md text-lg font-semibold text-brand-ink/75">Nos pondremos en contacto contigo en menos de 24 horas.</p>
            <Button type="button" variant="link" onClick={() => { setStatus('idle'); setValues(initialValues) }} className="mt-5 rounded-none font-display font-black uppercase text-brand-purple hover:text-brand-purple">
              Enviar otra idea
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Alert className="sr-only" role="status">
        <AlertTitle>Formulario de contacto</AlertTitle>
        <AlertDescription>El formulario se envía de forma local como demostración.</AlertDescription>
      </Alert>
    </div>
  )
}
