'use strict';

function preview({target}){
    document.getElementById('preview-image')
            .src = URL.createObjectURL(target.files[0])
}

document.getElementById('preview-input') //quando houver uma mudança chame a função chamanda preview
        .addEventListener('change', preview)
