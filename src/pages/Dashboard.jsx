import { motion } from 'framer-motion';
import { User, Mail, Calendar, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import AnalyticsDashboard from '../components/features/AnalyticsDashboard';
import NewsFeed from '../components/features/NewsFeed';
import GlobalMap from '../components/features/GlobalMap';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen relative px-4 sm:px-6 lg:px-8 py-6 sm:py-8" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 rounded-2xl shadow-xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-sm sm:text-base text-primary-100">
                Your comprehensive AI analytics and insights dashboard
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="secondary"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </div>
        </motion.div>

        {/* User Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <div className="glassmorphism rounded-xl p-6 shadow-lg border-2 border-primary-500/30 hover:border-primary-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg glow-cyan">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Full Name</h3>
                <p className="text-lg font-bold text-white">{user?.name}</p>
              </div>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-6 shadow-lg border-2 border-green-500/30 hover:border-green-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'}}>
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-400 mb-1">Email</h3>
                <p className="text-lg font-bold text-white break-all">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="glassmorphism-purple rounded-xl p-6 shadow-lg border-2 border-accent-500/30 hover:border-accent-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg glow-purple">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">User ID</h3>
                <p className="text-lg font-bold text-white">{user?.id}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <AnalyticsDashboard />
        </motion.div>

        {/* Global Map & News Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <GlobalMap />
          <NewsFeed />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
