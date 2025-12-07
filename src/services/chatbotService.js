// Enhanced Local AI Chatbot - No External APIs Required
// Robust, intelligent, context-aware chatbot running entirely locally

export const chatbotService = {
  // Comprehensive knowledge base
  knowledgeBase: {
    company: {
      name: "Integrated Systems AI",
      tagline: "Pioneering intelligent automation and AI solutions",
      headquarters: "United Kingdom",
      operations: "Bangladesh",
      email: "buildwith@integratedsystems.ai",
      responseTime: "24 hours"
    },
    services: [
      {
        id: "ai-rd",
        name: "AI Research & Development Lab",
        description: "Advanced R&D with UK headquarters and Bangladesh engineering hub developing intelligent, scalable AI technologies",
        features: ["Advanced R&D", "UK Headquarters", "Bangladesh Hub", "Scalable Technology"]
      },
      {
        id: "integrated-solutions",
        name: "Integrated AI Solutions",
        description: "Smart automation platforms that integrate seamlessly with existing software ecosystems",
        features: ["Seamless Integration", "Automation Agents", "Performance Boost", "Smart Decisions"]
      },
      {
        id: "branded-ventures",
        name: "Branded Ventures",
        description: "Public-facing AI products including SaaS platforms and enterprise APIs",
        sectors: ["Manufacturing", "Logistics", "Finance", "Healthcare", "Agriculture"]
      },
      {
        id: "shadow-ventures",
        name: "Shadow Ventures",
        description: "Stealth-mode companies targeting niche high-growth verticals",
        focus: "Independent brands for specialized markets"
      }
    ],
    industries: {
      manufacturing: "AI-powered quality control, predictive maintenance, supply chain optimization, and process automation",
      logistics: "Route optimization, warehouse automation, demand forecasting, and delivery tracking",
      finance: "Fraud detection, risk analysis, algorithmic trading, and customer service automation",
      healthcare: "Diagnostic assistance, patient data analysis, treatment optimization, and administrative automation",
      agriculture: "Crop monitoring, yield prediction, resource optimization, and precision farming"
    },
    benefits: [
      "Dual UK-Bangladesh setup combines strategic vision with cost-effective execution",
      "Seamless integration with existing systems",
      "Scalable solutions that grow with your business",
      "Industry-specific expertise across 5 major sectors",
      "24/7 AI-powered systems with human-centric approach"
    ]
  },

  // Conversation context
  context: {
    lastIntent: null,
    discussedTopics: new Set(),
    userInterests: new Set()
  },

  async sendMessage(message, conversationHistory = []) {
    // Simulate natural delay
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.getIntelligentResponse(message, conversationHistory);
  },

  getIntelligentResponse(message, conversationHistory) {
    const lowerMessage = message.toLowerCase().trim();
    
    // Classify intent
    const intent = this.classifyIntent(lowerMessage);
    
    // Update context
    this.updateContext(intent, lowerMessage);
    
    // Generate contextual response
    return this.generateResponse(intent, lowerMessage, conversationHistory);
  },

  classifyIntent(message) {
    const patterns = {
      greeting: /^(hi|hello|hey|good\s*(morning|afternoon|evening)|greetings)/i,
      services_general: /(what.*do.*you|service.*offer|what.*offer|help.*with|provide|solution)/i,
      service_rd: /(research|development|r&d|lab|innovation)/i,
      service_integration: /(integrat|automation|smart|seamless)/i,
      service_branded: /(branded|saas|platform|api|public)/i,
      service_shadow: /(shadow|stealth|niche)/i,
      industries: /(industry|sector|manufacturing|logistics|finance|healthcare|agriculture)/i,
      location: /(where|location|office|headquarter|based)/i,
      contact: /(contact|reach|email|talk|message)/i,
      pricing: /(price|cost|pricing|budget|quote)/i,
      how_works: /(how.*work|process|step|method)/i,
      getting_started: /(start|begin|onboard|get started|sign up)/i,
      benefits: /(benefit|advantage|why.*choose|different|better)/i,
      technology: /(technology|tech|ai|ml|machine learning|stack)/i,
      team: /(team|people|expert|engineer|developer)/i,
      timeline: /(how long|timeline|duration|fast|quick)/i,
      success_story: /(example|success|case study|client|customer)/i,
      thankyou: /(thank|thanks|appreciate)/i,
      goodbye: /(bye|goodbye|see you|later)/i
    };

    for (const [intent, pattern] of Object.entries(patterns)) {
      if (pattern.test(message)) {
        return intent;
      }
    }
    return 'general';
  },

  updateContext(intent, message) {
    this.context.lastIntent = intent;
    this.context.discussedTopics.add(intent);
    
    // Track industry interests
    Object.keys(this.knowledgeBase.industries).forEach(industry => {
      if (message.includes(industry)) {
        this.context.userInterests.add(industry);
      }
    });
  },

  generateResponse(intent, message) {
    const { company, services, industries, benefits } = this.knowledgeBase;

    switch (intent) {
      case 'greeting':
        return `Hello! 👋 Welcome to ${company.name}. I'm here to help you learn about our AI solutions and services. What would you like to know?`;

      case 'services_general':
        return `We offer four comprehensive services:\n\n1. **AI Research & Development** - Advanced R&D with our dual UK-Bangladesh setup\n2. **Integrated AI Solutions** - Smart automation that seamlessly integrates with your systems\n3. **Branded Ventures** - Public-facing SaaS platforms and enterprise APIs\n4. **Shadow Ventures** - Stealth-mode companies for niche markets\n\nWhich service interests you most?`;

      case 'service_rd': {
        const rd = services[0];
        return `**${rd.name}**\n\n${rd.description}. Our dual-office structure combines strategic vision from our UK headquarters with cost-effective development in our Bangladesh engineering hub.\n\nKey features: ${rd.features.join(', ')}.\n\nWould you like to know more about how we can help with your AI R&D needs?`;
      }

      case 'service_integration': {
        const integrated = services[1];
        return `**${integrated.name}**\n\n${integrated.description}. We build automation agents that improve performance, reduce operational friction, and elevate decision-making.\n\nBenefits: ${integrated.features.join(', ')}.\n\nLet me know if you'd like to discuss integration for your specific use case!`;
      }

      case 'service_branded': {
        const branded = services[2];
        return `**${branded.name}**\n\n${branded.description} tailored for specific industries.\n\nWe serve: ${branded.sectors.join(', ')}.\n\nThese are ready-to-deploy solutions designed to solve industry-specific challenges. Which sector are you in?`;
      }

      case 'service_shadow': {
        const shadow = services[3];
        return `**${shadow.name}**\n\n${shadow.description}. These are incubated and operated using our Bangladesh infrastructure, designed to target ${shadow.focus}.\n\nThis allows us to explore innovative solutions without direct public association to the main brand. Interested in learning more?`;
      }

      case 'industries': {
        const industryMatch = Object.keys(industries).find(ind => message.includes(ind));
        if (industryMatch) {
          return `**${industryMatch.charAt(0).toUpperCase() + industryMatch.slice(1)} Solutions**\n\nFor the ${industryMatch} sector, we provide: ${industries[industryMatch]}.\n\nWe understand the unique challenges in ${industryMatch} and have developed specialized AI tools to address them. Would you like to discuss a specific challenge you're facing?`;
        }
        return `We serve five major industries:\n\n🏭 **Manufacturing** - Quality control, predictive maintenance\n📦 **Logistics** - Route optimization, warehouse automation\n💰 **Finance** - Fraud detection, risk analysis\n🏥 **Healthcare** - Diagnostic assistance, data analysis\n🌾 **Agriculture** - Crop monitoring, precision farming\n\nWhich industry are you interested in?`;
      }

      case 'location':
        return `**Our Global Presence**\n\n🇬🇧 **UK Headquarters** - Strategic vision and client relations\n🇧🇩 **Bangladesh Operations Hub** - R&D, development, and engineering\n\nThis dual presence allows us to combine global expertise with cost-effective execution. We serve clients in 25+ countries worldwide!`;

      case 'contact':
        return `**Get In Touch**\n\n📧 Email: ${company.email}\n⏱️ Response time: Usually within ${company.responseTime}\n\nWe'd love to hear about your project! Just send us an email with your requirements, and we'll schedule a consultation to discuss how we can help.`;

      case 'pricing':
        return `**Pricing**\n\nOur pricing is customized based on:\n• Scope and complexity of your project\n• Industry-specific requirements\n• Scale of deployment\n• Support and maintenance needs\n\nWe believe in transparent, value-based pricing. Contact us at ${company.email} for a detailed quote tailored to your specific needs.`;

      case 'how_works':
        return `**Our Process**\n\n1. **Consultation** - We understand your challenges and goals\n2. **Analysis** - Our team evaluates your requirements\n3. **Proposal** - We present a customized solution\n4. **Development** - Our UK-Bangladesh team builds your solution\n5. **Integration** - Seamless deployment with your systems\n6. **Support** - Ongoing maintenance and optimization\n\nWant to get started? Reach out at ${company.email}!`;

      case 'getting_started':
        return `**Getting Started is Easy!**\n\n✅ Step 1: Email us at ${company.email}\n✅ Step 2: Share your project details and challenges\n✅ Step 3: We'll schedule a consultation\n✅ Step 4: Receive a customized proposal\n✅ Step 5: Begin your AI transformation!\n\nThe sooner you reach out, the sooner we can start solving your challenges. Ready to begin?`;

      case 'benefits':
        return `**Why Choose Integrated Systems AI?**\n\n${benefits.map((b, i) => `${i + 1}. ${b}`).join('\n')}\n\nWe're not just another AI company - we're your partner in digital transformation. Our track record speaks for itself with 100+ active deployments and 4.9/5 client satisfaction. What matters most to you in an AI partner?`;

      case 'technology':
        return `**Our Technology Stack**\n\nWe work with cutting-edge AI/ML technologies:\n• Machine Learning & Deep Learning\n• Natural Language Processing\n• Computer Vision\n• Predictive Analytics\n• Process Automation\n\nOur solutions are built to be scalable, maintainable, and integrate seamlessly with modern tech stacks. We adapt to your existing infrastructure rather than forcing you to change. What's your current tech environment?`;

      case 'team':
        return `**Our Team**\n\nWe have 50+ experts across:\n• AI Researchers\n• ML Engineers\n• Software Developers\n• Industry Specialists\n• Project Managers\n\nOur dual-location model means you get strategic oversight from our UK team combined with deep technical expertise from our Bangladesh engineering hub. This structure has proven highly effective for 100+ projects!`;

      case 'timeline':
        return `**Project Timelines**\n\nTypically:\n• Initial consultation: 1-2 days\n• Proposal & planning: 1 week\n• Development: 4-12 weeks (depending on complexity)\n• Deployment: 1-2 weeks\n• Full rollout: 6-16 weeks total\n\nWe pride ourselves on efficient delivery without compromising quality. Every project is different though - what's your timeline expectation?`;

      case 'success_story':
        return `**Our Track Record**\n\n📊 **100+ active deployments** across 5 industries\n⭐ **4.9/5 client satisfaction** rating\n🚀 **98.5% AI model accuracy** on average\n🌍 **25+ countries** served globally\n\nOur clients see an average 40% improvement in operational efficiency. We've helped manufacturers reduce downtime, logistics companies optimize routes, and healthcare providers improve diagnostics. Want to be our next success story?`;

      case 'thankyou':
        return `You're very welcome! 😊 I'm glad I could help. If you have any other questions about our services, or if you're ready to start a project, don't hesitate to reach out at ${company.email}. We're here to help!`;

      case 'goodbye':
        return `Thank you for chatting with me! 👋 Feel free to come back anytime you have questions. For immediate assistance, email us at ${company.email}. Have a great day!`;

      default:
        // Intelligent fallback based on context
        if (this.context.discussedTopics.size > 0) {
          return `That's an interesting question! Based on our conversation, you seem interested in ${Array.from(this.context.discussedTopics).slice(-2).join(' and ')}. \n\nI'd be happy to help with:\n• More details about our services\n• Industry-specific solutions\n• Pricing and timelines\n• Getting started\n\nWhat would you like to explore?`;
        }
        return `I'm here to help you learn about Integrated Systems AI! I can tell you about:\n\n💼 Our services and solutions\n🏢 Company locations and team\n💰 Pricing and timelines\n🚀 How to get started\n🌍 Industries we serve\n\nWhat interests you most?`;
    }
  }
};
