export class TimelineBox {
    /* used in the timeline box near the timeline root */
    public id: number;
    public title: string;
    public date: string;
    public summary: string;

    /* used in the in-depth summary box */
    public description: string;
    public imagePath: string;

    constructor(id: number, title: string, date: string, summary: string, description: string, imagePath: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.summary = summary;
        this.description = description;
        this.imagePath = imagePath;
    }
}