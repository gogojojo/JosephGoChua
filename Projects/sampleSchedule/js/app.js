var scheduleApp = angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
scheduleApp.controller('mainController',['$scope', '$firebase',function($scope, $firebase) {
  
  // connect to firebase 
  var ref = new Firebase("https://fiery-torch-2332.firebaseIO.com/days");  
  var fb = $firebase(ref);

  var syncObject = fb.$asArray();
  syncObject.$bindTo($scope, 'days');


  // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });    

  };
  
}]);