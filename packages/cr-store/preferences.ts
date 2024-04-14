import { BaseCRStore } from "./base";
import { CRStoreProvider, MultiGet } from "./interface";
import { Preferences } from '@capacitor/preferences';

export class PreferencesCRStore extends BaseCRStore implements MultiGet {
  protected static CRStoreProvider:
    | (CRStoreProvider & {
      multiGet: (keys: string[]) => Promise<{ [key: string]: any }>;
    })
    | undefined;

  constructor(prefix: string) {
    if (!PreferencesCRStore.CRStoreProvider) {
      PreferencesCRStore.CRStoreProvider = {
        get: async (key: string): Promise<{ [key: string]: any }> => {
          const value = localStorage.getItem(key);
          return value ? { [key]: value } : {};
        },
        set: async (items: { [key: string]: any }): Promise<void> => {
          Object.entries(items).forEach(([key, value]) => {
            localStorage.setItem(key, value);
          });
        },
        multiGet: async (keys: string[]): Promise<{ [key: string]: any }> => {
          const result: { [key: string]: any } = {};
          keys.forEach(key => {
            const value = localStorage.getItem(key);
            if (value !== null) {
              result[key] = value;
            }
          });
          return result;
        },
      };
    }

    if (!PreferencesCRStore.CRStoreProvider) {
      throw new Error("Can't initialize CR store for browser extension");
    }

    super(PreferencesCRStore.CRStoreProvider, prefix);
  }

  async multiGet(keys: string[]): Promise<{ [key: string]: any }> {
    // Remove duplications
    keys = Array.from(new Set(keys));

    const res =
      (await PreferencesCRStore.CRStoreProvider!.multiGet(
        keys.map((k) => this.prefix() + "/" + k)
      )) ?? {};
    const prefixedKeys = Object.keys(res);
    for (const prefixedKey of prefixedKeys) {
      const key = prefixedKey.slice(this.prefix().length + 1);
      res[key] = res[prefixedKey];

      delete res[prefixedKey];
    }

    return res;
  }
}
