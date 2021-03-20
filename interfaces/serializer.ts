import { Resource } from '../models/resource.model';
import { Injectable } from '@angular/core';

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}