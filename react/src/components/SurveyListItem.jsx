import TButton from "./core/Tbutton.jsx";
import {ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon} from "@heroicons/react/24/outline/index.js";

export function SurveyListItem({survey, onClick}) {
  return (
    <div
    className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]"
  >
    <img
      src={survey.image_url ||
        'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'}
      alt={survey.title}
      className="w-full h-48 object-cover"
    />
    <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>
    <div dangerouslySetInnerHTML={{__html: survey.description}} className="overflow-hidden flex-1"></div>

    <div className="flex justify-between items-center mt-3">
      <TButton to={`surveys/${survey.id}`}>
        <PencilIcon className="w-5 h-5 mr-2 " />
        Edit
      </TButton>
      <div className="flex items-center">
        <TButton href={`/view/survey/${survey.slug}`} circle link>
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </TButton>

        {survey.id && <TButton onClick={onClick} circle link color="red">
          <TrashIcon className="w-5 h-5" />
        </TButton>}
      </div>
    </div>
  </div>
  )
}
