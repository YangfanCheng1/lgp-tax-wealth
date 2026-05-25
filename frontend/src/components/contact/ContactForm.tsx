'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FieldError {
  name?: string
  email?: string
  message?: string
}

function validate(name: string, email: string, message: string): FieldError {
  const errors: FieldError = {}
  if (!name.trim() || name.trim().length < 2) errors.name = 'Please enter your full name (at least 2 characters).'
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.'
  if (!message.trim() || message.trim().length < 10) errors.message = 'Your message must be at least 10 characters.'
  return errors
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [serverError, setServerError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldError>({})

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const errors = validate(name, email, message)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setState('submitting')

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
        }
      )
      if (!res.ok) throw new Error(`Server returned ${res.status}`)
      setState('success')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'An unexpected error occurred.')
      setState('error')
    }
  }

  function handleReset() {
    setName('')
    setEmail('')
    setMessage('')
    setState('idle')
    setServerError('')
    setFieldErrors({})
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (state === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-card p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-navy mb-3">
          Thank you, {name.split(' ')[0]}!
        </h2>
        <p className="font-body text-gray-600 mb-7 leading-relaxed">
          Your message has been received. A member of our team will be in touch within{' '}
          <span className="font-semibold text-navy">1–2 business days</span>.
        </p>
        <button onClick={handleReset} className="btn-outline-navy">
          Send Another Message
        </button>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
      <h2 className="font-display text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
      <p className="font-body text-sm text-gray-500 mb-7">
        All fields are required. We typically respond within one business day.
      </p>

      {/* Server error banner */}
      {state === 'error' && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <p className="font-body text-sm font-semibold text-red-700">Something went wrong</p>
            <p className="font-body text-sm text-red-600 mt-0.5">{serverError} — please try again or email us directly.</p>
          </div>
          <button
            onClick={() => setState('idle')}
            className="text-red-400 hover:text-red-600 transition-colors"
            aria-label="Dismiss error"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setFieldErrors((p) => ({ ...p, name: undefined })) }}
            placeholder="Jane Smith"
            autoComplete="name"
            className={`form-input ${fieldErrors.name ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : ''}`}
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-xs text-red-600 font-body">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: undefined })) }}
            placeholder="jane@example.com"
            autoComplete="email"
            className={`form-input ${fieldErrors.email ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : ''}`}
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-xs text-red-600 font-body">{fieldErrors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => { setMessage(e.target.value); setFieldErrors((p) => ({ ...p, message: undefined })) }}
            placeholder="Tell us how we can help you..."
            className={`form-input resize-none ${fieldErrors.message ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : ''}`}
          />
          {fieldErrors.message && (
            <p className="mt-1.5 text-xs text-red-600 font-body">{fieldErrors.message}</p>
          )}
          <p className="mt-1 text-xs text-gray-400 font-body text-right">
            {message.length} / 2000
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="btn-gold w-full disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {state === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  )
}
