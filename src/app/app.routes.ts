import { Routes } from '@angular/router';
import { ListCourseComponent } from './sections/list-course/list-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AbountUsComponent } from './components/abount-us/abount-us.component';

export const routes: Routes = [
    {
        path : '',
        component: AbountUsComponent
    },
    {
        path : 'page/list-course',
        component: ListCourseComponent
    },
    {
        path : 'page/add-course',
        component: AddCourseComponent
    },
    
];
