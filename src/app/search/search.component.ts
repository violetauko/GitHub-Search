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
      this.searchResult = new User(data.avatar_url,data.login, data.followers_url,data.following_url)
    }).catch(error=>{console.error(error);});
  }

}
