export class Course {
    

    constructor(
        public name: string,
        public category: string,
        public duration: number,
        public teachesName: string,
        public dateStart: Date,
        public descripcion?: string, 
        public imagen?: string
    ) {}

    static fromJson(json: any): Course {
        return new Course(
            json.name,
            json.category,
            json.duration,
            json.teachesName,
            new Date(json.dateStart),
            json.descripcion,
            json.imagen
        );
    }
}