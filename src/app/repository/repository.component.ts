import { Component, OnInit } from '@angular/core';
import { Repository } from './repository';
import { GithubSearchService } from '../../app/github-search.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent implements OnInit {
  searchText!: string;
  searchResult!: Repository;

  githubsearch: GithubSearchService;
  repositories!: Repository;

  constructor(githubsearch: GithubSearchService) {
    this.githubsearch = githubsearch;
  }

  ngOnInit(): void {
    this.githubsearch
      .getRepositories()
      .then((data) => {
        this.repositories = new Repository(
          data.name,
          data.html_url,
          data.language,
          data.description
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  searchRepository(): void {
    console.log(this.searchText);
    this.githubsearch
      .searchRepository(this.searchText)
      .then(
        (data: {
          name: string;
          html_url: string;
          language: string;
          description: string;
        }) => {
          this.searchResult = new Repository(
            data.name,
            data.html_url,
            data.language,
            data.description
          );
        }
      );
  }
}
