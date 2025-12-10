// Enhanced AI Chatbot with Groq API
// Provides intelligent, context-aware responses with fallback to local chatbot

import Groq from "groq-sdk";
import { chatbotService as localChatbot } from './chatbotService.js';

class GroqChatbotService {
    constructor() {
        this.groq = null;
        this.isInitialized = false;
        this.conversationHistory = [];

        // System prompt for Groq
        this.systemPrompt = `You are an AI assistant for Integrated Systems AI, a company that provides AI solutions and services.

Company Information:
- Name: Integrated Systems AI
- Tagline: Integrating industries with the power of AI
- Headquarters: United Kingdom
- Engineering Hubs: Bangladesh and Japan
- Email: buildwith@integrated-systems.ai
- Response Time: 24 hours

Services:
1. AI Research & Development Lab - Advanced R&D with UK headquarters and engineering hubs
2. Integrated AI Solutions - Smart automation platforms that integrate seamlessly
3. Branded Ventures - Public-facing AI products including SaaS platforms
4. Shadow Ventures - Stealth-mode companies targeting niche markets

Industries Served:
- Manufacturing: AI-powered quality control, predictive maintenance
- Logistics: Route optimization, warehouse automation
- Finance: Fraud detection, risk analysis
- Healthcare: Diagnostic assistance, patient data analysis
- Agriculture: Crop monitoring, yield prediction

Key Benefits:
- Global presence with UK HQ and engineering hubs
- Seamless integration with existing systems
- Scalable solutions that grow with business
- 24/7 AI-powered systems with human-centric approach
- 100+ active deployments, 98.5% AI accuracy, 4.9/5 satisfaction

Your role:
- Be helpful, friendly, and professional
- Provide accurate information about the company
- Guide users to contact buildwith@integrated-systems.ai for detailed inquiries
- Keep responses concise but informative (max 3-4 sentences)
- Use emojis sparingly and professionally`;
    }

    // Initialize Groq API
    initialize(apiKey) {
        try {
            if (!apiKey) {
                console.warn('⚠️ Groq API key not provided. Using local chatbot.');
                return false;
            }

            this.groq = new Groq({
                apiKey: apiKey,
                dangerouslyAllowBrowser: true // Required for browser usage
            });

            this.isInitialized = true;
            console.log('✅ Groq API initialized successfully');
            return true;
        } catch (error) {
            console.error('❌ Failed to initialize Groq API:', error);
            this.isInitialized = false;
            return false;
        }
    }

    // Send message with Groq API
    async sendMessageWithGroq(message) {
        try {
            if (!this.isInitialized || !this.groq) {
                throw new Error('Groq not initialized');
            }

            // Build messages array with system prompt and history
            const messages = [
                {
                    role: "system",
                    content: this.systemPrompt
                },
                ...this.conversationHistory.map(msg => ({
                    role: msg.role,
                    content: msg.content
                })),
                {
                    role: "user",
                    content: message
                }
            ];

            // Send message to Groq
            const completion = await this.groq.chat.completions.create({
                messages: messages,
                model: "llama-3.3-70b-versatile", // Fast and intelligent model
                temperature: 0.7,
                max_tokens: 500,
            });

            const response = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

            // Store in conversation history
            this.conversationHistory.push({
                role: 'user',
                content: message
            });
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

            // Keep only last 10 messages to avoid token limits
            if (this.conversationHistory.length > 10) {
                this.conversationHistory = this.conversationHistory.slice(-10);
            }

            return response;
        } catch (error) {
            console.error('❌ Groq API error:', error);
            throw error;
        }
    }

    // Main send message function with fallback
    async sendMessage(message, conversationHistory = []) {
        console.log('💬 Sending message:', message);
        console.log('🔧 Groq initialized:', this.isInitialized);

        // Add delay for natural feel
        await new Promise(resolve => setTimeout(resolve, 400));

        // Try Groq API first
        if (this.isInitialized) {
            try {
                console.log('🤖 Using Groq API...');
                const response = await this.sendMessageWithGroq(message);
                console.log('✅ Groq response received');
                return response;
            } catch (error) {
                console.warn('❌ Groq API failed, falling back to local chatbot:', error);
                console.log('🔄 Using local chatbot fallback...');
                // Fall back to local chatbot
                return localChatbot.getIntelligentResponse(message, conversationHistory);
            }
        } else {
            console.log('📍 Using local chatbot (Groq not initialized)');
            // Use local chatbot if Groq not initialized
            return localChatbot.getIntelligentResponse(message, conversationHistory);
        }
    }

    // Reset conversation
    resetConversation() {
        this.conversationHistory = [];
    }

    // Get conversation history
    getHistory() {
        return this.conversationHistory;
    }

    // Check if Groq is active
    isGroqActive() {
        return this.isInitialized;
    }
}

// Create singleton instance
const groqChatbotService = new GroqChatbotService();

// Auto-initialize if API key is available
const apiKey = import.meta.env.VITE_GROQ_API_KEY;
console.log('🔍 Checking Groq API Key...');
console.log('API Key exists:', !!apiKey);
console.log('API Key length:', apiKey ? apiKey.length : 0);
console.log('API Key preview:', apiKey ? `${apiKey.substring(0, 10)}...` : 'Not found');

if (apiKey) {
    console.log('🚀 Attempting to initialize Groq API...');
    const initialized = groqChatbotService.initialize(apiKey);
    console.log('Initialization result:', initialized);
} else {
    console.warn('⚠️ No Groq API key found. Chatbot will use local mode only.');
}

export { groqChatbotService };
