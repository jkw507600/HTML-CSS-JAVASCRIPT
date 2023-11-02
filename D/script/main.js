$(function(){
    // 메뉴
    $('.gnb').hover(
        function(){
            $(this).find('ul').show()
        },
        function(){
            $(this).find('ul').hide()
        }
    )
    // 모달
    $('.showModal').click(function(){
        $('.modal').show()
    })
    $('.closeModal').click(function(){
        $('.modal').hide()
    })
    // 탭
    $('.item').eq(0).show()

    $('.titles h2').click(function(){
        var idx = $(this).index()
        
        $('.titles h2').removeClass('active')
        $(this).addClass('active')

        $('.item').hide()
        $('.item').eq(idx).show()
    })

    // 슬라이드
    var slide = $('.slide')
    var current = 0
    slide.eq(0).show()

    setInterval(function(){
        var next = (current + 1) % slide.length
        slide.eq(current).fadeOut()
        slide.eq(next).fadeIn()
        current = next
    },2000)
})