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
}

export const sdk = new SDK();