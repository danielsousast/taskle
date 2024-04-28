import {MMKV} from 'react-native-mmkv';

import {Storage} from './types';

const storage = new MMKV({
  id: `@tasks`,
  encryptionKey: 'hunter2',
});

function get<T>(key: string): T {
  const value = storage.getString(key);
  if (!value) {
    return '' as T;
  }
  return JSON.parse(value || '');
}

function set(key: string, value: any): void {
  storage.set(key, JSON.stringify(value));
}

function remove(key: string): void {
  storage.delete(key);
}

export const commonStorage: Storage = {
  get,
  set,
  remove,
};
