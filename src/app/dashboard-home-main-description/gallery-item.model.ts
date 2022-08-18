export class GalleryItem {
    /* used in the gallery section */
    public url: string = "../../assets/gallery_photos/";
    public alt: string;
    public description: string;
    public image: boolean;
    public style: string;  // optional if specific styles should be placed on the image

    constructor(image: boolean, url: string = "", alt:string = "", description: string = "", style: string = "") {
       this.url += url;
       this.alt = alt;
       this.description = description;
       this.image = image;
       this.style = style;
    }
}