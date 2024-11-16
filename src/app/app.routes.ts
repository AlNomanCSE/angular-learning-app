import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { IfelseComponent } from './components/ifelse/ifelse.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';

export const routes: Routes = [
    {
        path: 'atti',
        component: AttributeDirectiveComponent,
    },
    {
        path: 'data',
        component: DataBindingComponent,
    },
    {
        path: 'struct',
        component: StructuralDirectiveComponent,
    },
    {
        path: 'ifelse',
        component: IfelseComponent,
    },
    {
        path:'templateForm',
        component:TemplateComponent
    },
    {
        path:'reactiveForm',
        component:ReactiveComponent
    }
];
