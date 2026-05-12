function uc_e(data){const safe=DOMPurify.sanitize(data.body);document.querySelector('#comments').innerHTML=safe;}
