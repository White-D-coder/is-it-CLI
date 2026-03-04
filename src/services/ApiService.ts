import axios from 'axios';

export class ApiService {
    private client: any;

    constructor(baseURL?: string) {
        this.client = axios.create({
            baseURL: baseURL,
            timeout: 5000,
        });
    }

    public async get<T>(url: string): Promise<T> {
        try {
            const response = await this.client.get(url);
            return response.data;
        } catch (error: any) {
            throw new Error(`Failed to fetch from ${url}: ${error.message}`);
        }
    }
}
