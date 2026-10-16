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
                        (c)=>c.Listaescuela // Corregido con minúscula
                    ),
            },
            {
                path:'cinepolis',
                loadComponent:() =>
                    import('./escuela/cinepolis/cinepolis').then(
                        (c)=>c.Cinepolis
                    ),
            },
            {
                path:'ventas',
                loadComponent:() =>
                    import('./ventas/ventas').then( // Ajusta './ventas/ventas' si está en la raíz de app, o './escuela/ventas/ventas' si está dentro de escuela
                        (c)=>c.Ventas
                    ),
            }
        ]
    },
 
    { path:'', redirectTo: 'admin', pathMatch: 'full' },
    { path:'**', redirectTo: 'admin' },
];