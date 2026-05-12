function sr3(){$.getJSON('/api/notes',function(notes){notes.forEach(n=>{$('#list').append('<li>'+n.text+'</li>');});});}
