import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const missionPoints = [
  {
    title: "Global Accessibility",
    description:
      "Making financial services accessible to everyone, everywhere.",
    icon: "🌍",
  },
  {
    title: "Innovation",
    description: "Leveraging cutting-edge technology to revolutionize banking.",
    icon: "🚀",
  },
  {
    title: "Security",
    description: "Ensuring the highest standards of security and privacy.",
    icon: "🔒",
  },
  {
    title: "Transparency",
    description: "Building trust through complete transparency in operations.",
    icon: "✨",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "Pushing the boundaries of what's possible in banking technology.",
    icon: "💡",
  },
  {
    title: "Security",
    description:
      "Uncompromising commitment to protecting our customers' assets.",
    icon: "🛡️",
  },
  {
    title: "Accessibility",
    description: "Making advanced banking solutions available to everyone.",
    icon: "🌍",
  },
];

const About = () => {
  useDocumentTitle({
    title: 'About Us',
    description: 'Learn about BankXeno\'s mission to revolutionize global banking with cutting-edge technology, security, and innovation.'
  });

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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
              >
                About <span className="text-gradient">BankXeno</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto"
              >
                We're building the future of banking with innovation, security,
                and customer-centric solutions.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    Our <span className="text-gradient">Mission</span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 mb-4 md:mb-6">
                    To empower individuals and businesses with cutting-edge
                    financial solutions that are secure, accessible, and
                    innovative.
                  </p>
                  <p className="text-white/70 text-sm md:text-base">
                    We believe that everyone deserves access to modern banking
                    services that make managing money simple and secure.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="card hover-glow p-6 md:p-8"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Mission"
                    className="rounded-lg w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="card hover-glow p-6 md:p-8 order-2 lg:order-1"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Vision"
                    className="rounded-lg w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    Our <span className="text-gradient">Vision</span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 mb-4 md:mb-6">
                    To create a world where financial services are accessible,
                    transparent, and empowering for everyone.
                  </p>
                  <p className="text-white/70 text-sm md:text-base">
                    We envision a future where banking is seamless, secure, and
                    focused on enhancing people's lives through technology.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 relative ">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[2000px] mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-12 text-center"
              >
                Meet Our <span className="text-gradient">Team</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card hover-glow p-8"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                    <p className="text-gradient text-center mb-4">{member.role}</p>
                    <p className="text-white/80 text-center">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Values Section */}
        <section className="py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
              >
                Our <span className="text-gradient">Values</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card hover-glow p-6 md:p-8"
                  >
                    <div className="text-3xl md:text-4xl mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      {value.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>

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
                  Join Us on Our <span className="text-gradient">Journey</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto">
                  Be part of the future of banking. Register your interest
                  today.
                </p>
                <Link to="/register-interest" className="btn-primary">
                  Register Interest
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
