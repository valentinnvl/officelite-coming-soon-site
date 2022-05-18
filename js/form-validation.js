(() => {
  const form = document.querySelector('form')

  const nameBox = form.querySelector('#name-box')
  const nameInput = form.querySelector('#name')

  const emailBox = form.querySelector('#email-box')
  const emailInput = form.querySelector('#email')

  const requiredInputs = form.querySelectorAll('.required')

  const select = form.querySelector('.custom-select')
  const selectedItem = form.querySelector('.selected-item')
  const optionList = form.querySelectorAll('.option')

  const submitButton = form.querySelector('.submit-btn')


  const emptyInput = (input, container) => {
    if (input.value == '') {
      container.classList.add('error')
      return true
    }
    return false
  }

  const validEmail = (input, container) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegEx.test(input.value)) {
      container.classList.add('error')
      return false
    }
    return true
  }


  selectedItem.addEventListener('click', () => {
    select.classList.toggle('active')
  })

  window.addEventListener('click', (e) => {
    if (e.target !== selectedItem) select.classList.remove('active')
  })

  optionList.forEach(o => {
    o.addEventListener('click', () => {
      selectedItem.innerHTML = o.innerHTML
      o.parentNode.querySelector('.selected').classList.remove('selected')
      o.classList.add('selected')
    })
  })

  requiredInputs.forEach(i => {
    i.addEventListener('keydown', () => {
      i.parentNode.classList.remove('error')
    })
  })

  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (!emptyInput(nameInput, nameBox) & validEmail(emailInput, emailBox)) form.submit()
  })
})()