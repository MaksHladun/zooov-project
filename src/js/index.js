import '../sass/main.scss';
import viewportsСheck from './components/slider'
import {scrollHeaderDesc, scrollHeaderMob} from './components/scroll-header'
import { clikButtonToOrder } from './components/render-modalToOrder';
import {clikButtonToDescription} from './components/render-modal-description';
import calculationModal from './components/calculation-modal'
import { clickOpenMobBatMenu, clickCloseMobBatMenu } from './components/mobile-menu';
import { onNotificationClick, showNotification } from './components/submit-notifikation';


viewportsСheck();

scrollHeaderDesc();
scrollHeaderMob();



// Прокрутка //
 $(document).ready( function (){
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
 });

$(document).ready( function (){
    $(".hero-button").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$(document).ready( function (){
    $(".hero-buttons").on("click", function (event) {   
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});


  
//////////




////


