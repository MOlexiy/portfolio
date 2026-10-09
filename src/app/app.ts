import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LINKS } from './content/links';
import type { Lang } from './content/content.model';
import { LanguageService } from './content/language.service';
import { ProjectComponent } from './project/project';

@Component({
  selector: 'app-root',
  imports: [ProjectComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly #language = inject(LanguageService);

  protected readonly t = this.#language.t;
  protected readonly lang = this.#language.lang;
  protected readonly links = LINKS;
  protected readonly langs: Lang[] = ['en', 'uk'];

  protected setLang(lang: Lang): void {
    this.#language.set(lang);
  }
}
