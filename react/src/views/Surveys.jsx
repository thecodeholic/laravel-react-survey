import PageComponent from "../components/PageComponent.jsx";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {SurveyListItem} from "../components/SurveyListItem.jsx";
import TButton from "../components/core/Tbutton.jsx";
import {PlusCircleIcon} from "@heroicons/react/24/outline/index.js";
import axiosClient from "../axios.js";
import {useState} from "react";
import {useEffect} from "react";

const Surveys = () => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Component mount");

    setLoading(true)
    axiosClient.get("/survey").then(({data}) => {
      setSurveys(data.data);
      setLoading(false)
    });
  }, []);

  return (
    <PageComponent
      title="Surveys"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="w-6 h-6 mr-2"/>
          Create new
        </TButton>
      }
    >
      {loading ? (
        <div className="text-center text-2xl py-3">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {surveys.map((survey) => (
            <SurveyListItem survey={survey} key={survey.id}/>
          ))}
        </div>
      )}
    </PageComponent>
  );
};

export default Surveys;
