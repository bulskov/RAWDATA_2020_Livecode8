define(['knockout'], (ko) => {
    let currentTemplate = ko.observable('person-list');
    let persons = [
        { name: ko.observable("Peter"), age: ko.observable(23) },
        { name: ko.observable("Joe"), age: ko.observable(21) }
    ];
    let selectedPerson = ko.observable();


    let selectPerson = (person) => {
        console.log(person);
        selectedPerson(person);
    }

    let addPerson = () => {
        currentTemplate("add-person");
    }

    let cancelAddPerson = () => {
        currentTemplate("person-list");
    } 

    selectedPerson.subscribe(function(newvalue) {
        console.log(newvalue);
    });

    return {
        currentTemplate,
        persons,
        selectedPerson,
        selectPerson,
        addPerson,
        cancelAddPerson
    };
});