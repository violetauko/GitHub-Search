import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { GithubSearchService } from '../../app/github-search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    githubsearch:GithubSearchService;
    user!: User;

  constructor(githubsearch: GithubSearchService) { 
    this.githubsearch = githubsearch;
  }

  ngOnInit(): void {
  this.githubsearch.getUser()
    .then(data=>{
      this.user = new User(data.avatar_url,data.login, data.followers_url,data.following_url)
    }).catch(error=>{console.error(error)})
  }
}
