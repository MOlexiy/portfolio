import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { EN } from './content.en';
import type { Content, Lang } from './content.model';
import { UK } from './content.uk';

const STORAGE_KEY = 'portfolio.lang';
const CONTENT: Record<Lang, Content> = { en: EN, uk: UK };

function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'uk';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly #document = inject(DOCUMENT);
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  readonly lang = signal<Lang>(this.#initialLang());
  readonly t = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      const { meta } = this.t();
      this.#document.documentElement.lang = lang;
      this.#title.setTitle(meta.title);
      this.#meta.updateTag({ name: 'description', content: meta.description });
      this.#meta.updateTag({ property: 'og:title', content: meta.title });
      this.#meta.updateTag({ property: 'og:description', content: meta.description });
      this.#writeStored(lang);
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  /** ?lang=uk in a shared link wins, then the saved choice, then the browser language. */
  #initialLang(): Lang {
    const view = this.#document.defaultView;
    const fromUrl = new URLSearchParams(view?.location.search ?? '').get('lang');
    if (isLang(fromUrl)) return fromUrl;
    const stored = this.#readStored();
    if (isLang(stored)) return stored;
    const browser = view?.navigator.language.toLowerCase() ?? '';
    return browser.startsWith('uk') || browser.startsWith('ru') ? 'uk' : 'en';
  }

  #readStored(): string | null {
    try {
      return this.#document.defaultView?.localStorage.getItem(STORAGE_KEY) ?? null;
    } catch {
      return null;
    }
  }

  #writeStored(lang: Lang): void {
    try {
      this.#document.defaultView?.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be blocked (private mode); the choice then lasts for this visit only.
    }
  }
}
