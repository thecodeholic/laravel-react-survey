import PageComponent from "../components/PageComponent.jsx";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {SurveyListItem} from "../components/SurveyListItem.jsx";
import {TButton} from "../components/core/Tbutton.jsx";
import {PencilIcon} from "@heroicons/react/20/solid/index.js";
import {PlusCircleIcon} from "@heroicons/react/24/outline/index.js";

const Surveys = () => {
  const {surveys} = useStateContext()

  return (
    <PageComponent title='Surveys'
                   buttons={(<TButton color="green" to="/surveys/create">
                     <PlusCircleIcon className="w-6 h-6 mr-2" />
                     Create new
                   </TButton>)}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {surveys.map(survey => (<SurveyListItem survey={survey} key={survey.id}/>))}
      </div>
    </PageComponent>
  )
}

export default Surveys
