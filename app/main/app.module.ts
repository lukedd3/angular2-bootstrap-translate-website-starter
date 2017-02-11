import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';
import { AlertModule } from 'ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap';
import { TranslationBaseHrefFactory }  from '../translation/translation-base-href.factory';

import { AppRoutingModule } from '../routing/app-routing.module';

import { AppComponent }  from '../module-app/app.component';
import { FirstComponent }  from '../module-first/first.component';
import { SecondComponent }  from '../module-second/second.component';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/resources/i18n', '.json'),
      deps: [Http]
    }),
    AlertModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [ AppComponent, FirstComponent, SecondComponent ],
  bootstrap:    [ AppComponent ],
    providers: [{
        provide: APP_BASE_HREF,
        useFactory: (translate: TranslateService) => { return TranslationBaseHrefFactory.getBaseHref(translate) },
        deps: [TranslateService]
    }]
})
export class AppModule {
}
