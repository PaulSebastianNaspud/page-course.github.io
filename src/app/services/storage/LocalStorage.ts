import { Course } from "../../../models/course";

export class CourseService {
    static service: CourseService;
    static key = 'cursos';

    
    private constructor() {}

    static getInstance(): CourseService {
        if (!CourseService.service) {
            CourseService.service = new CourseService();
        }
        return CourseService.service;
    }

    getList(): Course[] {
        const listaString = localStorage.getItem(CourseService.key);
        if (!listaString) {
            return []; 
        }
        const listaJson = JSON.parse(listaString);
        return listaJson.map((cursoJson: any) => Course.fromJson(cursoJson));
    }

    saveList(listaCursos: Course[]): void {
        const listaString = JSON.stringify(listaCursos);
        localStorage.setItem(CourseService.key, listaString);
    }

    addCourse(curso: Course): void {
        const listaCursos = this.getList(); 
        listaCursos.push(curso); 
        this.saveList(listaCursos); 
    }
}

