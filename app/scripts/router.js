GftStyleguide.Router.map(function () {
  this.resource('css', function() {
    this.route('overall');
    this.route('buttons');
  });
  this.resource('html');
});


