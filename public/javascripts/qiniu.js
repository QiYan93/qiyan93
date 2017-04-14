var $countMax = document.getElementById('countMax');
var $getUrlBtn = document.getElementById('getUrlBtn');
var $document = document.getElementById('document');
const host = location.origin

function getUrlFunc(){
    var val = $countMax.value;
    var localFilePath = document.getElementById('fileName').innerHTML;
    if(localFilePath && val){
        fetch(host+'/geturl?countMax='+val+'&localFilePath='+localFilePath,{
            method:'POST'
        }).then(function(res){
            return res.json()
        }).then(function(data){
            $('#list').find('li').remove();
            var balance = 'balance.ushaqi.com/';
            var moveon = 'moveon.ushaqi.com/';
            var custom = 'custom.ushaqi.com/';
            var li1 = '',li2 = '',li3 = '';
            for(var i=0;i<data.url.length;i++){
                    li1 += '<li class="list-group-item">'+balance+data.url[i]+'</li>';
                    li2 += '<li class="list-group-item">'+moveon+data.url[i]+'</li>';
                    li3 += '<li class="list-group-item">'+custom+data.url[i]+'</li>';
            }
            $('#list').append(li1);
            $('#list').append(li2);
            $('#list').append(li3);
        })
    }
}

$document.addEventListener('change',function(event){
    var file = $document.files[0];
    var formData = new FormData();
    formData.append('file',file);
    fetch(host+'/upload',{
         method:'POST',
         body:formData
    }).then(function(res){
        return res.json()
    }).then(function(data){
        $('#files').find('li').remove();
        $('#files').append('<li id="fileName" class="list-group-item">'+data.name+'</li>')
    })
})
