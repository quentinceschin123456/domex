export class ImgResolver {
    protected static ImgDico:any = {}

    public static registerImg(key:string,imgUrl:string){
        if (key && imgUrl && !this.ImgDico[key]){
            let img = new Image().src = imgUrl;
            this.ImgDico[key]= img;
        }
    }
    
    public static getImage(key:string): HTMLImageElement | undefined{
        return this.ImgDico[key];
    }
}