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

    async getConsultant() {
        const sessionToken = localStorage.getItem('sessionToken');
        try {
            const response = await this._instance.get('/consultants', {
                headers: { Authorization: `Bearer ${sessionToken}` }
            });
            return response.data.data;
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
            throw new Error(`GET request failed: ${error.response?.status || error.message}`);
        }
    }

    async changeConsultancyStatus(id, status, role, decision) {
        const sessionToken = localStorage.getItem('sessionToken');
        try {
            const response = await this._instance.post(`/proposals/${id}?role=${role}`, {
                status,
                decision
            },
            {
                headers: { Authorization: `Bearer ${sessionToken}` }
            });
            return response.data.data;
        } catch (error) {
            throw new Error(`POST request failed: ${error.response?.status || error.message}`);
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
            const data = await this.getConsultancy('PROVIDER');
            const filtered_data = data.filter(item => item.status === "REJECTED");
            console.log(filtered_data);
            
            return filtered_data;
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

    async submitGeneralInfo(info) {
        try {
            console.log("info:", info)
            const response = await this._instance.put('/consultants',
            info,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
                }
            }
        );
            return await response.data;
        } catch (error) {
            console.error('Error submitting general info:', error);
            throw error;
        }
    }
}

export const sdk = new SDK();