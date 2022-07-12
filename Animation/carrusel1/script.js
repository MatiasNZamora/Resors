const images = document.querySelectorAll('.con-img')
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    const w = window.innerWidth
    let visible = 0

    images.forEach((item, i) => {
        if(i == 0) {
            return
        }
        anime({
            targets: item,
            left: `${w}px`,
            easing: 'easeInOutExpo',
            duration: 500
        });
    })

    next.addEventListener('click', () => {
        if (visible + 1 == images.length) {
            return
        }
        visible++
        images[visible].classList.add('active')
        anime({
            targets: `.con-img-${visible - 1}`,
            left: `-${w}px`,
            easing: 'easeInOutExpo',
            duration: 500
        })
        anime({
            targets: `.con-img-${visible}`,
            left: '0px',
            easing: 'easeInOutExpo',
            duration: 500
        })
    })
    prev.addEventListener('click', () => {
        if (visible <= 0) {
            return
        }
        visible--
        images[visible].classList.add('active')
        anime({
            targets: `.con-img-${visible + 1}`,
            left: `${w}px`,
            easing: 'easeInOutExpo',
            duration: 500
        })
        anime({
            targets: `.con-img-${visible}`,
            left: '0px',
            easing: 'easeInOutExpo',
            duration: 500
        })
    })