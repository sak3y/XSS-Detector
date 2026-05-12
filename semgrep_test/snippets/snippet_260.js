function loadFragment(){var url='/fragments/'+location.hash.slice(1)+'.html';$.get(url,function(html){$('#content').html(html);});}
