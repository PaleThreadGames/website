import { useState, FormEvent } from 'react';
import { ContactFormData } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-slate-800/50 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cool-teal-400 to-cool-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 text-center mb-12">
            Have a question or want to collaborate? We'd love to hear from you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-cool-blue-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cool-teal-400 focus:ring-2 focus:ring-cool-teal-400/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-cool-blue-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cool-teal-400 focus:ring-2 focus:ring-cool-teal-400/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900 border border-cool-blue-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cool-teal-400 focus:ring-2 focus:ring-cool-teal-400/20 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-cool-teal-500/20 border border-cool-teal-500/30 rounded-lg text-cool-teal-300">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                Something went wrong. Please try again later.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-cool-blue-600 to-cool-teal-600 hover:from-cool-blue-500 hover:to-cool-teal-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-center text-slate-400 mb-4">Or reach us directly:</p>
            <div className="flex justify-center">
              <a
                href="mailto:kyle@palethread.games"
                className="text-cool-teal-400 hover:text-cool-teal-300 transition-colors font-medium"
              >
                kyle@palethread.games
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

