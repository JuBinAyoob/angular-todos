'use strict';

// Define the `todosApp` module
var todosApp = angular.module('todosApp', []);

// Define the `PhoneListController` controller on the `todosApp` module
todosApp.controller('TodosListController', function TodosListController($scope) {
  let count = 3;
  $scope.todos = [
    {
      id:1,
      des: 'waaasdvsdg 1'
    }, {
      id:2,
      des: 'sdgfd 2'
    }, {
      id:3,
      des: 'atodo 3'
    }
  ];

  $scope.todoAdd = function(){
    let id = ++count;
    $scope.todos.push( { id:id, des: $scope.addTodo } );
  };

  $scope.todoDelete = function(id){
    console.log(id);
    
    for(let i=0; i < $scope.todos.length;i++){
      if($scope.todos[i].id==id){
        $scope.todos = $scope.todos.slice(0,i).concat($scope.todos.slice(i+1));
      }
    }
  };

});
