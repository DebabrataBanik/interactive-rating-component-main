
function Input() {
  return (
    <div className="feedback__container">
      <label htmlFor="feedback">Anything you would like to share?</label>
      <textarea name="feedback" id="feedback" placeholder="Please leave your thoughts..."></textarea>

      <div className="radio__container">
        <legend>Do you want us to follow up on your feedback?</legend>

        <div className="radios">
          <label htmlFor="followUpYes">
            <input
              type="radio"
              id="followUpYes"
              name="followUp"
              value="yes"
            />
            Yes
          </label>

          <label htmlFor="followUpNo">
            <input
              type="radio"
              id="followUpNo"
              name="followUp"
              value="no"
            />
            No
          </label>
        </div>

      </div>

    </div>
  )
}

export default Input