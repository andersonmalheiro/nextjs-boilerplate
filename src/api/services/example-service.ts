import { AxiosInstance } from 'axios';
import { Example } from './models';

export class ExampleService {
  constructor(private httpClient: AxiosInstance) {}

  public async get(): Promise<Example | undefined> {
    try {
      const response = await this.httpClient.get<Example>('/', {});

      if (response && response.data) {
        return response.data;
      }
    } catch (error) {
      return error;
    }

    return undefined;
  }
}
