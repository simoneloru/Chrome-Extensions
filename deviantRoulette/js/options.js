function init(){
    savedDR = localStorage["deviantRoulette"];
    if(savedDR!= undefined)
    {
        $("#"+savedDR).click();
    }
    else
    {
        $("#deviation").click();
    }
    if(localStorage["openInCurrentWindow"] == "true")
    {
        $("#current_tab").click();
    }
    
}

function save(){
    selectedType = $("input[@name='type_setting']:checked").val();
    console.log(selectedType);
    console.log($('input:checkbox[name="current_tab"]').is(':checked'));
    if (selectedType)localStorage["deviantRoulette"] = selectedType;
    localStorage["openInCurrentWindow"] = $('input:checkbox[name="current_tab"]').is(':checked');
}


