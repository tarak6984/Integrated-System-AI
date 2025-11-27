// News API Service for fetching latest tech/AI news
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || 'demo'; // We'll use demo mode if no key
const NEWS_API_BASE = 'https://newsapi.org/v2';

export const newsService = {
  async getAINews(limit = 10) {
    try {
      // Using NewsAPI - free tier allows 100 requests/day
      const response = await fetch(
        `${NEWS_API_BASE}/everything?q=artificial intelligence OR machine learning OR AI&sortBy=publishedAt&pageSize=${limit}&language=en&apiKey=${NEWS_API_KEY}`
      );
      
      if (!response.ok) {
        // Fallback to demo data if API fails
        return this.getDemoNews();
      }
      
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching news:', error);
      return this.getDemoNews();
    }
  },

  getDemoNews() {
    // Demo news data for when API is not available
    return [
      {
        title: "AI Revolutionizing Manufacturing Industry",
        description: "Latest advancements in AI are transforming how manufacturers operate, increasing efficiency by 40%.",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
        publishedAt: new Date().toISOString(),
        source: { name: "Tech Daily" }
      },
      {
        title: "Machine Learning Models Break New Records",
        description: "Recent developments in ML algorithms show unprecedented accuracy in predictive analytics.",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "AI Weekly" }
      },
      {
        title: "Healthcare AI: Saving Lives with Technology",
        description: "AI-powered diagnostic tools are helping doctors detect diseases earlier and more accurately.",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Health Tech" }
      },
      {
        title: "Agriculture Embraces Smart AI Solutions",
        description: "Farmers are using AI-powered tools to optimize crop yields and reduce resource waste.",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
        publishedAt: new Date(Date.now() - 10800000).toISOString(),
        source: { name: "AgriTech News" }
      },
      {
        title: "Finance Sector's AI Transformation",
        description: "Banks and financial institutions are leveraging AI for fraud detection and customer service.",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400",
        publishedAt: new Date(Date.now() - 14400000).toISOString(),
        source: { name: "FinTech Today" }
      }
    ];
  },

  async getTechNews(limit = 10) {
    try {
      const response = await fetch(
        `${NEWS_API_BASE}/top-headlines?category=technology&pageSize=${limit}&language=en&apiKey=${NEWS_API_KEY}`
      );
      
      if (!response.ok) {
        return this.getDemoNews();
      }
      
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching tech news:', error);
      return this.getDemoNews();
    }
  }
};
