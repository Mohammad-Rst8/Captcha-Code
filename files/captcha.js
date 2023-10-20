let $ = document
let refreh = $.querySelector('#svgg')
let svgElem = $.querySelector('.svgelem')
let captchatext = $.querySelector('.captch-img')
let captchInput = $.querySelector('.captch__input')
let status = $.querySelector('.status')
let btn = $.querySelector('.btn')
let video = $.querySelector('.vid')
let formcaptcha = $.querySelector('#formcaptcha')
let alph = "abcdefghijklmnopqrs123456789tuvwxyzABCDEFGIJKLMNOPQRSTUVWXYZ"
// alph.split(" ")
let num = 0
let update = (event) => {
    setTimeout(() => {
        let maintext = ''
        for (let i = 0; i < 6; i++) {
            let rand = alph.charAt(Math.floor(Math.random() * alph.length))
            maintext += rand
        }
        captchatext.innerHTML = maintext
    }, 150)

}

refreh.addEventListener('click', () => {
    num += 180
    refreh.style.transform = `rotate(${(num)}deg)`

    update()
})
 window.addEventListener('load', update)

btn.addEventListener('click', () => {
    let inputval = captchInput.value
    if (captchInput.value === '') {
        status.innerHTML = "لطفا کد را در مکان مناسب تایپ کنید."
        status.style.color = "orange"
    } else {

        if (captchatext.innerHTML == captchInput.value) {
            status.innerHTML = `درود بر شما.
            مرحله امنیت را با موفقیت گذرانید. تا لحظات دیگر وارد صفحه اصلی خواهید شد`
            status.style.color = "green"
            setTimeout( ()=>{
                formcaptcha.style.display = "none"
                video.style.display = "block"

            },2500)
        }
        else {
            status.innerHTML = "متاسفانه کد را اشتباه وارد کردید. مجددا تلاش کنید"
            status.style.color = "red"
            console.log("invalid");
        }
        update()
    }
    captchInput.value = ''
})
captchatext.addEventListener('copy', (event) =>{
 event.preventDefault()
})