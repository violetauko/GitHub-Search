import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GithubSearchService } from '../../app/github-search.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  githubsearch:GithubSearchService;
  repository!:Repository

constructor(githubsearch: GithubSearchService) { 
  this.githubsearch = githubsearch;
}

ngOnInit(): void {
this.githubsearch.getRepositories()
  .then(data=>{
    this.repository = new Repository(data.name,data.html_url,data.language,data.description)
  }).catch(error=>{console.error(error)})
}

  


}
