function sr1(){fetch('/api/comments').then(r=>r.json()).then(d=>{document.querySelector('#out').innerHTML=d.html;});}
