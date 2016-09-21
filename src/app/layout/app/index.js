import route from "./app.route";
import component from "./app.component";

angular.module( 'app.layout.app', ['app.services'] )
  .config( route )
  .component( 'layoutApp', component )
;
