import axios from 'axios';

class SDK {
    constructor() {
        this._api_url = process.env.REACT_APP_API_URL;
        this._instance = axios.create({
            baseURL: this._api_url,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async getQuestion(index) {
        try {
            const response = await this._instance.get('/questions', {
                params: { index }
            });
            return response.data;
        } catch (error) {
        throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }
    
    async answerQuestion(index_answer, index_question) {
        try {
            const response = await this._instance.post('/questions', {
                index_answer,
                index_question
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

    async getSuggestedConsultancy() {
        try {
            //const response = await this._instance.get('/consultancy/suggested');
            // return response.data;
            return ["Department of Transport"]
        } catch (error) {
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
}

export const sdk = new SDK();