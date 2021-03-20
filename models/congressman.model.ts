import { Resource } from './resource.model';
import { Image } from './image.model';

export class Congressman implements Resource {
  public id: number;
  public congressmenEvent: number;
  public name: string;
  public lastName: string;
  public dni: string;
  public gender: string;
  public phone: string;
  public emailAddress: string;
  public isValid: boolean;
  public attempIp: string;
  public images: Image[];
  public createdAt: number;
}
