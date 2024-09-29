$(function(){

  // ex1
  $( ".a1" ).on( "click", function( event ) {
    event.preventDefault();
    $( this ).hide();
  });

   // ex2
   $( ".b1" ).on( "click", function( event ) {
     $( ".a2" ).toggle();
   });
    
  // ex3
   $( "#b2" ).on( "click", function() {
     $( "#d1" ).animate({
       width: "70%",
       opacity: 0.4,
       marginLeft: "0.6in",
       fontSize: "3em",
       borderWidth: "10px",
     }, 1500 );
   });


   // ex4
   $( "#b3" ).on( "click", function() {
    var myDiv = $( ".d2" );
     myDiv.show( "slow" );
     myDiv.animate({
       left:"+=200"
     }, 5000 );
    
     myDiv.queue(function() {
       var that = $( this );
       that.addClass( "newcolor" );
       that.dequeue();
     });
    
     myDiv.animate({
       left:"-=200"
     }, 1500 );
     myDiv.queue(function() {
       var that = $( this );
       that.removeClass( "newcolor" );
       that.dequeue();
     });
     myDiv.slideUp();
   });
    
   $( "#b4" ).on( "click", function() {
     var myDiv = $( ".d2" );
     myDiv.clearQueue();
     myDiv.stop();
    });

   // ex5
   $( ".b5" ).on( "click", function() {
     $( ".d3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
     $( ".d4" ).slideUp( 300 ).fadeIn( 400 );
   });

   // ex6
   $( ".b6" ).on( "click", function() {
     $( ".d5" )
       .animate({ left:"+=200px" }, 2000 )
       .animate({ top:"0px" }, 600 )
       .queue(function() {
         $( this ).toggleClass( "red" ).dequeue();
       })
       .animate({ left:"10px", top:"30px" }, 700 );
   });

   // ex7
   var horiz = $( "#d7" ).width() - 20,
     vert = $( "#d7" ).height() - 20;
    
   var btns = {
     bstt: function() {
       $( ".d6" ).stop( true, true );
     },
     bs: function() {
       $( ".d6" ).stop();
     },
     bsft: function() {
       $( ".d6" ).stop( false, true );
     },
     bf: function() {
       $( ".d6" ).finish();
     },
     bcf: function() {
       $( ".d6" ).clearQueue().finish();
     },
     bsff: function() {
       $( ".d6" ).stop( false, false );
     },
     bstf: function() {
       $( ".d6" ).stop( true, false );
     },
     bcs: function() {
       $( ".d6" ).clearQueue().stop();
     }
   };
    
   $( "button.b" ).on( "click", function() {
     btns[ this.id ]();
   });
    
   $( "#go" ).on( "click", function() {
     $( ".d6" )
       .clearQueue()
       .stop()
       .css({
         left: 10,
         top: 10
       })
       .animate({
         top: vert
       }, 3000 )
       .animate({
         left: horiz
       }, 3000 )
       .animate({
         top: 10
       }, 3000 );
   });


    // ex8
   var toggleFx = function() {
     $.fx.off = !$.fx.off;
   };
   $( ".b8" ).on( "click", toggleFx );
   $( ".i1" ).on( "click", function() {
     $( ".d8" ).toggle( "slow" );
   } );


   // // ex9
   $( "#og" ).on( "click", function() {
     $( ".d9" ).animate({ left: "+=100px" }, 2000 );
   });
    
   // Stop animation when button is clicked
   $( "#top" ).on( "click", function() {
     $( ".d9" ).stop();
   });
    
   // Start animation in the opposite direction
   $( "#back" ).on( "click", function() {
     $( ".d9" ).animate({ left: "-=100px" }, 2000 );
   });



   // ex10
   $( ".a2" ).on( "click", function() {
     $( "#d10" ).fadeIn( 3000, function() {
       $( ".spa" ).fadeIn( "slow" );
     });
     return false;
   });

   
   // ex11
   $( "#btn1" ).on( "click", function() {
     function complete() {
       $( "<div>" ).text( this.id ).appendTo( "#log" );
     }
     $( "#box1" ).fadeOut( 1600, "linear", complete );
     $( "#box2" ).fadeOut( 1600, complete );
   });
    
   $( "#btn2" ).on( "click", function() {
     $( "div" ).show();
     $( "#log" ).empty();
   });

   // ex12
   $( "#one, #two, #three" ).on( "click", function() {
     $( this ).fadeTo( "fast", Math.random() );
   });

   // ex13
   $( ".b10" ).first().on( "click", function() {
     $( ".pup" ).first().fadeToggle( "slow", "linear" );
   } );

   // ex14
   $(".pao").on( "click", function () {
     if ( $( ".d11" ).first().is( ":hidden" ) ) {
       $( ".d11" ).slideDown( "slow" );
     } else {
       $( ".d11" ).hide();
     }
   });


   // ex15
   $( ".b12" ).on( "click", function() {
     $( ".shao" ).slideToggle( "slow" );
   });

   // ex16
   $(".lao").on( "click", function() {
     if ( $( ".d12" ).first().is( ":hidden" ) ) {
       $( ".d12" ).show( "slow" );
     } else {
       $( ".d12" ).slideUp();
     }
   });

   // ex17
    $('.b13').on ("click", function(){
        $('.box23 p').after ("<b>HELLO</b>");
    });


    // ex18
    $('.b14').on ("click", function(){
        $('.box24 p').before ("<b>HELLO</b>");
    });

    // ex19
    $('.b15'). on ("click", function(){
        $('.box22 p:contains("Name")').css ("background-color","tomato");

    });

    // ex20
    $('b16').on ("click", function(){
        $('.box20 p').css ("font-size","30px");
    });
    $('.b17').on ("click", function(){
        $('.box20 p').css ("font-weight","700");
    });
    $('.b18').on ("click", function(){
        $('.box20 p').css ("font-family","cursive");
    });
    $('.b19').on ("click", function(){
        $('.box20 p').css ("color","green");
    });

    // ex21
    $('.box19 p').on ("click", function(){
        $(this).slideUp(800);
    });

    // ex22
    $('.b20').on ("click", function(){
        $('.box18').css ("border-radius","35px 0px")
    })
    
    $('.b21').on ("click", function(){
        $('.box18').css ("border-radius","0px 35px")
    })

    // ex23
    $('.b22').on ("dblclick", function(){
        $('.box25').css ("background-color","tomato");
    });

    // ex24
    $('.b23').on ("click", function(){
        $('.box16 p').css ("color","red");
    });
    // ex25
    $('.b24').on ("click", function(){
        $('.box15 p').css ("text-align","end");
    });

    // ex26
    $('.b25').on ("click", function(){
        $('.box14').css ("border-radius","5px");
    });
    
    // ex27
    $('.b26').on ("click", function(){
        $('.box13').css ("border-radius","50%");
    });
    
    // ex28
    $('.b27').on ("click", function(){
        $('.box12').css ("background-color","green");
    });

    // ex29
    $('.b28').on ("click", function(){
        $('.box11').css ("text-decoration","underline");
    });

    // ex30
    $('.b29').on ("click", function(){
        $('.box10').css("border","5px solid green");
    });

    // ex31
    (function() {
      var inputTitle = $( "input" ).attr( "title" );
      $( ".btnra" ).on( "click", function() {
        var input = $( this ).next();
     
        if ( input.attr( "title" ) === inputTitle ) {
          input.removeAttr( "title" )
        } else {
          input.attr( "title", inputTitle );
        }
     
        $( "#logi" ).html( "input title is now " + input.attr( "title" ) );
      });
    });

    // ex32
    $( ".pp3" ).even().removeClass( "bluee" );

    // ex33
    $( "#result1" ).append( $( ".p5" ).first().hasClass( "selected" ).toString() );
    $( "#result2" ).append( $( ".p5" ).last().hasClass( "selected" ).toString() );
    $( "#result3" ).append( $( ".p5" ).hasClass( "selected" ).toString() ) ;

    // ex34
    $( ".pp4" ).last().addClass( "selected highlight" );

    // ex35
    $( ".dcss" ).on( "click", function() {
      var color = $( this ).css( "background-color" );
      $( ".spcss" ).html( "That div is <span style='color:" +
        color + ";'>" + color + "</span>." );
    });

    // ex36
    $( ".dbss" ).on( "click", function() {
      var html = [ "The clicked div has the following styles:" ];
     
      var styleProps = $( this ).css([
        "width", "height", "color", "background-color"
      ]);
      $.each( styleProps, function( prop, value ) {
        html.push( prop + ": " + value );
      });
     
      $( ".pcss" ).html( html.join( "<br>" ) );
    });

    // ex37
    $( ".dihi" ).one( "click", function() {
      $( this ).height( 30 ).css({
        cursor: "auto",
        backgroundColor: "green"
      });
    });

    // ex38
    var modHeight = 70;
    $( ".dinhi" ).one( "click", function() {
      $( this ).innerHeight( modHeight ).addClass( "mod" );
      modHeight -= 8;
    });

    // ex39
    var modWidth = 60;
    $( ".dinwid" ).one( "click", function() {
    $( this ).innerWidth( modWidth ).addClass( "mod" );
    modWidth -= 8;
    });

    // ex40
    var p = $( ".p2" ).first();
    var position = p.position();
    $( ".p3" ).last().text( "left: " + position.left + ", top: " + position.top );

    // ex41
    $( ".demo" ).scrollLeft( 300 );

    // ex42
    var modHeight = 60;
    $( ".dohi" ).one( "click", function() {
      $( this ).outerHeight( modHeight ).addClass( "mod1" );
      modHeight -= 8;
    });

    // ex43
    var divdbl = $( ".ddbl" ).first();
    divdbl.on( "dblclick", function() {
      divdbl.toggleClass( "dbl" );
    } );

    // ex44
    var i = 0;
    $( "div.overout" )
      .on( "mouseover", function() {
        i += 1;
        $( this ).find( "span" ).text( "mouse over x " + i );
      } )
      .on( "mouseout", function() {
        $( this ).find( "span" ).text( "mouse out " );
      } );
     
    var n = 0;
    $( "div.enterleave" )
      .on( "mouseenter", function() {
        n += 1;
        $( this ).find( "span" ).text( "mouse enter x " + n );
      } )
      .on( "mouseleave", function() {
        $( this ).find( "span" ).text( "mouse leave" );
      } ); 

      // ex45
      $( ".pht" ).on( "click", function() {
        var htmlString = $( this ).html();
        $( this ).text( htmlString );
      });

      // ex46
      $( ".in1" ).on( "focus", function() {
        $( this ).next( ".spa1" ).css( "display", "inline" ).fadeOut( 1000 );
      });

      // ex47
      $( ".p10" ).on( "focusin", function() {
        $( this ).find( ".spa2" ).css( "display", "inline" ).fadeOut( 1000 );
      } );

      // ex48
      var focusout = 0,
        blur = 0;
      $( ".p11" )
        .on( "focusout", function() {
          focusout++;
          $( "#focus-count" ).text( "focusout fired: " + focusout + "x" );
        } )
        .on( "blur", function() {
          blur++;
          $( "#blur-count" ).text( "blur fired: " + blur + "x" );
        } );

        // ex49
        $( ":.in4" ).on( "select", function() {
          $( ".d45" ).text( "Something was selected" ).show().fadeOut( 1000 );
        } );

        // ex50
        $( ".f56" ).on( "submit", function( event ) {
          if ( $( ".in4" ).first().val() === "correct" ) {
            $( ".spa7" ).text( "Validated..." ).show();
            return;
          }
         
          $( ".spa7" ).text( "Not valid!" ).show().fadeOut( 1000 );
          event.preventDefault();
        } );

});