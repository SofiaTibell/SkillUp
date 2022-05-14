import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/*angular.module('demoSwipe', ['ngMaterial']) .controller('demoSwipeCtrl', function($scope) { $scope.onSwipeLeft = function(ev)   
  { alert('You swiped left!!'); };   
  $scope.onSwipeRight = function(ev)   
  { alert('You swiped right!!'); };   
  $scope.onSwipeUp = function(ev)   
  { alert('You swiped up!!'); };   
  $scope.onSwipeDown = function(ev)   
  { alert('You swiped down!!');  
   };   
  });  */