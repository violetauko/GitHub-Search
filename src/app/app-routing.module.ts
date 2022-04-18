import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repository', component: RepositoryComponent},
  { path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
