var myApp = angular.module('myApp', []);

// Custom Service
myApp.service('helloWorldFromService', function() {
  this.sayHello = function() {
    return "Hello, World!"
  };
});

// Custom Filter
myApp.filter('slug', function () {
  return function (input) {
    if (input) {
      return input.toLowerCase().replace(' ', '-');
    }
  };
});
myApp.filter('slug', function () {
  return function (input) {
    if (input) {
      return input.toLowerCase().replace(' ', '-');
    }
  };
});

myApp.controller("MyTeacherCtrl", MyTeacherCtrl);

function MyTeacherCtrl(helloWorldFromService) {
  this.hello = helloWorldFromService.sayHello()

  this.teachers = [
    {name: "Rob Wilkinson"},
    {name: "Aaron Davis"},
    {name: "Greg Buckner"},
    {name: "Peter Egan"}
  ];

};

myApp.controller("MyStudentCtrl", MyStudentCtrl);

function MyStudentCtrl() {

  this.students = [
    "Alex Mason",
    "Alfred Kirakosian",
    "Ben Sam",
    "Bonnie Kim",
    "Daniel Kim",
    "Daniel Mendoza",
    "David Moupin",
    "David Petri",
    "Edwin Alegre",
    "Eyal Benmoshe",
    "Greg Rock",
    "James Kelly",
    "James Kim",
    "Jim Clark",
    "Joseph Chua",
    "Kelsey Jacobsen",
    "Maggie Wang",
    "Mariano Echegoyen",
    "Peter Krouse",
    "Rami Burpee",
    "Scott Shin",
    "Steven Chow"
  ];

};

