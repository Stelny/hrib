
$(document).ready(function(){
    
    //Header top menu
    const toggleTopMenuButton = document.getElementById('toggleTopMenuButton');
    const toggleTopMenu = document.getElementById('header');

    if (toggleTopMenuButton) {
        toggleTopMenuButton.addEventListener('click', () => {
            if (toggleTopMenu.classList.contains('active')) {
                toggleTopMenu.classList.remove('active');
                $("body").removeClass('open');
                return;
            }
            $("body").addClass('open');
            toggleTopMenu.classList.add('active');
        })
    }

    $('.copy').click(function(e) {
        e.preventDefault();
        var text = "radek@hrib.cz";
        navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });
    })


})
