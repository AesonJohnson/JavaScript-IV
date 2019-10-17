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

  