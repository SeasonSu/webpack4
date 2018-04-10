import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader' // 新增
import { DatePicker } from 'antd';
import './index.scss'

hot(module)

const App = () => {
const onChange = (e) => {
    console.log(e)
}
  return (
    <div>34423
      <p>12323</p>
      <div>好棒2啊</div>
       <DatePicker onChange={onChange} />
    </div>
  );
};


export default App; // 修改
ReactDOM.render(<App />, document.getElementById("app"));
