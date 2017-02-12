var $countMax = document.getElementById('countMax');
var $getUrlBtn = document.getElementById('getUrlBtn');
const host = location.origin

function getUrlFunc(){
    var val = $countMax.value;
    fetch(host+'/geturl?countMax='+val,{
        method:'POST'
    }).then(function(res){
        return res.json()
    }).then(function(data){
        $('#list').find('li').remove();
        for(var i=0;i<data.url.length;i++){
            $('#list').append('<li class="list-group-item">'+data.url[i]+'</li>')
        }
    })
}