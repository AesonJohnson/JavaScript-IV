// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchphrase = attributes.catchphrase
    }
    demo(){
        return `Today  we are learning about ${this.subject}.`
    }
    grade(){
        `${this.student.name} receives a perfect score on ${this.subject}.`
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standup(){
        return `${this.name} announces to ${this.channel}, @channel standy times!`
    }
    debugsCode(){
        return `${this.name} debugs ${this.student.name}'s code on ${this.subject}.`
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        return `${favSubjects}.`
    }
    PRAssignment(){
        return `${this.student.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge(){
        return `${this.student.name} has begun sprint challenge on ${this.subject}.`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const janna = new Instructor({
    name: 'Janna',
    location: 'New York City',
    age: 32,
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: `What does the clown cowboy say? Yeehonk`
});

const nico = new ProjectManager({
    name: 'Nico',
    age: '40',
    location: 'Philadelphia',
    favLanguage: 'Python',
    specialty: 'Redux',
    catchphrase: `Give me your dungarees`,
    gradClassName: 'CS25',
    favInstructor: 'Literally anyone but Fred'
})

const felicity = new ProjectManager({
    name: 'Felicity',
    age: '25',
    location: 'Las Vegas',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchphrase: `:3c`,
    gradClassName: 'WEB01',
    favInstructor: 'Janna'
})

const margaret = new Student({
    name: 'Margaret',
    age: '29',
    location: 'Seattle',
    previousBackground: 'Barista',
    className: 'WEB02'
    favSubjects: 'Javascript'

})

const briant = new Student({
    name: 'Brian',
    age: '19',
    location: 'Walla Walla',
    previousBackground: 'High school student',
    className: 'WEB03'
    favSubjects: 'CSS'

})

this.previousBackground = attributes.previousBackground,
this.className = attributes.className,
this.favSubjects = attributes.favSubjects

console.log(fred.speak());
console.log(janna.location);
console.log(nico.favInstructor);
