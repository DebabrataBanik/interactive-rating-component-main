
function Rating({
  selectedRating,
  setSelectedRating,
  handleSubmit
}) {

  const ratings = [1, 2, 3, 4, 5]

  return (
    <div className="card">
      <div className="star__container">
        <img src="images/icon-star.svg" alt="icon-star" />
      </div>

      <section>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!</p>
      </section>

      <section className="rating__container">
        <ul>
          {ratings.map(rating => (
            <li key={rating}>
              <button
                className={`rating ${selectedRating === rating ? "selected" : ""}`}
                onClick={() => setSelectedRating(rating)}
              >
                {rating}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <button className="btn" onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Rating