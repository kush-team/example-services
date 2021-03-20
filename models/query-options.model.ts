import { QueryBuilder } from '../interfaces/query-builder';

export class QueryOptions implements QueryBuilder {
  private queryMap = new Map<string, string>();

  constructor(limit: number = 20, skip: number = 0) {
    this.queryMap.set('skip', `${skip}`);
    this.queryMap.set('limit', `${limit}`);
  }

  public setParam(paramName: string, value: string): void {
    this.queryMap.set(paramName, value);
  }

  public toQueryMap(): Map<string, string> {
    return this.queryMap;
  }

  toQueryString() {
    let queryString = '';
    this.toQueryMap().forEach((value: string, key: string) => {
      queryString = queryString.concat(`${key}=${value}&`);
    });

    return queryString.substring(0, queryString.length - 1);
  }
}
