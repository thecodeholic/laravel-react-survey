import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

export default function QuestionEditor({
  index = 0,
  question,
  addQuestion,
  deleteQuestion,
  questionChange,
}) {
  const [model, setModel] = useState({ ...question });
  const { questionTypes } = useStateContext();

  useEffect(() => {
    questionChange(model);
  }, [model]);

  function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <div className="flex justify-between mb-3">
        <h4>
          {index + 1}. {model.question}
        </h4>
        <div className="flex items-center">
          <button
            type="button"
            className="
            flex
            items-center
            text-xs
            py-1
            px-3
            mr-2
            rounded-sm
            text-white
            bg-gray-600
            hover:bg-gray-700"
            onClick={addQuestion}
          >
            <PlusIcon className="w-4" />
            add
          </button>
          <button
            type="button"
            className="
            flex
            items-center
            text-xs
            py-1
            px-3
            rounded-sm
            border border-transparent
            text-red-500
            hover:border-red-600
            font-semibold
          "
            onClick={() => deleteQuestion(question)}
          >
            <TrashIcon className="w-4" />
            Delete
          </button>
        </div>
      </div>
      <div className="flex gap-3 justify-between mb-3">
        {/* Question Text */}
        <div className="flex-1">
          <label
            htmlFor="question"
            className="block text-sm font-medium text-gray-700"
          >
            Question
          </label>
          <input
            type="text"
            name="question"
            id="question"
            value={model.question}
            onChange={(ev) => setModel({ ...model, question: ev.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        {/* Question Text */}

        {/* Question Type */}
        <div>
          <label
            htmlFor="questionType"
            className="block text-sm font-medium text-gray-700 w-40"
          >
            Question Type
          </label>
          <select
            id="questionType"
            name="questionType"
            onChange={(ev) => setModel({ ...model, type: ev.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {questionTypes.map((type) => (
              <option value={type} selected={ model.type == type }>{upperCaseFirst(type)}</option>
            ))}
          </select>
        </div>
        {/* Question Type */}
      </div>

      {/*Description*/}
      <div>
        <label
          htmlFor="questionDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="questionDescription"
          id="questionDescription"
          value={model.description}
          onChange={(ev) =>
            setModel({ ...model, description: ev.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      {/*Description*/}
    </div>
  );
}
