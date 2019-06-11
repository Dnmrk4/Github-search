import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  getProfileInfo(username: string) {
    return this.http.get((environment.search) + username);
  }


  constructor(private http: HttpClient) {
    // this.repo = new Repo('', 0, '', '', '');
  }
}
