import { Github } from '../github';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Component({
  // selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Github;
  result: any;
  githubService: any;


  constructor(private userService: GithubService, private http: HttpClient) {
    this.user = new Github('', 0, '', '', '', '', ''); { }
  }
  getRepos() {
    const repos = (environment.apiUrl + (environment.acesstoken));

    this.http.get(repos).subscribe((data) => {
      this.result = data;
      console.log(this.result);

    });
  }


  ngOnInit() {
    this.githubService.githubInformation();
    this.user = this.githubService.github;

  }

}
