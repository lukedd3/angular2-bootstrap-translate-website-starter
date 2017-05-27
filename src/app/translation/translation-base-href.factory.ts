import { TranslateService } from '@ngx-translate/core';
import { Language }  from '../translation/language.enum';

export class TranslationBaseHrefFactory {

  public static getBaseHref(translate: TranslateService): string {
    	let paths: string[] = location.pathname.split('/').splice(1, 1);
    	let languageUrlPart: string = paths[0];

		let translateLanguage: string = Language.EN.getName();
    	let baseHref: string = Language.EN.getBaseHref();
    	
		for (let i in Language.values()) {
				if(Language.values()[i].getName()===languageUrlPart){
    			translateLanguage = Language.values()[i].getName();
    			baseHref = Language.values()[i].getBaseHref();
    			break;
				}
		}

		translate.addLangs(Language.values().map(value => value.getName()));
		translate.setDefaultLang(Language.EN.getName());
    	translate.use(translateLanguage);

    	//console.log("factory: "+translate.currentLang);

    	return baseHref;
  }
}