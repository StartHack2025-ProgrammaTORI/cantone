import axios from 'axios';

class SDK {
    constructor() {
        this._api_url = process.env.REACT_APP_API_URL;
        this._instance = axios.create({
            baseURL: this._api_url,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async getQuestion(index) {
        const sessionToken = localStorage.getItem('sessionToken');
        console.log("sessionToken", sessionToken)
        try {
            const response = await this._instance.get('/questions', {
                params: { index },
                headers: { Authorization: `Bearer ${sessionToken}` }
            });
            return response.data;
        } catch (error) {
        throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }
    
    async answerQuestion(index_answer, index_question) {
        const sessionToken = localStorage.getItem('sessionToken');
        try {
            const response = await this._instance.post('/questions', {
                index_answer,
                index_question
            }, {
                headers: { Authorization: `Bearer ${sessionToken}` }
            });
            return response.data;
        } catch (error) {
        throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async getTodos() {
        try {
            const response = await this._instance.get('/todos');
            return response.data;
        } catch (error) {
        throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async setTodoAsDone(id) {
        try {
            const response = await this._instance.post(`/todos/${id}`);
            return response.data;
        } catch (error) {
        throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async getConsultancy(role) {
        const sessionToken = localStorage.getItem('sessionToken');
        try {
            const response = await this._instance.get(`/proposals?role=${role}`, {
                headers: { Authorization: `Bearer ${sessionToken}` }
            });
            return response.data.data;
        } catch (error) {
            localStorage.removeItem('sessionToken');
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async getRequestedConsultancy() {
        try {
            //const response = await this._instance.get('/consultancy/requested');
            // return response.data;
            return ["Department of Transport"]
        } catch (error) {
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async getConsultancyAskedFor() {
        try {
            //const response = await this._instance.get('/consultancy/asked-for');
            //return response.data;
            return ["Department of Transport"]
        } catch (error) {
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async getConsultancyDetails(title) {
        try {
            // Mocked response
            return {
                description: `Description for ${title}`,
                email: `${title.toLowerCase().replace(/\s+/g, '')}@example.com`
            };
        } catch (error) {
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async sendDecision(title, decision) {
        try {
            const response = await this._instance.post('/consultancy/decision', {
                title,
                decision
            });
            return response.data;
        } catch (error) {
            throw new Error(`POST request failed: ${error.response?.status || error.message}`);
        }
    }

    async getDislikedAreas() {
        try {
            // Mocked response
            return ["Area 1", "Area 2"];
        } catch (error) {
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async getDislikedCompanies() {
        try {
            // Mocked response
            return ["Company 1", "Company 2"];
        } catch (error) {
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async getRefusedCompanies() {
        try {
            // Mocked response
            return ["Company 1", "Company 2"];
        } catch (error) {
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async removeDislikedArea(area) {
        try {
            // Mocked response
            return { success: true };
        } catch (error) {
            throw new Error(`DELETE request failed: ${error.response?.status || error.message}`);
        }
    }

    async removeDislikedCompany(company) {
        try {
            // Mocked response
            return { success: true };
        } catch (error) {
            throw new Error(`DELETE request failed: ${error.response?.status || error.message}`);
        }
    }

    async removeRefusedCompany(company) {
        try {
            // Mocked response
            return { success: true };
        } catch (error) {
            throw new Error(`DELETE request failed: ${error.response?.status || error.message}`);
        }
    }
}

export const sdk = new SDK();