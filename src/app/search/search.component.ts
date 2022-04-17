import { Component,OnInit } from '@angular/core';
import { User } from '../user/user';
import { GithubSearchService } from '../github-search.service'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText!: string;
  searchResult!: User;
  followers: User[] = [];
  following: User[] = [];
  githubsearch: GithubSearchService;
  constructor(githubsearch: GithubSearchService) { 
    this.githubsearch = githubsearch;
  }

  ngOnInit(): void {
  }
  searchUser(): void {
    console.log(this.searchText);
    this.githubsearch.searchUser(this.searchText)
    .then(data=>{
      this.searchResult = new User(data.avatar_url,data.login, data.followers_url,data.following_url);
      //gets followers
      this.githubsearch.fetchFollowers(data.followers_url).then(
        result =>{
          this.followers = result
        }).catch(error=>{console.error(error);});
        //gets followings
        this.githubsearch.fetchFollowing(data.following_url.slice(0, data.following_url.indexOf('{'))).then(
          result =>{
            this.following = result
          }).catch(error=>{console.error(error);});
    }).catch(error=>{console.error(error);});
  }

}
