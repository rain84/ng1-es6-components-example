import filter from "./highlight.filter";

angular.module( 'app.filters.highlight', [] )
  .filter( 'highlight', filter )
;
