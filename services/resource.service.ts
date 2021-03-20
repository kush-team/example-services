import { Injectable, Inject } from '@angular/core';
import { Observable } from  "rxjs";
import { Resource } from '../models/resource.model';
import { QueryOptions } from '../models/query-options.model';
import { Serializer } from '../interfaces/serializer';
import { HttpClient } from  "@angular/common/http";
import { map, catchError } from 'rxjs/operators';

export class ResourceService<T extends Resource> {

  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private serializer:Serializer
    ) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  list(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(map((data: any) => this.convertData(data)));
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  action(action: string): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${action}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  private convertData(data: any): T[] {
    return data.map((item: any) => this.serializer.fromJson(item));
  }
}