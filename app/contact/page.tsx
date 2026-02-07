'use client'

import React from "react"

import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    company: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      company: '',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90">
            Get in touch with PT Amal Ichwan Arindo for partnership inquiries, employment questions, or general information.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Office Location</h3>
              <p className="text-foreground/70">Jakarta, Indonesia</p>
              <p className="text-foreground/70 text-sm mt-2">Professional office in Indonesia's capital for direct access to recruitment and placement operations.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-foreground/70">
                <a href="mailto:info@ptamalindah.com" className="hover:text-accent transition">
                  info@ptamalindah.com
                </a>
              </p>
              <p className="text-foreground/70 text-sm mt-2">Send detailed inquiries and we'll respond within 24 business hours.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-foreground/70">Office Hours: Available for business inquiries</p>
              <p className="text-foreground/70 text-sm mt-2">Contact us via email for fastest response or to arrange a call.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-secondary p-8 rounded border border-border">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded border border-green-300">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-sm">We will review your inquiry and respond within 24 business hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+62 (optional)"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your company name (optional)"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="employer">Employer Partnership</option>
                  <option value="job-seeker">Job Seeker Question</option>
                  <option value="verification">Verification Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>

              <p className="text-xs text-foreground/60 text-center">
                * Required fields. We take your privacy seriously and will respond to your inquiry promptly.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'How do I verify that PT Amal Ichwan Arindo is a legitimate P3MI agency?',
                answer:
                  'You can verify our P3MI license and BP2MI registration through the Indonesian government. Contact BP2MI or the Indonesian embassy in your country for verification. Our agency information is available in official government registries.',
              },
              {
                question: 'How long does the recruitment process typically take?',
                answer:
                  'The recruitment timeline varies depending on position requirements and candidate availability. Generally, from initial inquiry to worker deployment takes 2-4 months. We work to expedite the process while maintaining quality standards.',
              },
              {
                question: 'What are the fees for recruitment services?',
                answer:
                  'Fees vary based on position type, location, and specific requirements. For employers, we provide transparent pricing upon inquiry. For workers, legitimate agencies do not charge upfront fees—any fees are deducted from wages after employment begins, as per contract terms.',
              },
              {
                question: 'Can job seekers apply directly for positions?',
                answer:
                  'PT Amal Ichwan Arindo is not a job portal. We primarily work with international employers to recruit and place workers. Job seekers in Indonesia should contact licensed P3MI agencies directly through official channels.',
              },
              {
                question: 'What countries do you place workers in?',
                answer:
                  'We have active placement relationships with Japan, Middle East countries (UAE, Saudi Arabia, and others), and Southeast Asia. We continue to expand partnerships with other markets.',
              },
              {
                question: 'What support do you provide after a worker is deployed?',
                answer:
                  'We provide ongoing support including communication facilitation, issue resolution, and assistance with any workplace concerns. Both employers and workers can contact us with questions or problems.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-border">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-foreground/70 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Privacy & Data Protection</h2>
          <p className="text-foreground/70 mb-4">
            We respect your privacy. Information submitted through this form will be handled confidentially and used only to respond to your inquiry. We do not share your information with third parties without consent.
          </p>
          <p className="text-foreground/70 text-sm">
            For more information about how we handle personal data, please contact us directly.
          </p>
        </div>
      </section>
    </>
  )
}
