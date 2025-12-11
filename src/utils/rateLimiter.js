/**
 * Rate Limiter Utility
 * Prevents API abuse by limiting the number of requests within a time window
 */

class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests // Maximum number of requests allowed
        this.timeWindow = timeWindow // Time window in milliseconds
        this.requests = [] // Array to store request timestamps
    }

    /**
     * Check if a new request can be made
     * @returns {boolean} True if request is allowed, false otherwise
     */
    canMakeRequest() {
        const now = Date.now()

        // Remove requests outside the time window
        this.requests = this.requests.filter(time => now - time < this.timeWindow)

        // Check if we're under the limit
        if (this.requests.length < this.maxRequests) {
            this.requests.push(now)
            return true
        }

        return false
    }

    /**
     * Get time until next request is allowed
     * @returns {number} Milliseconds until next request
     */
    getTimeUntilNextRequest() {
        if (this.requests.length === 0) return 0

        const oldestRequest = Math.min(...this.requests)
        const timeRemaining = this.timeWindow - (Date.now() - oldestRequest)

        return Math.max(0, timeRemaining)
    }

    /**
     * Reset the rate limiter
     */
    reset() {
        this.requests = []
    }
}

// Create rate limiters for different features
export const chatbotLimiter = new RateLimiter(20, 60000) // 20 requests per minute
export const contactFormLimiter = new RateLimiter(5, 600000) // 5 requests per 10 minutes

export default RateLimiter
