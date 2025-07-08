import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Type, Upload, Play, Pause, Volume2, Download } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voice' | 'text'>('voice');
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = [
    { id: 'voice', label: 'Voice Conversion', icon: Mic },
    { id: 'text', label: 'Text to Speech', icon: Type },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Try ZV VoiceAI In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience our powerful voice transformation technology right in your browser. 
            No installation required.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'voice' | 'text')}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Demo Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-200/20 dark:border-gray-700/20 p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {activeTab === 'voice' ? (
              <motion.div
                key="voice"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Voice Recording */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Voice Conversion
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Record your voice and convert it to sound like someone else in real-time
                    </p>

                    <div className="space-y-4">
                      <div className="flex space-x-4">
                        <button className="flex-1 px-4 py-3 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 transition-colors">
                          Voice Recording
                        </button>
                        <button className="flex-1 px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                          Upload Image
                        </button>
                      </div>

                      <div className="text-center py-12">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                          Record your voice
                        </h4>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative inline-block"
                        >
                          <button
                            onClick={() => setIsRecording(!isRecording)}
                            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isRecording
                                ? 'bg-red-500 shadow-lg shadow-red-500/25'
                                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                          >
                            <Mic className={`w-8 h-8 ${isRecording ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                          </button>
                          {isRecording && (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="absolute inset-0 rounded-full border-4 border-red-500/30"
                            />
                          )}
                        </motion.div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="block mx-auto mt-8 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                          <Mic className="w-4 h-4 mr-2 inline" />
                          Start Recording
                        </motion.button>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                          For best results, use a quality microphone in a quiet environment
                        </p>

                        <button className="flex items-center justify-center mx-auto mt-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                          <Upload className="w-4 h-4 mr-2" />
                          Or upload audio file
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Upload Image */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors">
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Upload Target Voice
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Upload an audio sample of the voice you want to clone
                        </p>
                        <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors">
                          Choose File
                        </button>
                      </div>
                    </div>

                    {/* Audio Player */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Generated Audio
                      </h4>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5 ml-1" />
                          )}
                        </button>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-cyan-500 h-2 rounded-full w-1/3" />
                        </div>
                        <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <Download className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-cyan-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    Text to Speech
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                    Generate natural-sounding speech from text using custom or predefined voices
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Enter your text
                      </label>
                      <textarea
                        className="w-full h-32 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                        placeholder="Type the text you want to convert to speech..."
                        defaultValue="Hello! This is a demonstration of ZV VoiceAI's text-to-speech technology. You can type any text here and convert it to natural-sounding speech."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Voice Selection
                        </label>
                        <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                          <option>Sarah - Professional Female</option>
                          <option>David - Professional Male</option>
                          <option>Emma - Friendly Female</option>
                          <option>James - Deep Male</option>
                          <option>Custom Voice Clone</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Speed & Tone
                        </label>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <input
                              type="range"
                              min="0.5"
                              max="2"
                              step="0.1"
                              defaultValue="1"
                              className="w-full"
                            />
                            <span className="text-xs text-gray-500 dark:text-gray-400">Speed</span>
                          </div>
                          <div className="flex-1">
                            <input
                              type="range"
                              min="-10"
                              max="10"
                              step="1"
                              defaultValue="0"
                              className="w-full"
                            />
                            <span className="text-xs text-gray-500 dark:text-gray-400">Pitch</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center"
                      >
                        <Type className="w-5 h-5 mr-2" />
                        Generate Speech
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;