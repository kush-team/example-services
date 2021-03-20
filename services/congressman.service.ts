import { Congressman } from './../models/congressman.model';
import { Injectable } from '@angular/core';
import { CongressmanSerializer } from '../serializers/congressman.serializer';
import { ResourceService } from '../services/resource.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CongressmanService extends ResourceService<Congressman>{

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.apiURL,
      'congressmen',
      new CongressmanSerializer());
  }
}
