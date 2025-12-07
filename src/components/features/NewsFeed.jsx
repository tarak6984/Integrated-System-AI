import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, Calendar, TrendingUp } from 'lucide-react';
import { newsService } from '../../services/newsService';
import Card from '../ui/Card';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      const articles = await newsService.getAINews(6);
      setNews(articles);
    } catch (err) {
      setError('Failed to load news');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg glow-cyan">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Latest AI News</h2>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
              <div className="h-4 bg-gray-700/50 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-700/50 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-700/50 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center text-red-400 font-semibold bg-red-500/20 p-4 rounded-lg border border-red-500/30">{error}</div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg glow-cyan">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Latest AI News</h2>
        </div>
        <button 
          onClick={loadNews}
          className="text-sm text-primary-400 hover:text-primary-300 font-bold bg-primary-500/20 px-3 py-2 rounded-lg hover:bg-primary-500/30 transition-all"
        >
          Refresh
        </button>
      </div>

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {news.map((article, index) => (
          <motion.a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="block group"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-gray-700/50 rounded-xl p-4 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:border-primary-500/50">
              <div className="flex gap-4">
                {article.urlToImage && (
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-700/50 border border-gray-600/50">
                    <img 
                      src={article.urlToImage} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Newspaper className="w-3 h-3" />
                      {article.source.name}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                </div>
                
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-primary-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Card>
  );
};

export default NewsFeed;
