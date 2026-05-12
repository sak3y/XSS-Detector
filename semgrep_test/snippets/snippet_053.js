function uw2(){const p=new URLSearchParams(location.search);document.querySelector('#welcome').innerHTML='Welcome '+(p.get('user')||'');}
