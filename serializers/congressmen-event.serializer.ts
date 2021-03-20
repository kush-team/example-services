import { Serializer } from '../interfaces/serializer';
import { CongressmenEvent } from '../models/congressmen-event.model';
import { Image } from '../models/image.model';

export class CongressmenEventSerializer implements Serializer {
  fromJson(json: any): CongressmenEvent {
    const congressmenEvent = new CongressmenEvent();
    congressmenEvent.id = json.id;
    congressmenEvent.title = json.title;
    congressmenEvent.description = json.description;
    congressmenEvent.eventURL = json.eventURL;
    congressmenEvent.contactEmail = json.contactEmail;
    congressmenEvent.contactPhone = json.contactPhone;
    congressmenEvent.date = json.date;
    congressmenEvent.published = json.published;
    congressmenEvent.validationStartTime = json.validationStartTime;
    congressmenEvent.validationEndTime = json.validationEndTime;
    if (json.picture) {
      congressmenEvent.image = new Image(json.picture.id, json.picture.imageType, json.picture.name, json.picture.url);
    }
    return congressmenEvent;
  }

  toJson(congressmenEvent: CongressmenEvent): any {
    return {
      id: congressmenEvent.id,
      title: congressmenEvent.title,
      description: congressmenEvent.description,
      eventURL: congressmenEvent.eventURL,
      contactPhone: congressmenEvent.contactPhone,
      contactEmail: congressmenEvent.contactEmail,
      date: congressmenEvent.date,
      published: congressmenEvent.published,
      validationStartTime: congressmenEvent.validationStartTime,
      validationEndTime: congressmenEvent.validationEndTime,
      picture: congressmenEvent.image ? congressmenEvent.image.id : null
    };
  }
}

