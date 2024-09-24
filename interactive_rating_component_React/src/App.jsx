import { useState } from 'react'
import Rating from './components/Rating'
import ThankYou from './components/ThankYou'

function App() {

  const [selectedRating, setSelectedRating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(prev => !prev)
    }
  }

  return (
    <div className='wrapper'>
      <div className='card__container'>
        {isSubmitted ? (
          <ThankYou rating={selectedRating} />
        ) : (
          <Rating
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  )
}

export default App