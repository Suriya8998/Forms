import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TempletformComponent } from './templetform/templetform.component';
const routes: Routes = [

  {
    path:'temp',
   component:TempletformComponent
  
  },
  {
    path:'react',
   component:ReactiveformComponent
  
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
