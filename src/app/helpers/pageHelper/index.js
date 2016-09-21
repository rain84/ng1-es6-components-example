import service from "./pageHelper.service";

angular.module( 'app.helpers.page', ['ui.router'] )
  .service( 'page', service )
;
