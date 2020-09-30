import React, {useEffect} from "react";
import "./Modal.css";
import sbArch from "../images/sbArch.jpeg"
import sdArch from "../images/sdArch.jpeg"

function Modal({ close, projectId }){

    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px;`
        return () => {
            const scrollY = document.body.style.top
            document.body.style.cssText = `position: ""; top: "";`
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

    // id
    // period
    // projectThumbnail
    // title
    const project = detail[projectId];

    return (
        <div className="modalContainer">
            <div className="modalOverlay">
            </div>
            <main className="modalContent">
                <p onClick={close} align="right"><strong>X</strong></p><br/>
                <p><strong>팀명 : </strong>{project.teamName}</p><br/>
                <p><strong>소개 : </strong>{project.motif}</p><br/>
                <p><strong>소개 : </strong>{project.motif}</p><br/>
                <p><strong>소개 : </strong>{project.motif}</p><br/>
                <strong>스택아키텍처</strong><br/><img src={project.architecture} width="90%"/>
            </main>
        </div>
    );
}

const detail = {
    "sb001": {
        "teamName": "NOT NULL",
        "motif": "개발자 워너비 5명이 힘을 모아 FE부터 BE까지! 🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️ 기능도 중요하지만 디자인도 놓치고 싶지 않은 NOT NULL팀. 즐겨마시는 커피☕️, 음료🍹와 관련된 웹사이트를 개발하기로 정하고, 여러 프랜차이즈 카페 사이트를 조사하다가 한국 스타벅스 사이트의 아름다운 디자인과 북미 스타벅스의 온라인 주문 기능이 합쳐져 심미성과 기능성 모두 겸비한 스타벅스 사이트를 만들어보기로 결심!",
        "architecture": sbArch,
    },
    "sc002": {
        "teamName": "시너지",
        "motif": "모든 세상 사람들이 최소 하나씩은 갖고 있는 것은 바로 병🤒 아닐까요? 👁눈, 👃코, 👄입부터 🧍‍♀️ 전신... 아픈 곳은 많은데, ⌛️시간은 없고~ 🏥병원은 가야하고!! 그런 사람들을 위해 만들어본 병원 예약 플랫폼이 바로 속닥속닥입니다. 속닥이라는 이름에 걸맞게 속이 아픈 사람들을 타겟으로 잡았고, 등록된 병원들의 정보와 리뷰들을 🕵️‍♀️확인할 수 있어요. 병원이 전부라면 차별성이 부족하죠? 속닥속닥에서는 💊약국 정보와 리뷰에 🚑민간구급차현황 정보, 건강정보 등을 찾아볼 수 있어요! 또 다른 고객인 👩‍⚕️👨‍⚕️병원 회원들은 누가 방문할 예정이고, 방문했던 혹은 방문할 환자의 건강 정보, 병원 정보 관리 등을 할 수 있어요. (이 시국에 어울리게 지역별 일일 코로나 확진자수도 알 수 있어요!)",
        "architecture": sdArch,
    },
};

export default Modal;