export default function highlightFilter( $sce ) {
  'ngInject';
  return function ( text, phrase ) {
    return phrase
      ? $sce.trustAsHtml( text.replace( new RegExp( '(' + phrase + ')', 'gi' ),
                                        '<span class="highlighted">$1</span>' ) )
      : text;
  };
}
