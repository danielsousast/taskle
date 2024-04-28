export interface Storage {
  get<T>(key: string): T;
  set(key: string, value: any): void;
  remove(key: string): void;
}
