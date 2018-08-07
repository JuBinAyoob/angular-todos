'use strict';

describe('TodosListController', function() {

  beforeEach(module('todosApp'));

  it('should create a `todos` model with 3 todo', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('TodosListController', {$scope: scope});

    expect(scope.todos.length).toBe(3);
  }));

});
