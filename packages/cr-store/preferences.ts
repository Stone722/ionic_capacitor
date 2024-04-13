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
        get: (key) => Preferences.get({ key }),
        set: (item) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return Preferences.set({ key, value });
        },
        multiGet: async (keys) => {
          const values: { [key: string]: any } = {};
          for (const key of keys) {
            const value = await Preferences.get({ key });
            values[key] = value;
          }
          return values;
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
