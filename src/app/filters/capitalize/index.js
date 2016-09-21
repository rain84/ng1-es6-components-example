import filter from "./capitalize.filter";

angular.module( 'app.filters.capitalize', [] )
  .filter( 'capitalize', filter )
;
