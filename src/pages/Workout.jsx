import React, { useEffect, useState } from "react";
import axios from "../axios";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import { useNavigate } from "react-router-dom";
import WorkoutCalendar from "../components/shared/WorkoutCalendar/WorkoutCalendar";
function Workout() {
  const id = localStorage.getItem("id");
  const [subscribe, setSubscribe] = useState(null);
  const [trainingPlan, setTrainingPlan] = useState();
  const [countTrainings, setCountTrainings] = useState("");
  const [countWeek, setCountWeek] = useState("");
  const navigate = useNavigate();

  const countOuterKeys = (trainingPlan) => {
    if (!trainingPlan || typeof trainingPlan !== "object") {
      return 0; // или другое значение по умолчанию
    }
    return Object.keys(trainingPlan).length;
  };

  useEffect(() => {
    axios
      .get(`/getUserById/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data) {
          setSubscribe({
            sub1: data.sub1,
            sub2: data.sub2,
            sub3: data.sub3,
            sub4: data.sub4,
          });
          setTrainingPlan(data.trainingPlan);
          const totalKeys = countOuterKeys(data.trainingPlan);
          setCountWeek(totalKeys);
          const totalTrainings = countOuterKeys(data.trainingPlan[0]?.week1);
          setCountTrainings(totalTrainings);
        }
      });
  }, []);
  console.log(subscribe?.sub1);

  return (
    <>
      {subscribe?.sub1 != true ||
      subscribe?.sub2 != true ||
      subscribe?.sub3 != true ||
      subscribe?.sub4 != true ? (
        <div className="flex flex-col justify-start items-center relative h-[100%]">
          <p className="font-syne font-semibold text-white text-[17px] mt-4">
            Программа тренировок
          </p>
          <img className="mt-[100px]" src="/images/locked.svg" alt="" />
          <Button
            onClick={
              !trainingPlan
                ? () => navigate("/payment")
                : () => navigate("/prompt")
            }
            className="absolute bottom-3"
          >
            {!trainingPlan ? "Купить подписку" : "Сгенерировать программу"}
          </Button>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-center relative h-[100%]">
          <p className="font-syne font-semibold text-white text-[17px] mt-4">
            Тренировка
          </p>
          <div
            className="flex flex-col justify-start items-center w-[343px] rounded-[8px] gap-[8px] py-2 mt-[20px]"
            style={{ background: "rgba(116, 116, 128, 0.18)" }}
          >
            <div className="w-[90%] flex justify-between items-center">
              <p className="text-white font-sans text-[13px] opacity-60">
                Количество дней в неделю
              </p>
              <p className="text-white font-sans text-[13px]">
                {countTrainings}
              </p>
            </div>
            <img src="/images/Line.svg" alt="" />
            <div className="w-[90%] flex justify-between items-center">
              <p className="text-white font-sans text-[13px] opacity-60">
                Продолжительность тренировок
              </p>
              <p className="text-white font-sans text-[13px]">
                {countWeek} недель
              </p>
            </div>
          </div>
          {/* <p className='text-[14px] font-sans font-semibold mt-[22px] w-[343px] text-left' style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Выберите дни тренировок, нажав на дату</p> */}
          <WorkoutCalendar trainingPlan={trainingPlan}></WorkoutCalendar>
          <Button
            onClick={() => navigate("/main")}
            className="absolute bottom-3"
          >
            Готов
          </Button>
        </div>
      )}
      {subscribe == null && <Loading></Loading>}
    </>
  );
}

export default Workout;
