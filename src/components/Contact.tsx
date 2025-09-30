
import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
          x: -40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }
      if (infoRef.current) {
        gsap.from(infoRef.current, {
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
          },
          x: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = (state: FormState) => {
    const nextErrors: Partial<FormState> = {};
    if (!state.name.trim()) nextErrors.name = 'Please introduce yourself.';
    if (!state.email.trim()) {
      nextErrors.email = 'An email helps me respond quickly.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(state.email)) {
      nextErrors.email = 'That email doesn’t look quite right.';
    }
    if (!state.message.trim()) nextErrors.message = 'Share a few project details or goals.';
    return nextErrors;
  };

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');

    setTimeout(() => {
      setFormStatus('success');
      setFormData(initialState);
      setTimeout(() => setFormStatus('idle'), 2500);
    }, 1200);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] right-[-5%] w-[420px] h-[420px] rounded-full blur-3xl bg-[#6c5ce7]/25" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[480px] h-[480px] rounded-full blur-3xl bg-[#00b894]/20" />
        <div className="noise-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="section-intro text-center space-y-4">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/15 bg-white/10 text-xs uppercase tracking-[0.35em] text-white/70">
            <Sparkles size={16} className="text-[#6c5ce7]" />
            Let’s Create Something Amazing
          </span>
          <h2 className="text-white">Tell me about the product you’re dreaming up.</h2>
          <p>
            Whether you need strategic guidance, a hands-on build partner, or a long-term collaborator—drop a note and I’ll reply within a day.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <form ref={formRef} onSubmit={handleSubmit} className="eb-card p-8 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2 text-sm text-white/70">
                Name
                <input
                  value={formData.name}
                  onChange={handleChange('name')}
                  placeholder="Your full name"
                  className={`rounded-xl bg-[#0f1a2a] border ${errors.name ? 'border-red-400/70' : 'border-white/15'} px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]/60`}
                />
                {errors.name && (
                  <span className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/70">
                Email
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  placeholder="hello@company.com"
                  className={`rounded-xl bg-[#0f1a2a] border ${errors.email ? 'border-red-400/70' : 'border-white/15'} px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00b894]/60`}
                />
                {errors.email && (
                  <span className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </span>
                )}
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-white/70">
              Project Vision
              <textarea
                value={formData.message}
                onChange={handleChange('message')}
                rows={5}
                placeholder="Share goals, features, timelines, or collaborators."
                className={`rounded-2xl bg-[#0f1a2a] border ${errors.message ? 'border-red-400/70' : 'border-white/15'} px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]/60 resize-none`}
              />
              {errors.message && (
                <span className="text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message}
                </span>
              )}
            </label>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="primary-button w-full py-3.5 text-sm font-semibold tracking-[0.35em] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formStatus === 'loading' ? 'Sending...' : formStatus === 'success' ? 'Message Sent' : 'Submit' }
            </button>

            {formStatus === 'success' && (
              <div className="flex items-center gap-2 text-sm text-[#00b894]">
                <CheckCircle size={16} />
                Thanks for reaching out! I’ll reply shortly.
              </div>
            )}
            {formStatus === 'error' && Object.keys(errors).length > 0 && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} />
                A few fields still need attention.
              </div>
            )}
          </form>

          <aside ref={infoRef} className="space-y-6">
            <div className="eb-card p-8 space-y-6">
              <div>
                <h3 className="text-white text-lg font-semibold">Direct Contact</h3>
                <p className="text-white/60 text-sm mt-3">
                  Prefer to skip the form? Reach out through any channel and I’ll follow up fast.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:samarthghag9@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80 hover:text-white hover:border-white/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-[#00b894]/20 flex items-center justify-center text-[#00d1a4]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em]">Email</p>
                    <p className="text-white text-sm">samarthghag9@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/samarth-ghag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80 hover:text-white hover:border-white/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center text-[#9f95ff]">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em]">LinkedIn</p>
                    <p className="text-white text-sm">/samarth-ghag</p>
                  </div>
                </a>
                <a
                  href="https://github.com/samarthghag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80 hover:text-white hover:border-white/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em]">GitHub</p>
                    <p className="text-white text-sm">@samarthghag</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="eb-card p-7">
              <p className="text-white/60 text-sm leading-relaxed">
                “I blends aesthetics with engineering discipline. Our releases feel elevated and the experience stays calm—even under pressure.”
              </p>
              <p className="mt-5 text-white text-xs uppercase tracking-[0.35em]">Client feedback 2025</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
