import "./layout";
import "./ui";
import "./services";
import "./helpers";
import "./filters";

import appConfig from "./index.config";
import route from "./index.route";
import runBlock from "./index.run";
// import './components';

angular.module( 'jsTask',
                [
                  'ui.router', 'ngMaterial',

                  'app.layout',
                  'app.ui',
                  'app.services',
                  'app.helpers',
                  'app.filters'
                ] )

  .config( appConfig )
  .config( route )

  .run( runBlock )
;
