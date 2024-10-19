export class Course {
    name : string
    category : string 
    duration_course : number
    teaches_name : string
    startDate : Date
    description : string
    imgSrc : string

    constructor(name : string, category: string, duration_course : number, teaches_name : string, startDate: Date, { description = "", imgSrc = "../../../assets/img/default-img.jpg" } = {}) {
        this.name = name;                  
        this.category = category;           
        this.duration_course = duration_course; 
        this.teaches_name = teaches_name;
        this.startDate = startDate;      
        this.description = description;     
        this.imgSrc = imgSrc;         
    }
}