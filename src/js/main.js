import angular from 'angular';
import { MainController } from "./main.controller";

// directive
import { MovieCard } from "./directive";



angular
  .module('app', [])
  .controller('MainController', MainController)
  .directive('movieCard', MovieCard);