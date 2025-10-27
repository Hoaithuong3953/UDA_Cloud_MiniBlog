// Post Management App - Frontend JavaScript
// TODO: Frontend developers should implement the complete functionality

console.log('📝 Post Management App - Frontend loaded');

// API Configuration
const API_CONFIG = {
    baseURL: '/api',
    endpoints: {
        posts: '/api/posts',
        health: '/api/health'
    }
};

// Utility Functions
const utils = {
    showStatus: (message, type = 'success') => {
        const statusEl = document.getElementById('statusMessage');
        if (statusEl) {
            statusEl.textContent = message;
            statusEl.className = `status ${type === 'error' ? 'status-error' : 'status'}`;
            statusEl.style.display = 'block';
            
            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 5000);
        }
    },

    showLoading: () => {
        const spinner = document.querySelector('.spinner');
        if (spinner) spinner.style.display = 'block';
    },

    hideLoading: () => {
        const spinner = document.querySelector('.spinner');
        if (spinner) spinner.style.display = 'none';
    }
};

// API Functions
const api = {
    call: async (url, options = {}) => {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'API call failed');
            }
            
            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    // TODO: Implement these API functions
    getPosts: async () => {
        return await api.call(API_CONFIG.endpoints.posts);
    },

    getPost: async (id) => {
        return await api.call(`${API_CONFIG.endpoints.posts}/${id}`);
    },

    createPost: async (postData) => {
        return await api.call(API_CONFIG.endpoints.posts, {
            method: 'POST',
            body: JSON.stringify(postData)
        });
    },

    updatePost: async (id, postData) => {
        return await api.call(`${API_CONFIG.endpoints.posts}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(postData)
        });
    },

    searchPosts: async (query) => {
        return await api.call(`${API_CONFIG.endpoints.posts}/search?query=${encodeURIComponent(query)}`);
    },

    deletePost: async (id) => {
        return await api.call(`${API_CONFIG.endpoints.posts}/${id}`, {
            method: 'DELETE'
        });
    }
};

// Post Management Functions
const postManager = {
    // TODO: Implement these functions
    loadPosts: async () => {
        try {
            utils.showLoading();
            const response = await api.getPosts();
            
            const postsList = document.getElementById('postsList');
            if (postsList) {
                postsList.innerHTML = '<p>Posts loaded successfully!</p>';
            }
            
            utils.hideLoading();
        } catch (error) {
            utils.hideLoading();
            utils.showStatus('Error loading posts: ' + error.message, 'error');
        }
    },

    addPost: async () => {
        // TODO: Implement add post functionality
        utils.showStatus('Add post functionality - TODO: Implement this function');
    },

    editPost: async () => {
        // TODO: Implement edit post functionality
        utils.showStatus('Edit post functionality - TODO: Implement this function');
    },

    deletePost: async (id) => {
        // TODO: Implement delete post functionality
        utils.showStatus('Delete post functionality - TODO: Implement this function');
    },

    searchPosts: async (query) => {
        // TODO: Implement search posts functionality
        utils.showStatus('Search posts functionality - TODO: Implement this function');
    }
};

// Form Functions
function clearForm() {
    // TODO: Implement clear form functionality
    console.log('Clear form - TODO: Implement this function');
}

function clearSearch() {
    // TODO: Implement clear search functionality
    console.log('Clear search - TODO: Implement this function');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('📝 Post Management App initialized');
    
    // TODO: Add event listeners for forms and buttons
    console.log('Event listeners - TODO: Implement form handlers');
});

// Export for global access
window.postManager = postManager;
window.api = api;
window.utils = utils;