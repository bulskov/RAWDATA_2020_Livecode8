define(['knockout'], (ko) => {
    let currentTemplate = ko.observable('person-list');
    let persons = [
        { name: ko.observable("Peter"), age: ko.observable(23), level: ko.observable() },
        { name: ko.observable("Joe"), age: ko.observable(21), level: ko.observable() }
    ];

    let selectedPerson = ko.observable();

    let showDebug = ko.observable(false);

    let levels = [1, 2, 3, 4, 5, 6, 7];
    let selectedLevel = ko.observable([5]);

    selectedLevel.subscribe(() => {
        selectedPerson().level(selectedLevel()[0]);
    });


   let selectPerson = (person) => {
        console.log(person);
        selectedPerson(person);
    }

    let addPerson = () => {
        selectedPerson({ name: ko.observable(), age: ko.observable(), level: ko.observable() });
        currentTemplate("add-person");
    }

    let cancelAddPerson = () => {
        currentTemplate("person-list");
    } 

    let createPerson = () => {
        persons.push(selectedPerson());
        currentTemplate("person-list");
    }

    selectedPerson.subscribe(function(newvalue) {
        //console.log(newvalue);
    });

    return {
        currentTemplate,
        persons,
        selectedPerson,
        selectPerson,
        addPerson,
        cancelAddPerson,
        createPerson,
        levels,
        selectedLevel,
        showDebug
    };
});