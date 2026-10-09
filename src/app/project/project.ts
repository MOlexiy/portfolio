import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LINKS } from '../content/links';
import type { Content, Project } from '../content/content.model';

@Component({
  selector: 'app-project',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project.html',
  styleUrl: './project.scss',
  host: {
    '[attr.id]': 'project().id',
    '[class]': '"project project--" + project().id',
  },
})
export class ProjectComponent {
  readonly project = input.required<Project>();
  readonly labels = input.required<Content['projects']>();
  /** The first project is above the fold on wide screens: load its image eagerly. */
  readonly eager = input(false);

  protected readonly links = computed(() => LINKS.projects[this.project().id]);
}
