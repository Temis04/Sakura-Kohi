"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-3">
        <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
        Get in touch
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-bone mb-4">Contact</h1>
      <p className="font-body text-sm text-mist max-w-lg leading-relaxed mb-12">
        Questions about catering, private bookings, or the beans themselves —
        we read everything that comes through here.
      </p>

      {submitted ? (
        <div className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center animate-rise">
          <h2 className="font-display text-2xl text-bone mb-2">
            Thank you{name ? `, ${name}` : ""}.
          </h2>
          <p className="font-body text-sm text-mist">
            Your message has been noted. We reply within a couple of days,
            usually between opening and the lunch rush.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="font-body text-xs tracking-widest2 uppercase text-mist block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="focus-ring w-full rounded-md bg-surface border border-bone/12 px-4 py-3 text-sm text-bone placeholder:text-mist/50 focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-body text-xs tracking-widest2 uppercase text-mist block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="focus-ring w-full rounded-md bg-surface border border-bone/12 px-4 py-3 text-sm text-bone placeholder:text-mist/50 focus:border-gold transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-body text-xs tracking-widest2 uppercase text-mist block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="focus-ring w-full rounded-md bg-surface border border-bone/12 px-4 py-3 text-sm text-bone placeholder:text-mist/50 focus:border-gold transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="focus-ring w-full rounded-md bg-gold text-ink font-body font-semibold text-sm tracking-wide py-3.5 hover:bg-gold-bright hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Send message
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-gold mb-3">Flagship counter</h3>
            <p className="font-body text-sm text-mist leading-relaxed mb-8">
              47 Redchurch Street, Shoreditch<br />
              London, E2 7DJ
            </p>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-gold mb-3">Email</h3>
            <p className="font-body text-sm text-mist leading-relaxed mb-8">hello@sakurakohi.co.uk</p>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-gold mb-3">Phone</h3>
            <p className="font-body text-sm text-mist leading-relaxed">+44 20 7946 0958</p>
          </div>
        </div>
      )}
    </div>
  );
}
