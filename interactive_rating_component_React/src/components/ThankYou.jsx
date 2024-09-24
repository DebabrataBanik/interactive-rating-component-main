
function ThankYou({
  rating
}) {
  return (
    <div className="thank-you__card">
      <img src="images/illustration-thank-you.svg" alt="illustration-thank-you" />
      <div className="user-rating">
        You selected {rating} out of 5
      </div>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    </div>
  )
}

export default ThankYou