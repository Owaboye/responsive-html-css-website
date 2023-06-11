const searchIcon = document.querySelector('.search-icon')
const searchBox = document.getElementById('search-box')
const menuIcon = document.getElementById('menu-icon')
const slideOutMenu = document.getElementById('slideOut-menu')

searchIcon.addEventListener('click', function(){
    
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents == 'none'
        console.log('clicked 24')
    }else{
        console.log('clicked 72')
        searchBox.style.top = '72px';
        searchBox.style.pointerEvents == 'auto'
    }
})

menuIcon.addEventListener('click', function(){
    
    if(slideOutMenu.style.opacity == '1'){
        slideOutMenu.style.opacity = '0';
        slideOutMenu.style.pointerEvents == 'none'
        console.log('clicked opacity 0')
    }else{
        console.log('clicked opacity 1')
        slideOutMenu.style.opacity = '1';
        slideOutMenu.style.pointerEvents == 'auto'
    }
})