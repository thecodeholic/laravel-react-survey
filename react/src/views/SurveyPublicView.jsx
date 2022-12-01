import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axios";
import PublicQuestionView from "../components/PublicQuestionView";

export default function SurveyPublicView() {
  const [survey, setSurvey] = useState({
    questions: []
  });
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`survey/get-by-slug/${slug}`)
      .then(({ data }) => {
        setLoading(false);
        setSurvey(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div className="flex justify-center">Loading..</div>}
      {!loading && (
        <form className="container mx-auto">
          <div className="grid grid-cols-6">
            <div className="mr-4">
              <img src={survey.image_url} alt="" />
            </div>

            <div className="col-span-5">
              <h1 className="text-3xl mb-3">{survey.title}</h1>
              <p className="text-gray-500 text-sm mb-3">
                Expire Date: {survey.expire_date}
              </p>
              <p className="text-gray-500 text-sm mb-3">{survey.description}</p>
            </div>
          </div>

          <div>
            {survey.questions.map((question, index) => (
              <PublicQuestionView
                key={question.uuid}
                question={question}
                index={index}
              />
            ))}
          </div>
        </form>
      )}
    </div>
  );
}
