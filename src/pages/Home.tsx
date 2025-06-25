import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Global Access',
    description: 'Access your funds from anywhere in the world with our secure global network.',
    icon: '🌍',
  },
  {
    title: 'Smart Security',
    description: 'Advanced encryption and biometric authentication to keep your money safe.',
    icon: '🔒',
  },
  {
    title: 'Instant Transfers',
    description: 'Send money instantly to anyone, anywhere, with zero hidden fees.',
    icon: '⚡',
  },
];

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date('2026-12-31T23:59:59');
    
    const updateTimer = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    // Update immediately
    updateTimer();
    
    // Update every second
    const timer = setInterval(updateTimer, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-xs md:max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card hover-glow p-3 md:p-4 text-center"
        >
          <div className="text-gradient text-2xl md:text-4xl font-bold mb-1 md:mb-2">{value}</div>
          <div className="text-white/60 text-xs md:text-sm uppercase">{unit}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
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
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-gradient-x"></div>
          
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              >
                The Future of
                <span className="text-gradient"> Global Banking</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
              >
                Experience seamless, secure, and innovative banking solutions
                designed for the modern world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="text-white/80 mb-6 md:mb-8">
                  <p className="text-base md:text-lg mb-4">Launching in</p>
                  <CountdownTimer />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <Link
                    to="/register-interest"
                    className="btn-primary text-center"
                  >
                    Register Interest
                  </Link>
                  <Link
                    to="/about"
                    className="btn-secondary text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
              >
                Why Choose <span className="text-gradient">BankXeno</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card hover-glow p-6 md:p-8"
                  >
                    <div className="text-3xl md:text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/80 text-sm md:text-base">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Ready to Experience the <span className="text-gradient">Future</span>?
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto"
                >
                  Join us in revolutionizing the way you bank. Register your interest today.
                </p>
                <Link
                  to="/register-interest"
                  className="btn-primary"
                >
                  Register Interest
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}