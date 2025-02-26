import { API } from '../constants/api';

export const api = {
  async get<T>(endpoint: string, timeout = API.TIMEOUT): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      await new Promise(resolve => setTimeout(resolve, API.DELAY));
      const response = await fetch(`${API.BASE_URL}${endpoint}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error('Falha ao carregar dados');
      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          error.name === 'AbortError'
            ? 'Request Timeout: A requisição demorou muito para responder'
            : error.message
        );
      }
      throw new Error('Erro ao carregar dados');
    }
  }
}; 