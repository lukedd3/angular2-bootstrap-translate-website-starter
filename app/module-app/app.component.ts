import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { TranslateService } from 'ng2-translate';
import { Language }  from '../translation/language.enum';

@Component({
	moduleId: module.id,
	selector: 'todo-app',
	templateUrl: 'app.component.html'
})

export class AppComponent {
  public isCollapsed: boolean = true;

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private translate: TranslateService) {
  
  }

  private availableLanguages(): Language[]{
  	return Language.values();
  }

  private getCurrentRelativePathWithChangedLanguagePart(newLanguage: Language): string {
  	let currentRelativePath = location.pathname;
  	let paths: string[] = currentRelativePath.split('/');
    paths[1] = newLanguage.getName();
    let newRelativePath = paths.join("/");
    return newRelativePath;
  }

}