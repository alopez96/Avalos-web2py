
var app = function() {

    var self = {};
    Vue.config.silent = false; // show all warnings
    // Extends an array
    self.extend = function(a, b) {
        for (var i = 0; i < b.length; i++) {
            a.push(b[i]);
        }
    };
    // Enumerates an array.
    var enumerate = function(v) { var k=0; return v.map(function(e) {e._idx = k++;});};




    $().ready (function (){
      $('#nav-home').click (function (event){
        event.preventDefault();
        var goTop = $('#home').offset().top;
        $("html, body").scrollTop(goTop);
      });

      $('#nav-edu').click(function (event){
         event.preventDefault();
        var goTop = $('#education').offset().top;
        $("html, body").animate({
          scrollTop: goTop
        }, 500);
      });

      $('#nav-exp').click(function (event){
        event.preventDefault();
        var goTop = $('#experience').offset().top;
        $("html, body").animate({
          scrollTop: goTop
        }, 500);
      });

      $('#nav-contact').click(function (event){
        event.preventDefault();
        var goTop = $('#contact').offset().top;
        $("html, body").animate({
          scrollTop: goTop
        }, 500);
      });
    });


    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            users: [],
            logged_in: false,
            name: null,
        },
        methods: {
          add_user: self.add_user,
        }

    });

    // self.get_users();
    $("#vue-div").show();

    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});
