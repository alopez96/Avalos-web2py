
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
      $('#nav-about').click(function (event){
         // event.preventDefault();
        var goTop = $('#about').offset().top;
        $("html, body").animate({
          scrollTop: goTop
        }, 500);
      });
      $('#nav-portfolio').click(function (event){
         // event.preventDefault();
        var goTop = $('#portfolio').offset().top;
        $("html, body").animate({
          scrollTop: goTop
        }, 500);
      });
      $('#nav-contact').click(function (event){
         // event.preventDefault();
        var goTop = $('#contact').offset().top;
        $("html, body").animate({
          scrollTop: goTop
        }, 500);
      });
    });

    self.go_home = function(){
      if(!self.vue.home){
      console.log('home');
      self.vue.home = !self.vue.home;
      self.vue.services = false;
      self.vue.contact = false;
      }
    }

    self.go_services = function(){
      if(!self.vue.services){
      console.log('services');
      self.vue.services = !self.vue.services;
      self.vue.home = false;
      self.vue.contact = false;
      }
    }

    self.go_contact = function(){
      if(!self.vue.contact){
      console.log('contact');
      self.vue.contact = !self.vue.contact;
      self.vue.services = false;
      self.vue.home = false;
      }
    }

    self.send_message = function(){
      console.log('send_email');
      $.post(send_msg_url,{
         subject: self.vue.subject,
         message: self.vue.message,
      },function(data){
        if(data.success){
          console.log('message sent');
        }
      })
    }



    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            name: null,
            email: null,
            info: null,
            home: true,
            portfolio: true,
            services: false,
            contact: false,
            subject: "",
            message: "",
        },
        methods: {
          add_user: self.add_user,
          go_home: self.go_home,
          go_services: self.go_services,
          go_contact: self.go_contact,
          send_message: self.send_message,
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
