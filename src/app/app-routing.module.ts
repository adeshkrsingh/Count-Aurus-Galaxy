import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GameoverComponent } from './gameover/gameover.component';
import { ScorepageComponent } from './scorepage/scorepage.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'module1',
        loadChildren: './module1/module1.module#Module1Module',
    },
    {
        path: 'module2',
        loadChildren: './module2/module2.module#Module2Module',
    },
    {
        path: 'over',
        component: GameoverComponent,
    },
    {
        path: 'score',
        component: ScorepageComponent,
    },
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
