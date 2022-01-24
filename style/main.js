$("document").ready(function(){
    $(".responsive-menu .open").click(function(){
        $(".responsive-menu .close").show(),
        $(".responsive-menu .open").hide(),
        $(".display1 .menu-items").slideDown()
    });
    $(".responsive-menu .close").click(function(){
        $(".responsive-menu .open").show(),
        $(".responsive-menu .close").hide(),
        $(".display1 .menu-items").slideUp()
    })


    $(".display6 .main-continer .part1 #Question1 #plus").click(function(){
        $(".display6 .main-continer .part1 #Question1 .ans").slideDown()
        $(this).hide()
        $(".display6 .main-continer .part1 #Question1 #minus").show()
    })
    $(".display6 .main-continer .part1 #Question1 #minus").click(function(){
        $(".display6 .main-continer .part1 #Question1 .ans").slideUp()
        $(this).hide()
        $(".display6 .main-continer .part1 #Question1 #plus").show()
    })

    $(".display6 .main-continer .part1 #Question2 #plus").click(function(){
        $(".display6 .main-continer .part1 #Question2 .ans").slideDown()
        $(this).hide()
        $(".display6 .main-continer .part1 #Question2 #minus").show()
    })
    $(".display6 .main-continer .part1 #Question2 #minus").click(function(){
        $(".display6 .main-continer .part1 #Question2 .ans").slideUp()
        $(this).hide()
        $(".display6 .main-continer .part1 #Question2 #plus").show()
    })

    $(".display6 .main-continer .part1 #Question3 #plus").click(function(){
        $(".display6 .main-continer .part1 #Question3 .ans").slideDown()
        $(this).hide()
        $(".display6 .main-continer .part1 #Question3 #minus").show()
    })
    $(".display6 .main-continer .part1 #Question3 #minus").click(function(){
        $(".display6 .main-continer .part1 #Question3 .ans").slideUp()
        $(this).hide()
        $(".display6 .main-continer .part1 #Question3 #plus").show()
    })

    $(".display6 .main-continer .part2 #Question4 #plus").click(function(){
        $(".display6 .main-continer .part2 #Question4 .ans").slideDown()
        $(this).hide()
        $(".display6 .main-continer .part2 #Question4 #minus").show()
    })
    $(".display6 .main-continer .part2 #Question4 #minus").click(function(){
        $(".display6 .main-continer .part2 #Question4 .ans").slideUp()
        $(this).hide()
        $(".display6 .main-continer .part2 #Question4 #plus").show()
    })

    
    $(".display6 .main-continer .part2 #Question5 #plus").click(function(){
        $(".display6 .main-continer .part2 #Question5 .ans").slideDown()
        $(this).hide()
        $(".display6 .main-continer .part2 #Question5 #minus").show()
    })
    $(".display6 .main-continer .part2 #Question5 #minus").click(function(){
        $(".display6 .main-continer .part2 #Question5 .ans").slideUp()
        $(this).hide()
        $(".display6 .main-continer .part2 #Question5 #plus").show()
    })

    $(".display6 .main-continer .part2 #Question6 #plus").click(function(){
        $(".display6 .main-continer .part2 #Question6 .ans").slideDown()
        $(this).hide(),
        $(".display6 .main-continer .part2 #Question6 #minus").show()
    })
    $(".display6 .main-continer .part2 #Question6 #minus").click(function(){
        $(".display6 .main-continer .part2 #Question6 .ans").slideUp()
        $(this).hide(),
        $(".display6 .main-continer .part2 #Question6 #plus").show()
    })

})