const list = document.querySelectorAll('.rating')
const submit = document.querySelector('.btn')
const card = document.querySelector('.card')
const thank_you_card = document.querySelector('.thank-you__card')

let selectedRating = null

list.forEach(item => {
  item.addEventListener('click', e => {

    list.forEach(i => i.classList.remove('selected'))

    item.classList.add('selected')

    selectedRating = +item.textContent
    
    submit.addEventListener('click', handleSubmit);

  })
})


const handleSubmit = () => {

  const user_rating = thank_you_card.querySelector('.user-rating')

  user_rating.textContent = `You selected ${selectedRating} out of 5`

  card.style.display = 'none'
  thank_you_card.style.display = 'flex'

} 

