import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, MessageSquare, Headphones, Zap, Target, Palette } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Voice Conversion',
      description: 'Transform your voice to sound like anyone else in real-time with our advanced voice conversion technology.',
      gradient: 'from-cyan-500 to-blue-500',
      delay: 0.1
    },
    {
      icon: MessageSquare,
      title: 'Text-to-Speech',
      description: 'Generate natural-sounding speech from text using custom or predefined voices.',
      gradient: 'from-blue-500 to-purple-500',
      delay: 0.2
    },
    {
      icon: Headphones,
      title: 'Voice Cloning',
      description: 'Create a digital copy of any voice with just a short audio sample and use it for various applications.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Experience voice transformation with minimal latency, perfect for live applications and streaming.',
      gradient: 'from-pink-500 to-red-500',
      delay: 0.4
    },
    {
      icon: Target,
      title: 'High-Quality Output',
      description: 'Enjoy crystal-clear audio with our advanced AI models trained on high-fidelity audio samples.',
      gradient: 'from-red-500 to-orange-500',
      delay: 0.5
    },
    {
      icon: Palette,
      title: 'Custom Voice Library',
      description: 'Build and manage your own library of voice profiles for consistent voice conversion experiences.',
      gradient: 'from-orange-500 to-yellow-500',
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Powerful Voice AI Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Zone Value VoiceAI offers cutting-edge voice transformation technology that enables you to clone,
            convert, and create voices with unprecedented accuracy and realism.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/20 dark:border-gray-700/20 backdrop-blur-sm">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6,182,212,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
