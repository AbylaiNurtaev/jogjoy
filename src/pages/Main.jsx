import React, { useEffect, useState } from "react";
import Menu from "../components/shared/Menu";
import MenuWorkout from "../components/shared/MenuWorkout";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

function Main() {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const [subscribe, setSubscribe] = useState(false);
  useEffect(() => {
    axios
      .get(`/getUserById/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data) {
          setSubscribe(data.subscribe);
        }
      });
  }, []);
  return (
    <div
      className="flex flex-col justify-between items-center bg-primary w-[100%]"
      style={{ height: "100%" }}
    >
      <div className="flex flex-col justify-start items-center w-[100%] pb-3">
        <div className="flex justify-between items-start w-[340px] mt-[25px]">
          <p className="font-syne text-lightGray text-[14px] font-semibold opacity-50">
            Добро пожаловать!
          </p>
          {/* <img src="/icons/notification.png" className="w-[28px]" alt="" /> */}
        </div>

        <div className="font-syne text-white font-semibold text-[15px] w-[340px] mb-[24px] text-left">
          Вы желаете подготовиться к забегу или проанализировать свою технику?
        </div>

        <MenuWorkout />
        <Menu />
      </div>
    </div>
  );
}

export default Main;
