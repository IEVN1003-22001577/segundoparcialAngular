import { Routes } from '@angular/router';
 
export const routes: Routes = [
 
    {
        path:'formulario',
        children:[
            {
                path:'distancia',
                loadComponent:() =>
                    import('./formulario/distancia/distancia').then(
                        (c)=>c.Distancia
                    ),
            },
            {
                path:'zodiago',
                loadComponent:() =>
                    import('./formulario/zodiago/zodiago').then(
                        (c)=>c.Zodiago
                    ),
            }
        ]
    },
    {
        path:'escuela',
        children:[
            {
                path:'listaescuela',
                loadComponent:() =>
                    import('./escuela/listaescuela/listaescuela').then(
                        (c)=>c.Listaescuela
                    ),
            }
        ]
    },
 
 
    { path:'', redirectTo: 'admin', pathMatch: 'full' },
    { path:'**', redirectTo: 'admin' },
];