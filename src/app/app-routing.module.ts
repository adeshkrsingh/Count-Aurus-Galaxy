import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'project',
        loadChildren: './module1/module1.module#Module1Module',
    },
    {
        path: 'user',
        loadChildren: './authorization/authorization.module#AuthorizationModule',
    },
    // {
    //   path: 'game',
    //   loadChildren: './game/game.module#GameModule',
    // },
    // {
    //   path: 'p1',
    //   loadChildren: './shared/shared.module#SharedModule',
    // },
    {
        path: '**',
        component: PagenotfoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
