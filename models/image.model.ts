export class Image {
    public id: number;
    public imageType: string;
    public name: string;
    public url: string;
    constructor (id: number, imageType: string, name: string, url: string) {
        this.id = id;
        this.imageType = imageType;
        this.name = name;
        this.url = url;
    }
}
