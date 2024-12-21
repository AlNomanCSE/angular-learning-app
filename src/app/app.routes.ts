import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { IfelseComponent } from './components/ifelse/ifelse.component';


import { PipecomponentComponent } from './components/pipecomponent/pipecomponent.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';

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
        component:TemplateFormComponent
    },
   
    {
        path: 'pipe',
        component:PipecomponentComponent
    },
    {
        path:'reactiveForm',
        component:ReactiveFormComponent
    },
    {
        path:'api',
        component:ApiIntegrationComponent
    }
   
];
