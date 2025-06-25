import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitRegisterInterest } from '../services/registerInterest';
import type { RegisterInterestData } from '../services/registerInterest';

export default function RegisterInterest() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await submitRegisterInterest(formData as RegisterInterestData);
      
      if (result.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
        });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full">
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-gradient-x"></div>
          
          <div className="w-full max-w-4xl mx-auto">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="card hover-glow p-6 md:p-8 max-w-2xl mx-auto"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
                  Register Your <span className="text-gradient">Interest</span>
                </h1>
                <p className="text-white/80 mb-6 md:mb-8 text-center text-sm md:text-base">
                  Be among the first to experience the future of banking.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-white/80 mb-2 text-sm md:text-base">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm md:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm md:text-base">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2 text-sm md:text-base">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm md:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                      <p className="text-red-400 text-sm md:text-base">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn-primary w-full text-sm md:text-base transition-opacity ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card hover-glow p-6 md:p-8 text-center max-w-2xl mx-auto"
              >
                <div className="text-4xl md:text-6xl mb-4 md:mb-6">🎉</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Thank You for Your <span className="text-gradient">Interest</span>!
                </h2>
                <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">
                  We've received your registration and will keep you updated on our progress.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-sm md:text-base"
                >
                  Register Another Interest
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
} 