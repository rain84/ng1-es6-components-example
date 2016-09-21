import "./app";
import "./home";
import "./users";

angular.module( 'app.layout', [
  'app.layout.app',
  'app.layout.home',
  'app.layout.users'
] )
;

