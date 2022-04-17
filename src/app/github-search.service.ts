import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient} from '@angular/common/http';
import { throwError,catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  searchRepository: any;

  constructor(private http:HttpClient) { }
  getUser(): Promise<any> {
    return this.http.get("https://api.github.com/users/violetauko?Authorization=Basic " +environment.apiKey)
    .pipe(
      catchError(err=>{
        console.log(err);
        return throwError(
          'Something bad happened; please try again later.');
      })
    ).toPromise();
  }
  getRepositories(): Promise<any> {
    return this.http.get("https://api.github.com/users/violetauko?Authorization=Basic " +environment.apiKey)
    .pipe(
      catchError(err=>{
        console.log(err);
        return throwError(
          'Something bad happened; please try again later.');
      })
    ).toPromise();
  }
  searchUser(login: string): Promise<any> {
    return this.http.get(`https://api.github.com/users/${login}`)
    .pipe(
      catchError(err=>{
        console.log(err);
        return throwError(
          'Something bad happened; please try again later.');
      })
    ).toPromise();
  }
  fetchFollowers(followers_url: string): Promise<any> {
    return this.http.get(`${followers_url}`)
    .pipe(
      catchError(err=>{
        console.log(err);
        return throwError(
          'Something bad happened; please try again later.');
      })
    ).toPromise();
  }
  fetchFollowing(following_url: string): Promise<any> {
    return this.http.get(`${following_url}`)
    .pipe(
      catchError(err=>{
        console.log(err);
        return throwError(
          'Something bad happened; please try again later.');
      })
    ).toPromise();
  }
}
