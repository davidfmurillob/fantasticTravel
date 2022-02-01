const form = document.querySelector('#myForm')
const btnSubmit = document.querySelector('#btnSubmit')
const btnLoading = document.querySelector('#btnLoading')
const myToast = document.querySelector('.toast')


form.addEventListener('submit', e => {
    e.preventDefault();
    const userData = new FormData(form) 
    console.log(userData.get('userEmail') ) 
    console.log( userData.get('userPassword'))
    console.log( userData.get('check'))

    btnSubmit.classList.add('d-none')
    btnLoading.classList.remove('d-none')

    window.setTimeout(()=>{
        btnSubmit.classList.remove('d-none')
        btnLoading.classList.add('d-none')

        
        const toastEvent = new bootstrap.Toast(myToast)
        toastEvent.show()
        

    }, 3000)
    
    
    form.reset()
})