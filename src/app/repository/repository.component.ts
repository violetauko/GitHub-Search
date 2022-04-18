import { Component, OnInit } from '@angular/core';
import { Repository } from './repository';
import { GithubSearchService } from '../../app/github-search.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent implements OnInit {
  
  searchResult!: Repository
  repositories:Repository[] = [];

  githubsearch: GithubSearchService;
  searchText: any;
  

  constructor(githubsearch: GithubSearchService) {
    this.githubsearch = githubsearch;
  }

  ngOnInit(): void {
    this.githubsearch.getRepositories().then((repositories) => {
        this.repositories = repositories
      })
      .catch((error) => {
        console.error(error);
      });
  }
  searchRepositories(): void {
    console.log(this.searchText);
    this.githubsearch
      .searchRepositories(this.searchText)
      .then((searchResult) => {
        console.log(searchResult);
        this.repositories = searchResult
           
})
  }

}
