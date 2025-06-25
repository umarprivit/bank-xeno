import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    title: 'Email',
    description: 'Get in touch with our team',
    contact: 'contact@bankxeno.com',
    icon: '✉️',
  },
  {
    title: 'Phone',
    description: 'Speak with our support team',
    contact: '+1 (555) 123-4567',
    icon: '📞',
  },
  {
    title: 'Office',
    description: 'Visit our headquarters',
    contact: '123 Innovation Street, Tech City, TC 12345',
    icon: '🏢',
  },
];

const faqs = [
  {
    question: 'When will BankXeno launch?',
    answer: 'We are currently in the final stages of development and plan to launch in Q4 2024. Register your interest to be among the first to experience our services.',
  },
  {
    question: 'What services will BankXeno offer?',
    answer: 'BankXeno will offer a comprehensive suite of digital banking services including checking accounts, savings accounts, international transfers, and innovative financial tools powered by AI.',
  },
  {
    question: 'How secure will my money be?',
    answer: 'Security is our top priority. We implement state-of-the-art encryption, multi-factor authentication, and advanced fraud detection systems to ensure your funds and data are always protected.',
  },
];

export default function Contact() {
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
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-gradient-x"></div>
          
          <div className="text-center relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 mb-12 max-w-3xl mx-auto"
            >
              We're here to help. Choose your preferred way to reach us.
            </motion.p>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[2000px] mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover-glow p-8"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-gradient">
                    {method.title}
                  </h3>
                  <p className="text-white/80 mb-4">{method.description}</p>
                  <p className="text-white/70">{method.contact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Find answers to common questions about BankXeno.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[2000px] mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover-glow p-8"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gradient">
                    {faq.question}
                  </h3>
                  <p className="text-white/70">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-[2000px] mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join the <span className="text-gradient">Future</span>?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Register your interest today and be among the first to experience
                the next generation of banking.
              </p>
              <Link
                to="/register-interest"
                className="btn-primary"
              >
                Register Interest
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 