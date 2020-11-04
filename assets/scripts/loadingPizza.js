
// -- let auth = 'jlj' -- //



const step = (time) => {
    if (time < 20) {
        return 4
    } else if (time < 23) {
        return 2
    } else if (time < 25) {
        return 5
    } else if (time < 37) {
        return 3
    } else if (time > 76) {
        return 0.1
    } else {
        return 4
    }
}

const updateStatus = (x, slider) => {
    slider.style.width = `${x}px`
}

const updateCountdown = (i, initVal, countdown) => {
    const val = parseInt(16 - (i / 10))
    const extraZero = val < 10 ? '0' : ''
    const colon = val % 2 === 0 ? ':' : ' '
    countdown.innerHTML = `00${colon}${extraZero}${val}`
}

const updateLanding = (root, boot) => {
    sessionStorage.setItem('loaded', 'true')
    boot.style.display = 'none'
    root.style.display = 'block'
}

window.onload = () => {
    const sliderWrapper = document.getElementById('loadingPizza')
    const root = document.getElementById('root')
    if (sessionStorage.getItem('loaded') === 'true') {
        updateLanding(root, sliderWrapper)
    } else {
        const slider = document.getElementById('slider')
        const countDown = document.getElementById('countdownTimer')
        let i = 0;
        let goal = 100;
        let width = 0;
        let countDownFrom = 16;
        let int = setInterval(() => {
            width += step(i)
            updateStatus(width, slider)
            i += 1
            updateCountdown(i, countDownFrom, countDown)
            if (i === 160) {
                clearInterval(int)
                updateLanding(root, sliderWrapper)
            }
        }, 100)

    }
}