function dl11(){const p=new URLSearchParams(location.search);const allowed={home:'/',about:'/about',blog:'/blog'};document.querySelector('a').href=allowed[p.get('page')]||'/';}
