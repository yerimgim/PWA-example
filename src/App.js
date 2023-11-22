import { useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>배롱이 PWA 닷컴</h1>
      </header>
      <section className="main">
        <h3>✨안녕하세요. 배롱이닷컴입니다✨</h3>
        <p>
          오늘 <strong> 11월 22일 김치의 날 </strong>입니다.
        </p>
        <p>
          대한민국 법정기념일 중 특정 음식이 기념일의 주인공이 된 것은 최초의
          일입니다!
        </p>
        <p>
          11월 22일을 꼽아 ‘김치의 날’로 지정한 이유는,
          <br />
          <strong>
            김치의 다양한 재료 하나(1) 하나(1)가 모여 면역
            증강·항산화·항비만·항암 등 22가지 이상의 효능을 만들어낸다는 상징적
            의미
          </strong>
          <br />를 담았기 때문입니다.
        </p>
        <a
          className="App-link"
          href="https://www.wikim.re.kr/menu.es?mid=a50206010000"
          target="_blank"
          rel="noreferrer"
        >
          자세한 내용 김치콘텐츠통함플랫폼에서 보기!
        </a>
        <div>
          <img src="./김장하는배롱.png" alt="김장배롱" />
        </div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "배롱이 그만보기" : "배롱이 더보기"}
        </button>
        {visible && (
          <div className="hide">
            <ul>
              <li>
                <img src="./잠자는배롱.png" alt="" />
                <p>졸릴때 모습입니다 😴</p>
              </li>
              <li>
                <img src="./에러남배롱.png" alt="" />
                <p>에러나서 슬플때 모습입니다 🥲</p>
              </li>
            </ul>
          </div>
        )}
      </section>
      <footer>
        <section>
          <address>010-000-0000</address>
          <div>
            <ul>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>감사합니다</li>
            </ul>
            <span>Copyright 배롱 Co., Ltd. All rights reserved.</span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
