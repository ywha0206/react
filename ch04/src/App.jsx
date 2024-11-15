import "./App.css";
import UseCallbackComponent from "./components/UseCallbackComponent";
import UseCounterComponent from "./components/UseCounterComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseMemoComponent from "./components/UseMemoComponent";
import UseRefComponent from "./components/UseRefComponent";

/*
  날짜: 2024/11/12
  이름: 박연화
  내용: 리액트 훅
*/
function App() {
  return (
    <>
      <h3>ch04. react hooks</h3>

      <h4>UseRef()</h4>
      <UseRefComponent />
      <UseEffectComponent />
      <UseMemoComponent />
      <UseCallbackComponent />
      <UseCounterComponent />
    </>
  );
}

export default App;
