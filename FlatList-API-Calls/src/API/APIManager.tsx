import apiClient from "./APIClient";
import { ENDPOINTS } from "./endpoints";

class APIManager {
    async getTodos() {
        const response = await apiClient.get(ENDPOINTS.todo);
        return response.data; // ✅ NOT response.data.todos
    }
}

export default new APIManager();
