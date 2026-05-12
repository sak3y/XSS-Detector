function ls8(){const prefs=JSON.parse(localStorage.getItem('prefs')||'{}');document.querySelector('#name').textContent=prefs.name||'';}
