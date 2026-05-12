var referrer=document.referrer;var source=referrer?new URL(referrer).hostname:'direct';document.querySelector('#traffic-source').innerHTML='<em>Via: '+source+'</em>';
