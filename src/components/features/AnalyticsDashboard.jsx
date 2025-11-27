import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap, Activity, Award, BarChart3, ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';

const AnalyticsDashboard = () => {
  const metrics = [
    {
      label: 'AI Model Accuracy',
      value: '98.5%',
      change: '+2.3%',
      trend: 'up',
      icon: Target,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Active Deployments',
      value: '127',
      change: '+15',
      trend: 'up',
      icon: Zap,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Client Satisfaction',
      value: '4.9/5',
      change: '+0.2',
      trend: 'up',
      icon: Award,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Processing Speed',
      value: '2.3ms',
      change: '-0.5ms',
      trend: 'up',
      icon: Activity,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivity = [
    { action: 'New AI model deployed', time: '5 min ago', status: 'success' },
    { action: 'System optimization completed', time: '1 hour ago', status: 'success' },
    { action: 'Client onboarding started', time: '2 hours ago', status: 'progress' },
    { action: 'Performance report generated', time: '3 hours ago', status: 'success' }
  ];

  const performanceData = [
    { month: 'Jan', value: 85 },
    { month: 'Feb', value: 88 },
    { month: 'Mar', value: 92 },
    { month: 'Apr', value: 90 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 98 }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`flex items-center text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                    {metric.change}
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-dark-600">{metric.label}</div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Performance Chart & Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900">Performance Overview</h3>
              </div>
              <span className="text-sm text-dark-600">Last 6 months</span>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between h-48 gap-2">
              {performanceData.map((data, index) => (
                <motion.div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div
                    className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg relative group cursor-pointer"
                    initial={{ height: 0 }}
                    animate={{ height: `${data.value}%` }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.value}%
                    </div>
                  </motion.div>
                  <span className="text-xs text-dark-600 font-medium">{data.month}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900">Recent Activity</h3>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'progress' ? 'bg-yellow-500 animate-pulse' :
                    'bg-gray-300'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-dark-900">{activity.action}</p>
                    <p className="text-xs text-dark-600 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-900">System Status</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-dark-600">API Response Time</span>
                <span className="text-sm font-semibold text-green-600">Optimal</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-green-600"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-dark-600">Server Uptime</span>
                <span className="text-sm font-semibold text-green-600">99.9%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: '99.9%' }}
                  transition={{ delay: 1.1, duration: 1 }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-dark-600">Data Processing</span>
                <span className="text-sm font-semibold text-green-600">Active</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AnalyticsDashboard;
