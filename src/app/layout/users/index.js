import route from "./users.route";
import component from "./users.component";

angular.module( 'app.layout.users', [] )
  .config( route )
  .component( 'layoutUsers', component )
;
