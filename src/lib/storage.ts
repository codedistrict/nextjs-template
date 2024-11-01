interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export default class Storage {
  private readonly storage: IStorage | null;

  public constructor(
    getStorage = (): IStorage | null => (typeof window !== 'undefined' ? localStorage : null)
  ) {
    this.storage = getStorage();
  }

  get<T>(key: string): T | null {
    const itemStr = this.storage?.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    if (!item) {
      return null;
    }
    const now = new Date();

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.ttl && item.ttl) {
      // If the item is expired, delete the item from storage
      // and return null
      this.storage?.removeItem(key);
      return null;
    }
    return item.value;
  }

  set(key: string, value: any, ttl = -1): void {
    const payload = {
      ttl: ttl >= 0 ? new Date().getTime() + ttl * 1000 : null,
      value,
    };
    this.storage?.setItem(key, JSON.stringify(payload));
  }

  clearItem(key: string): void {
    this.storage?.removeItem(key);
  }
}
