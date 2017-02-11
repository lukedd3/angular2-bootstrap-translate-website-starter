export class Language {
    private name: string;
    private baseHref: string;

    constructor(name:string, baseHref:string){
        this.name = name;
        this.baseHref = baseHref;
    }

    public getName(): string{
        return this.name;
    }

    public getBaseHref(): string{
        return this.baseHref;
    }

    public toString(){
        return "{"+this.name+", "+this.baseHref+"}";
    }

    //REMEMBER TO CHANGE values() METHOD AFTER ADDING A NEW LANGUAGE!!!
    static EN = new Language("en", "/en");
    static PL = new Language("pl", "/pl");
    public static values(): Language[]{
        return [Language.EN, Language.PL];
    }

}