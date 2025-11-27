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
          <TrendingUp className="w-6 h-6 text-primary-600" />
          <h2 className="text-2xl font-bold text-dark-900">Latest AI News</h2>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center text-red-600">{error}</div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-dark-900">Latest AI News</h2>
        </div>
        <button 
          onClick={loadNews}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
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
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-primary-300">
              <div className="flex gap-4">
                {article.urlToImage && (
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
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
                  <h3 className="font-semibold text-dark-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-dark-600 mb-2 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-dark-500">
                    <span className="flex items-center gap-1">
                      <Newspaper className="w-3 h-3" />
                      {article.source.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                </div>
                
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Card>
  );
};

export default NewsFeed;
