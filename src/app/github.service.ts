import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { Github } from './github';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

  github: Github;


  userInformation() {
    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
      bio: string;
      repo: string;
    }
    const promise = new Promise((resolve, reject) => {
      var link = (environment.link);

      this.http.get<ApiResponse>(link).toPromise().then(
        (response) => {
          this.github.name = response.login;
          this.github.id = response.id;
          this.github.avatar_url = response.avatar_url;
          this.github.bio = response.bio;
          this.github.repos_url = response.repo;

          resolve();


          console.log(response.login);
        },
        (error) => {
          alert('error');
          reject(error);
        }
      );
    });
    return promise;
  }

  constructor(private http: HttpClient) {
    this.github = new Github('', 0, '', '', '', '', '');
  }
}
