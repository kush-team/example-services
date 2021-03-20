import { Injectable } from '@angular/core';
import { CongressmenEventSerializer } from '../serializers/congressmen-event.serializer';
import { ResourceService } from '../services/resource.service';
import { CongressmenEvent } from '../models/congressmen-event.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CongressmenEventService extends ResourceService<CongressmenEvent>{

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.apiURL,
      'congressmenevents',
      new CongressmenEventSerializer());
  }
}
