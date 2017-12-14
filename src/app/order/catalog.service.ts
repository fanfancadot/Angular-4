import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../book.model';
import { HttpClient } from '@angular/common/http';

const url='https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  constructor(private HttpClient : HttpClient) { }

  getList() : Observable<Book[]>{
    return this.HttpClient.get<Book[]>(url);
  }
}
