import route from "./home.route";
import component from "./home.component";

angular.module( 'app.layout.home', [] )
  .config( route )
  .component( 'layoutHome', component )
;
