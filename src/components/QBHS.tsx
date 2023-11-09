import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { images } from "./consts";
import { randomSevenDigits } from "./util";

export const QBHS = () => {
  const [date, setDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("2023年10月30日");
  const [bDate, setBDate] = useState("");
  const [formattedBDate, setFormattedBDate] = useState("2000年12月18日");
  const [name, setName] = useState("陈国强");
  const [amount, setAmount] = useState("叁万");
  const [driverId, setDriverId] = useState("");
  const [y,setY]=useState(2023);

    useEffect(()=>generateDriverId,[]);


  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const [year, month, day] = selectedDate.split("-");
    const formatted = `${year}年${month.padStart(2, '0')}月${day.padStart(2, '0')}日`;
    setDate(selectedDate);
    setY(+year);
    setFormattedDate(formatted);
  };

  const handleBDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const [year, month, day] = selectedDate.split("-");
    const formatted = `${year}年${month.padStart(2, '0')}月${day.padStart(2, '0')}日`;
    setBDate(selectedDate);
    setFormattedBDate(formatted);
  };



  const generateDriverId=():void=>{
    setDriverId("F"+randomSevenDigits()+randomSevenDigits());
  }

  const driverIdGenerationHandler=(e: SyntheticEvent)=>{
    e.preventDefault();
    generateDriverId();
  }

  return (
    <>
    <section className="main">
    <section className="content">
        <div className="inform">
          <div className="header">
            <img src={images.headerImage} alt="ShangHaiCourtIcon" className="SHCIcon" />
            <p className="issuer-title">上海市中级人民法院</p>
            <p className="title">取保候审决定书</p>
            <div className="info">
              <div className="loc-date">
                <p>发文单位:中华人民共和国中级人民法院</p>
                <p>发文日期:中华人民共和国中级人民公元{formattedDate}</p>
              </div>
              <div className="code">
                <p className="year-report">
                <span className="year">{y}</span>
                年度 ( 沪侦 ) <span>01384679</span></p>
                <img src={images.barcode} alt="barcode" />
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="mid-bg"></div>
          </div>
          <div className="mid-content">
            <p>
              受<span className="sp"></span>文<span className="sp"></span>者：
              <span className="red">{name}</span>
            </p>
            <p>出生日期：{formattedBDate}</p>
            <br />
            <p>
              驾驶证号： <span className="red">{driverId}</span>
            </p>
            <br />
            <p>案由： 因违反国家金融秩序罪及防制诈骗洗钱条例法</p>
            <br />
            <p>根据《中华人民共和国刑事诉讼法》第六十九条 第三款之规定</p>
            <p>
              涉案嫌疑人<span className="red">{name}</span>
              在案件侦查程序期间，因本案开庭审理多数受害群众尚有异议，
            </p>
            <p>且有多名犯案嫌疑人未到案，经由本院审查评估，</p>
            <p>
              涉案嫌疑人<span className="red">{name}</span>
              须以取保候审方式进行担保，
            </p>
            <p>
              本院裁定保证金 <span className="red">{amount}美元整</span>,
              并提交香港金融监督管理局代为监管，
            </p>
            <p>涉案嫌疑人案件侦查期间应当遵守下列规定：</p>
            <ul className="rules">
              <li>一.&emsp;未经执行机关批准不得离开所居住城市</li>
              <li>二.&emsp;在传讯的时候及时到案</li>
              <li>三.&emsp;不得以任何形式干扰证人作证</li>
              <li>四.&emsp;不得有串供，潜逃，湮灭证据之行为产生</li>
            </ul>
          </div>
          <img src={images.bottomImage} alt="" />
        </div>
      </section>
      <section id="form">
        <form action=""
        id="report"
        className="inputs"
        >
        <div>
            <label htmlFor="description">姓名: </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              list={"names"}
            />
          </div>
          <div>
            <label htmlFor="description">驾照号: </label>
            <input
              id="driverId"
              type="text"
              value={driverId}
              onChange={(e) => setDriverId(e.target.value)}
            />
            <button onClick={(e)=>driverIdGenerationHandler(e)} className="btn">生成驾照号</button>
          </div>
          <div>
            <label htmlFor="description">金额: </label>
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              list={"amounts"}
            />
          </div>
            <div>
            <label htmlFor="datePicker">选择签发日期: </label>
            <input
              type="date"
              id="datePicker"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div>
            <label htmlFor="bdatePicker">选择出生日期: </label>
            <input
              type="date"
              id="bdatePicker"
              value={bDate}
              onChange={handleBDateChange}
            />
          </div>
          
        </form>
      </section>
    </section>
      
    </>
  );
};
