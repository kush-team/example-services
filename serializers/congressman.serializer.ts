import { Serializer } from '../interfaces/serializer';
import { Congressman} from '../models/congressman.model';
import { Image } from '../models/image.model';

export class CongressmanSerializer implements Serializer {
  fromJson(json: any): Congressman {

    const congressman = new Congressman();
    congressman.id = json.id;
    congressman.name = json.name;
    congressman.lastName = json.lastName;
    congressman.phone = json.phone;
    congressman.dni = json.dni;
    congressman.emailAddress = json.emailAddress;
    congressman.gender = json.gender;
    congressman.images = [];
    congressman.isValid = json.isValid;
    congressman.attempIp = json.attempIp;
    congressman.createdAt = json.createdAt;

    if (json.selfieList) {
      json.selfieList.forEach((selfie: any) => { congressman.images.push(new Image(selfie.id, selfie.imageType, selfie.name, selfie.url))});
    }
    return congressman;
  }

  toJson(congressman: Congressman): any {
    return {};
  }
}


