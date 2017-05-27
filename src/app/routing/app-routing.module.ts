import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { FirstComponent }  from '../module-first/first.component';
import { SecondComponent }  from '../module-second/second.component';

import { TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '', redirectTo: '/first-component', pathMatch: 'full',
    data: { titleTranslationPath: 'TITLE.FIRST_COMPONENT', metaDescriptionTranslationPath:'META_DESC.FIRST_COMPONENT' }
  },
  {
    path: 'first-component',  component: FirstComponent,
    data: { titleTranslationPath: 'TITLE.FIRST_COMPONENT', metaDescriptionTranslationPath:'META_DESC.FIRST_COMPONENT' }
  },
  {
    path: 'second-component',  component: SecondComponent,
    data: { titleTranslationPath: 'TITLE.SECOND_COMPONENT', metaDescriptionTranslationPath:'META_DESC.SECOND_COMPONENT' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

  constructor(
    private router: Router,
  	private activatedRoute: ActivatedRoute,
  	private translateService: TranslateService,
  	private titleService: Title,
  	private metaService: Meta
  ){
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .map(route => {
    while (route.firstChild) route = route.firstChild;
    return route;
    })
    .filter(route => route.outlet === 'primary')
    .mergeMap(route => route.data)
    .subscribe((event) => {
      translateService.get(event['titleTranslationPath'])
      .subscribe((res: string) => {
        this.titleService.setTitle(res);
      });
      translateService.get(event['metaDescriptionTranslationPath'])
      .subscribe((res: string) => {
      	var tag = { name: 'description', content: res };
      	let attributeSelector : string = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
      });
    });
  }

}