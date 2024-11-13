import Input from "./Input"

function Rating({
  selectedRating,
  setSelectedRating,
  handleSubmit,
  error,
  setError
}) {

  const ratings = [1, 2, 3, 4, 5]

  return (
    <div className="card">
      <div className="star__container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
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
                onClick={() => {
                  setSelectedRating(rating)
                  setError('')
                }}
              >
                {rating}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Input />

      {error && <span className="error">{error}</span>}
      <button className="btn" onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Rating