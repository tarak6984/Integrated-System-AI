import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { adminService } from '../services/adminService';
import { 
  Users, 
  Activity, 
  TrendingUp, 
  DollarSign,
  UserCheck,
  UserX,
  Settings,
  BarChart3,
  PieChart,
  Calendar,
  Clock,
  Mail,
  MessageSquare,
  FileText,
  Download,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle,
  Home,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7days');
  const [userFilter, setUserFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsers: 0,
    inactiveUsers: 0,
    totalRevenue: 0,
    avgSessionTime: '0m 0s',
    bounceRate: 0,
    conversionRate: 0
  });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all users
      const usersData = await adminService.getAllUsers();
      const allUsers = usersData.users || [];
      
      // Fetch statistics
      const statsData = await adminService.getStats();
      
      // Process users for display
      const processedUsers = allUsers.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        status: 'active',
        joined: formatDate(user.created_at),
        lastActive: formatDate(user.updated_at)
      }));

      setUsers(processedUsers);
      
      // Update stats
      setStats({
        totalUsers: statsData.totalUsers || 0,
        activeUsers: statsData.totalUsers || 0, // All users considered active for now
        newUsers: statsData.newUsers || 0,
        inactiveUsers: 0,
        totalRevenue: 0, // Not tracked yet
        avgSessionTime: '12m 34s', // Not tracked yet
        bounceRate: 32.5, // Not tracked yet
        conversionRate: 8.7 // Not tracked yet
      });

      // Process chart data
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const processedChartData = statsData.chartData?.map(item => ({
        month: months[parseInt(item.month) - 1],
        users: item.count
      })) || [];

      setChartData(processedChartData.length > 0 ? processedChartData : [
        { month: 'Jan', users: 0 },
        { month: 'Feb', users: 0 },
        { month: 'Mar', users: 0 },
        { month: 'Apr', users: 0 },
        { month: 'May', users: 0 },
        { month: 'Jun', users: 0 }
      ]);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} mins ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const handleDeleteUser = async (userId) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    
    try {
      await adminService.deleteUser(userId);
      loadDashboardData(); // Reload data
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  const recentUsers = users;

  const systemActivities = [
    { id: 1, type: 'user', action: 'New user registration', user: 'John Doe', time: '5 mins ago', status: 'success' },
    { id: 2, type: 'security', action: 'Failed login attempt', user: 'Unknown', time: '12 mins ago', status: 'warning' },
    { id: 3, type: 'system', action: 'Database backup completed', user: 'System', time: '1 hour ago', status: 'success' },
    { id: 4, type: 'user', action: 'User updated profile', user: 'Jane Smith', time: '2 hours ago', status: 'info' },
    { id: 5, type: 'admin', action: 'Settings updated', user: 'Admin', time: '3 hours ago', status: 'info' }
  ];


  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'inactive': return 'text-gray-400 bg-gray-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'success': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getActivityIcon = (type) => {
    switch(type) {
      case 'user': return <Users className="w-4 h-4" />;
      case 'security': return <Shield className="w-4 h-4" />;
      case 'system': return <Settings className="w-4 h-4" />;
      case 'admin': return <UserCheck className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen relative px-4 sm:px-6 lg:px-8 py-6 sm:py-8" style={{ background: 'transparent' }}>
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header with Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 mb-6">
            {/* Back to Home Link */}
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-700"></div>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home Page</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-400 font-medium">Manage your platform and monitor system performance</p>
            </div>
            
            <div className="flex items-center gap-3">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-gray-800/50 border-2 border-gray-700/50 text-white px-4 py-2 rounded-lg font-medium focus:outline-none focus:border-primary-500/50"
              >
                <option value="24hours">Last 24 Hours</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
              </select>
              
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Total Users */}
          <Card className="p-6 hover:shadow-2xl transition-all hover:border-primary-400/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg" 
                style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'}}>
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="flex items-center text-sm font-bold px-2 py-1 rounded-lg text-green-400 bg-green-500/20">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5%
              </span>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">{stats.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-300 font-medium">Total Users</div>
            </div>
          </Card>

          {/* Active Users */}
          <Card className="p-6 hover:shadow-2xl transition-all hover:border-green-400/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg"
                style={{boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'}}>
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <span className="flex items-center text-sm font-bold px-2 py-1 rounded-lg text-green-400 bg-green-500/20">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8.2%
              </span>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">{stats.activeUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-300 font-medium">Active Users</div>
            </div>
          </Card>

          {/* New Users */}
          <Card className="p-6 hover:shadow-2xl transition-all hover:border-purple-400/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg"
                style={{boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'}}>
                <Activity className="w-7 h-7 text-white" />
              </div>
              <span className="flex items-center text-sm font-bold px-2 py-1 rounded-lg text-green-400 bg-green-500/20">
                <TrendingUp className="w-4 h-4 mr-1" />
                +15.3%
              </span>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">{stats.newUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-300 font-medium">New Users (7d)</div>
            </div>
          </Card>

          {/* Conversion Rate */}
          <Card className="p-6 hover:shadow-2xl transition-all hover:border-orange-400/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg"
                style={{boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)'}}>
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <span className="flex items-center text-sm font-bold px-2 py-1 rounded-lg text-green-400 bg-green-500/20">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2.1%
              </span>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">{stats.conversionRate}%</div>
              <div className="text-sm text-gray-300 font-medium">Conversion Rate</div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* User Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg glow-cyan">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">User Growth</h3>
                </div>
                <span className="text-sm text-gray-400 font-medium">Last 6 Months</span>
              </div>

              <div className="h-64 flex items-end justify-between gap-4">
                {chartData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg relative group cursor-pointer shadow-lg"
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.users / 150) * 100}%` }}
                      transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 191, 255, 0.6)' }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold shadow-lg">
                        {data.users} users
                      </div>
                    </motion.div>
                    <span className="text-xs text-gray-300 font-semibold">{data.month}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center shadow-lg glow-purple">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Quick Stats</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300 font-medium">Avg Session</span>
                  </div>
                  <span className="text-sm font-bold text-white">{stats.avgSessionTime}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-300 font-medium">Bounce Rate</span>
                  </div>
                  <span className="text-sm font-bold text-white">{stats.bounceRate}%</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-300 font-medium">Revenue</span>
                  </div>
                  <span className="text-sm font-bold text-white">${stats.totalRevenue.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <UserX className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-gray-300 font-medium">Inactive Users</span>
                  </div>
                  <span className="text-sm font-bold text-white">{stats.inactiveUsers}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Recent Users */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg glow-cyan">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Recent Users</h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-gray-800/50 border border-gray-700/50 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-primary-500/50"
                    />
                  </div>
                  
                  <select 
                    value={userFilter}
                    onChange={(e) => setUserFilter(e.target.value)}
                    className="bg-gray-800/50 border border-gray-700/50 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-primary-500/50"
                  >
                    <option value="all">All Users</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left py-3 px-2 text-sm font-bold text-gray-300">User</th>
                      <th className="text-left py-3 px-2 text-sm font-bold text-gray-300">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-bold text-gray-300">Joined</th>
                      <th className="text-left py-3 px-2 text-sm font-bold text-gray-300">Last Active</th>
                      <th className="text-right py-3 px-2 text-sm font-bold text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
                      >
                        <td className="py-4 px-2">
                          <div>
                            <div className="font-semibold text-white text-sm">{user.name}</div>
                            <div className="text-xs text-gray-400">{user.email}</div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-sm text-gray-300 font-medium">{user.joined}</td>
                        <td className="py-4 px-2 text-sm text-gray-300 font-medium">{user.lastActive}</td>
                        <td className="py-4 px-2">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors" title="View">
                              <Eye className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors" title="Edit">
                              <Edit className="w-4 h-4 text-gray-400" />
                            </button>
                            <button 
                              onClick={() => handleDeleteUser(user.id)}
                              className="p-2 hover:bg-red-500/20 rounded-lg transition-colors" 
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* System Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'}}>
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">System Activity</h3>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {systemActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors border border-gray-800/50"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getStatusColor(activity.status)} bg-opacity-20`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">{activity.action}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{activity.user}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
