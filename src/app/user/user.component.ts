import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { GithubSearchService } from '../../app/github-search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  searchText!: string;
  searchResult!: User;
  followers: User[] = [];
  following: User[] = [];

  githubsearch: GithubSearchService;
  user!: User;

  constructor(githubsearch: GithubSearchService) {
    this.githubsearch = githubsearch;
  }

  ngOnInit(): void {
    
  }
  searchUser(): void {
    console.log(this.searchText);
    this.githubsearch
      .searchUser(this.searchText)
      .then((searchResult) => {
        this.searchResult = searchResult
        
        //gets followers
        this.githubsearch
          .fetchFollowers(searchResult.followers_url)
          .then((result) => {
            this.followers = result;
          })
          .catch((error) => {
            console.error(error);
          });
        //gets followings
        this.githubsearch
          .fetchFollowing(
            searchResult.following_url.slice(0, searchResult.following_url.indexOf('{'))
          )
          .then((result) => {
            this.following = result;
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
