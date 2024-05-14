
$('.contact-form').on('submit', function(e){ 
    e.preventDefault();
    valdiateFormFields(e.target)
})


function valdiateFormFields(form) { 
    formData = serializeForm(form)
    
    Object.keys(formData).forEach(key => { 
        if(!formData[key] && key !== 'message'){ 
            $(`#${key}`).addClass('is-invalid')
        }else{ 
            $(`#${key}`).removeClass('is-invalid')
        }
    })
}


function serializeForm(form) { 
    var formData = {}
    $(form).serializeArray().map(function(item) {
        formData[item.name] = item.value;
    });
    return formData 
}

