import { Resource } from './resource.model';
import { Image } from './image.model';

export class CongressmenEvent implements Resource {
  public id: number;
  public title: string;
  public description: string;
  public eventURL: string;
  public contactEmail: string;
  public contactPhone: string;
  public date: string;
  public validationStartTime: string;
  public validationEndTime: string;
  public image: Image;
  public published: boolean;


  public status(): string {
    if (this.published) {
      return 'Publicado';
    } else {
      return 'Borrador';
    }
  }

  public editable(): boolean {
    return new Date() < new Date(this.date);
  }

  public inRange(): boolean {
    return ((new Date() >= new Date(this.validationStartTime)) && (new Date() <= new Date(this.validationEndTime)))
  }
}
