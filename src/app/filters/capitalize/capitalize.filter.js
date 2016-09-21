export default function capitalizeFilter() {
  return function ( input ) {
    input || (input = '');

    return input.charAt( 0 ).toUpperCase() + input.slice( 1 );
  };
}
