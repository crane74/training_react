// 関数コンポーネント内で state を使えるようにするため、useState をインポート
import React, { useState, useEffect } from "react";

const Counter = () => {
  // coutner：stateを宣言する。
  // setCoutner：stateを更新する関数を宣言する。
  // useStateの引数はcoutnerの初期値を指定する。
  const [counter, setCounter] = useState(0);

  // counterを+1する関数を定義する。
  const countUp = () => {
    setCounter(counter + 1);
  };

  // counterを-1する関数を定義する。
  const countDown = () => {
    setCounter(counter - 1);
  };

  // boolも使用可能。
  const [isVisible, setVisibility] = useState(true);

  // isVisibleを反転する関数を定義する。
  const updateVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <>
      <button onClick={updateVisibility} className="btn my-3 ml-2">
        {isVisible ? "非表示にする" : "表示する"}
      </button>
      <div className={isVisible ? "visible" : "invisible"}>
        <p className="ml-2">現在の数値は{counter}です。</p>
        <button className="btn btn-info m-2" onClick={countUp}>
          +1
        </button>
        <button className="btn btn-warning" onClick={countDown}>
          -1
        </button>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Counter;
