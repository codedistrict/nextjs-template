import { SERVICES_FALLBACK } from '@/constants/services';
import { fetcher } from '@/lib/https';
import Storage from '@/lib/storage';
import { MethodTypes } from '@/types/http/methodTypes';

class ServiceDiscovery {
  private readonly storage: Storage;
  private key = 'services';
  private ttl = 3600; // Need to discuss with Marko what should be optimum value

  public constructor() {
    this.storage = new Storage();
  }
  private async fetchServices() {
    const sdUrl = process.env.SD_URL as string;
    return fetcher('', MethodTypes.GET, sdUrl, null, null);
  }
  async get(service: string) {
    try {
      let services = this.storage.get<{ [key: string]: string }>(this.key);
      // If not found in local storage, fetch fresh and update storage
      if (!services) {
        services = await this.fetchServices();
        this.storage.set(this.key, services, this.ttl);
      }
      if (!services) return null;

      if (services && (services[service] === undefined || services[service] === '')) {
        return SERVICES_FALLBACK[service];
      } else {
        return services[service];
      }
    } catch (e) {
      throw new Error('Service not working. Try again later');
      //@TODO needs to address the cases when TTL is not expired but service url is changed
      // IF service discovery itself is down
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ServiceDiscovery();
