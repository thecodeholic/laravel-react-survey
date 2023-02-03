export default function PublicQuestionView({
  question,
  index,
  answerChanged,
}) {
  let selectedOptions = []

  function onCheckboxChange(option, $event) {
    if ($event.target.checked) {
      selectedOptions.push(option.text)
    } else {
      selectedOptions = selectedOptions.filter(op => op != option.text)
    }
    answerChanged(selectedOptions);
  }

  return (
    <>
      <fieldset className="mb-4">
        <div>
          <legend className="text-base font-medium text-gray-900">
            {index + 1}. {question.question}
          </legend>
          <p className="text-gray-500 text-sm">{question.description}</p>
        </div>

        <div className="mt-3">
          {question.type === "select" && (
            <div>
              <select
                onChange={(ev) => answerChanged(ev.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Please Select</option>
                {question.data.options.map((option) => (
                  <option key={option.uuid} value={option.text}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          )}
          {question.type === "radio" && (
            <div>
              {question.data.options.map((option, ind) => (
                <div key={option.uuid} className="flex items-center">
                  <input
                    id={option.uuid}
                    name={"question" + question.id}
                    value={option.text}
                    onChange={(ev) => answerChanged(ev.target.value)}
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor={option.uuid}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          )}
          {question.type === "checkbox" && (
            <div>
              {question.data.options.map((option, ind) => (
                <div key={option.uuid} className="flex items-center">
                  <input
                    id={option.uuid}
                    onChange={ev => onCheckboxChange(option, ev)}
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={option.uuid}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          )}
          {question.type === "text" && (
            <div>
              <input
                type="text"
                onChange={(ev) => answerChanged(ev.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          )}
          {question.type === "textarea" && (
            <div>
              <textarea
                onChange={(ev) => answerChanged(ev.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
          )}
        </div>
      </fieldset>
      <hr className="mb-4" />
    </>
  );
}
