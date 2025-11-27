# 🚀 Integrated Systems AI - Full Stack Application

[![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)](https://github.com/tarak6984/Integrated-System-AI)
[![Features](https://img.shields.io/badge/features-6%20major-blue)](https://github.com/tarak6984/Integrated-System-AI)
[![Cost](https://img.shields.io/badge/cost-%240%2Fmonth-success)](https://github.com/tarak6984/Integrated-System-AI)
[![AI](https://img.shields.io/badge/AI-local%20chatbot-orange)](https://github.com/tarak6984/Integrated-System-AI)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-purple)](https://vitejs.dev/)

> A professional full stack application featuring an **enhanced local AI chatbot**, live news integration, analytics dashboard, and complete authentication system - all running at **$0/month**!

## ✨ Features

### 🤖 Enhanced Local AI Chatbot
- **15+ intent classifications** for intelligent conversation understanding
- **Context-aware responses** that remember conversation history
- **Comprehensive knowledge base** covering company info, services, and industries
- **Rich formatted responses** with emojis, markdown, and professional styling
- **Smart follow-up suggestions** to guide conversations naturally
- **100% local processing** - no external APIs, no costs, unlimited usage
- **Industry-specific solutions** for 5 sectors (Manufacturing, Logistics, Finance, Healthcare, Agriculture)
- Available on all pages via floating chat button

### 📰 Live News Feed
- **Real-time AI/tech news** from News API
- Article previews with images and descriptions
- External links to full stories
- Manual refresh capability
- Relative timestamps (e.g., "2h ago")
- Fallback to demo data if API unavailable
- **Free tier:** 100 requests/day

### 📊 Analytics Dashboard
- **4 animated metric cards** (AI Accuracy: 98.5%, Active Deployments: 127, Client Satisfaction: 4.9/5, Processing Speed: 2.3ms)
- **Interactive 6-month performance chart** with hover tooltips
- **Recent activity timeline** with status indicators
- **System status monitors** with animated progress bars
- Beautiful gradient designs and smooth animations
- Responsive layout adapting to all screen sizes

### 🌍 Interactive Global Map
- **Dual office visualization** (UK Headquarters + Bangladesh Hub)
- **Animated pulsing markers** with connection line
- **Moving data indicator** along connection path
- **Global statistics display** (25+ countries, 100+ projects, 50+ team members)
- Professional gradient design with glass-morphism effects

### 📧 Enhanced Contact Form
- Professional design with icon-enhanced input fields
- Real-time client-side validation
- Success/error notifications with animations
- Required field indicators
- Responsive layout for all devices
- Ready for email service integration (EmailJS, SendGrid, etc.)

### 🔐 User Authentication System
- Secure **signup and login** functionality
- **JWT-based authentication** with HTTP-only cookies
- **bcrypt password hashing** for security
- **Protected routes** requiring authentication
- User session management
- Secure logout functionality
- SQLite database for user storage

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - Modern UI library with hooks
- **Vite 5.2** - Lightning-fast build tool
- **React Router 6.22** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 11** - Professional animations
- **Lucide React** - Beautiful icon library

### Backend
- **Express 4.18** - Web application framework
- **Node.js** - JavaScript runtime (ES modules)
- **SQLite** (better-sqlite3) - Lightweight database
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **CORS** - Cross-origin resource sharing
- **cookie-parser** - Cookie handling

### APIs
- **News API** - Live news feed integration
- **Local AI** - Enhanced chatbot (no external APIs)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm installed
- Git installed

### Clone Repository
```bash
git clone https://github.com/tarak6984/Integrated-System-AI.git
cd Integrated-System-AI
```

### Install Dependencies
```bash
npm install
```

### Environment Setup
Create `.env.local` file in root directory:
```env
# News API (Optional - get free key from https://newsapi.org/)
VITE_NEWS_API_KEY=your_news_api_key_here

# Backend API URL
VITE_API_URL=http://localhost:5001/api

# Note: Chatbot runs 100% locally - no external AI APIs needed!
```

Create `.env` file for backend (optional):
```env
PORT=5001
NODE_ENV=development
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_super_secret_jwt_key_change_in_production
DB_PATH=./server/database.sqlite
```

## 🚀 Running the Application

### Development Mode (Both Servers)
```bash
npm run dev:all
```
This starts both frontend (Vite) and backend (Express) servers.

### Run Separately

**Frontend Only:**
```bash
npm run dev
```
Access at: http://localhost:5173/

**Backend Only:**
```bash
npm run server
```
API available at: http://localhost:5001/api

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
integrated-systems-ai/
├── src/                          # Frontend source
│   ├── components/
│   │   ├── auth/                # Authentication components
│   │   ├── features/            # New feature components ⭐
│   │   │   ├── AIChatbot.jsx           # Enhanced AI chatbot
│   │   │   ├── AnalyticsDashboard.jsx  # Metrics & charts
│   │   │   ├── EnhancedContactForm.jsx # Contact form
│   │   │   ├── GlobalMap.jsx           # Interactive map
│   │   │   ├── NewsFeed.jsx            # Live news
│   │   │   └── WeatherWidget.jsx       # Weather display
│   │   ├── layout/              # Layout components
│   │   ├── sections/            # Page sections
│   │   └── ui/                  # Reusable UI components
│   ├── context/                 # React context
│   ├── pages/                   # Page components
│   ├── services/                # API services ⭐
│   │   ├── authService.js       # Authentication
│   │   ├── chatbotService.js    # Local AI chatbot ⭐
│   │   └── newsService.js       # News API integration
│   └── config/                  # Configuration
├── server/                      # Backend source
│   ├── config/                  # Database config
│   ├── controllers/             # Route controllers
│   ├── middleware/              # Auth middleware
│   ├── models/                  # Database models
│   └── routes/                  # API routes
├── public/                      # Static assets
└── docs/                        # Documentation (15+ files)
```

## 🎯 Usage

### 1. Homepage
Visit http://localhost:5173/ to see:
- Hero section with video background
- Company vision and mission
- Services showcase (4 cards)
- Core values and global vision
- Why choose us section
- Enhanced contact form

### 2. AI Chatbot
- Click floating button (bottom-right corner) on any page
- Try these questions:
  - "What services do you offer?"
  - "Tell me about manufacturing solutions"
  - "How do I get started?"
  - "Where are you located?"
  - "Why should I choose you?"

### 3. User Account
- Click "Signup" to create an account
- Login with your credentials
- Access protected dashboard

### 4. Dashboard
After logging in, explore:
- **Analytics** - View metrics and performance charts
- **Global Map** - See office locations with animations
- **News Feed** - Read latest AI/tech news
- **User Profile** - View your account information

## 🤖 Chatbot Capabilities

The enhanced local AI chatbot understands **15+ intents**:

- ✅ Greetings & farewells
- ✅ Services (general & specific)
- ✅ Industry-specific queries (5 sectors)
- ✅ Location & office information
- ✅ Contact details
- ✅ Pricing & quotes
- ✅ How it works / Process
- ✅ Getting started guidance
- ✅ Benefits & advantages
- ✅ Technology stack
- ✅ Team information
- ✅ Timelines & duration
- ✅ Success stories
- ✅ Context-aware follow-ups

**Example conversation:**
```
User: "What services do you offer?"
Bot: Lists 4 comprehensive services with descriptions

User: "Tell me about the first one"
Bot: Provides detailed information about AI R&D Lab

User: "How much does it cost?"
Bot: Explains pricing structure and how to get a quote
```

## 💰 Cost Breakdown

| Component | Service | Cost |
|-----------|---------|------|
| AI Chatbot | Local Processing | **$0** |
| News Feed | News API (Free tier) | **$0** |
| Backend | Local/Self-hosted | **$0** |
| Database | SQLite | **$0** |
| **Total** | | **$0/month** |

**Deployment costs (optional):**
- Vercel (Frontend): Free tier available
- Railway (Backend): Free tier available
- Total: Can remain **$0/month**

## 📚 Documentation

Comprehensive documentation available:
- `QUICK_REFERENCE.md` - Quick start guide
- `LOCAL_AI_CHATBOT.md` - Enhanced chatbot details
- `FINAL_PROJECT_STATUS.md` - Complete project summary
- `FEATURES_DOCUMENTATION.md` - Technical details
- `API_KEYS_CONFIGURED.md` - API setup instructions
- Plus 10+ more guides covering all aspects

## 🚀 Deployment

### Frontend (Vercel - Recommended)
1. Push to GitHub (already done!)
2. Visit [Vercel](https://vercel.com)
3. Import repository
4. Add environment variables
5. Deploy!

### Backend (Railway - Recommended)
1. Visit [Railway](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Add environment variables
5. Deploy!

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 🔒 Security

- ✅ JWT-based authentication
- ✅ bcrypt password hashing
- ✅ HTTP-only cookies
- ✅ CORS configured
- ✅ Environment variables for secrets
- ✅ SQL injection prevention
- ✅ Input validation
- ✅ Protected API routes

## 🎨 Customization

### Chatbot Responses
Edit `src/services/chatbotService.js`:
- Add new intents to `classifyIntent()`
- Add responses in `generateResponse()`
- Update knowledge base

### News Topics
Edit `src/services/newsService.js`:
- Modify query parameters
- Change news categories
- Add custom filters

### Analytics Data
Edit `src/components/features/AnalyticsDashboard.jsx`:
- Update metrics values
- Customize chart data
- Add new indicators

## 🐛 Troubleshooting

### Chatbot not responding?
- Check browser console for errors
- Chatbot uses local processing (always works offline)
- Verify `chatbotService.js` is loaded

### News not loading?
- Add News API key to `.env.local`
- Check API quota (100/day free)
- Demo data will show as fallback

### Can't login?
- Ensure backend is running on port 5001
- Check `.env` file configuration
- Verify database file exists

### Port already in use?
- Frontend: Vite will auto-assign next port
- Backend: Change PORT in `.env` file

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Integrated Systems AI Team**
- Website: [Integrated Systems AI](https://integrated-system-ai.vercel.app/)
- Email: buildwith@integratedsystems.ai
- GitHub: [@tarak6984](https://github.com/tarak6984)

## 🌟 Acknowledgments

- React team for the amazing framework
- Vite for blazing fast tooling
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- News API for news integration
- All open-source contributors

## 📊 Project Stats

- **Lines of Code:** ~7,000+
- **Components:** 25+
- **Features:** 6 major
- **Documentation Files:** 15+
- **API Integrations:** 2
- **Cost:** $0/month
- **Status:** Production Ready ✅

---

**Built with ❤️ by Integrated Systems AI**

*Pioneering intelligent automation and AI solutions*

🇬🇧 UK Headquarters | 🇧🇩 Bangladesh Operations Hub
