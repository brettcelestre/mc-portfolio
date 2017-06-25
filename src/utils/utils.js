
// Test Data
var data = [
  {
    'title': 'Grant',
    'year': 2017,
    'sizes': {
      'large': {
          'src': './img/Grant_0_Large.jpg',
          'width': 1500,
          'height': 1001
      },
      'medium': {
          'src': './img/Grant_0_Medium.jpg',
          'width': 1100,
          'height': 734
      },
      'small': {
        'src': './img/Grant_0_Small.jpg',
        'width': 800,
        'height': 534
      }
    }
  },1,2,3,4,5,6
];

var $viewer = document.getElementsByClassName('viewer'),
    $size = document.getElementsByClassName('size'),
    currentSize = '';
    $next = document.getElementById('next'),
    $back = document.getElementById('back'),
    current = 0;

// Next Image
$next.onclick = function next(){
  if ( current <= data.length ){
    current++;
    console.log(current);
    $viewer[0]['innerHTML'] = '<img src="' + data[current]['sizes'][currentSize]['src'] + '" width="' + data[current]['sizes'][currentSize]['width'] + '" height="' + data[current]['sizes'][currentSize]['height'] + '"/>';
  }
}
// Previous Image
$back.onclick = function back(){
  if ( current > 0 ){
    current--;
    console.log(current);
    $viewer[0]['innerHTML'] = '<img src="' + data[current]['sizes'][currentSize]['src'] + '" width="' + data[current]['sizes'][currentSize]['width'] + '" height="' + data[current]['sizes'][currentSize]['height'] + '"/>';
  }
}

// Checks window width & height and updates correct image resolution
function updateImageSize(){

  // XLARGE / TV

  // LARGE / DESKTOP
  // TODO: Also height
  if ( window.self.innerWidth >= 1100 ) {
    currentSize = 'large';
    $size[0].innerHTML = '<h5>Large</h5>'
    // Updates Image
    $viewer[0]['innerHTML'] = '<img src="' + data[current]['sizes'][currentSize]['src'] + '" width="' + data[current]['sizes'][currentSize]['width'] + '" height="' + data[current]['sizes'][currentSize]['height'] + '"/>';

  // MEDIUM / TABLET
  // TODO: Also height
  } else if ( 1099 >= window.self.innerWidth && 800 <= window.self.innerWidth) {
    currentSize = 'medium';
    $size[0].innerHTML = '<h5>Medium</h5>';
    // Updates Image
    $viewer[0]['innerHTML'] = '<img src="' + data[current]['sizes'][currentSize]['src'] + '" width="' + data[current]['sizes'][currentSize]['width'] + '" height="' + data[current]['sizes'][currentSize]['height'] + '"/>';

  // SMALL / MOBILE
  // TODO: Also height
  } else if ( 799 >= window.self.innerWidth ) {
    currentSize = 'small';
    $size[0].innerHTML = '<h5>Small</h5>';
    // Updates Image
    $viewer[0]['innerHTML'] = '<img src="' + data[current]['sizes'][currentSize]['src'] + '" width="' + data[current]['sizes'][currentSize]['width'] + '" height="' + data[current]['sizes'][currentSize]['height'] + '"/>';
  }
}
// Initalize first image
updateImageSize();
window.onresize = updateImageSize;
