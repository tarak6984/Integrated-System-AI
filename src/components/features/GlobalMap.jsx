import { motion } from 'framer-motion';
import { Globe, Building2, Users } from 'lucide-react';
import Card from '../ui/Card';

const GlobalMap = () => {
  const locations = [
    {
      name: 'United Kingdom HQ',
      type: 'Headquarters',
      icon: Building2,
      color: 'from-blue-500 to-blue-700',
      stats: { label: 'Strategic Vision', value: '100%' },
      description: 'Global strategy & client relations'
    },
    {
      name: 'Bangladesh Hub',
      type: 'Operations Center',
      icon: Users,
      color: 'from-green-500 to-green-700',
      stats: { label: 'Engineering Team', value: '50+' },
      description: 'R&D, Development & Operations'
    }
  ];

  const globalStats = [
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Active Projects', value: '100+', icon: Building2 },
    { label: 'Team Members', value: '50+', icon: Users },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center shadow-lg glow-purple">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Global Presence</h2>
      </div>

      {/* World Map Illustration */}
      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            {/* UK Location */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30"
              />
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <Building2 className="w-12 h-12 text-white mx-auto mb-2" />
                  <div className="text-white font-bold text-xs">UK HQ</div>
                </div>
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Connection Line */}
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 relative">
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Bangladesh Location */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30"
              />
              <div className="relative w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <Users className="w-12 h-12 text-white mx-auto mb-2" />
                  <div className="text-white font-bold text-xs">BD Hub</div>
                </div>
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Location Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {locations.map((location, index) => {
          const Icon = location.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              <div className={`bg-gradient-to-br ${location.color} rounded-xl p-4 text-white`}>
                <div className="flex items-start gap-3">
                  <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                    <p className="text-white/80 text-sm mb-2">{location.type}</p>
                    <p className="text-white/90 text-xs mb-3">{location.description}</p>
                    <div className="bg-white/20 rounded-lg p-2 backdrop-blur">
                      <div className="text-2xl font-bold">{location.stats.value}</div>
                      <div className="text-xs text-white/80">{location.stats.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-3 gap-4">
        {globalStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-primary-500/30 rounded-lg p-4 text-center hover:border-primary-500/50 transition-all"
            >
              <Icon className="w-7 h-7 text-primary-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};

export default GlobalMap;
