
function Input() {
  return (
    <div className="feedback__container">
      <label htmlFor="feedback">Anything you would like to share?</label>
      <textarea name="feedback" id="feedback" placeholder="Please leave your thoughts..."></textarea>

      <div className="radio__container">
        <legend>Would you like us to follow up on your feedback?</legend>

        <div className="radios">
          <label htmlFor="Yes">
            <input
              type="radio"
              id="Yes"
              name="followUp"
              value="yes"
            />
            <span>Yes</span>
          </label>

          <label htmlFor="No">
            <input
              type="radio"
              id="No"
              name="followUp"
              value="no"
            />
            <span>No</span>
          </label>
        </div>

      </div>

    </div>
  )
}

export default Input