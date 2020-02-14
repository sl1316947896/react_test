import React from 'react';
import './home.css';
import RollDemo from '../components/RollDemo';

class Home extends React.Component {
  render() {
    const data =['ajax', 'IOS', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端']
    const list = [
      {
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      },{
        job: '职位',
        city: '城市',
        time: '1分钟'
      }
    ]
    return (
      <div className="App">
      <header className="App-header">
        <div className="header-main">
          <div className="header-left">
            <a src='' className="header-logo">
              <img style={{height:20}} src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" />
            </a>
            <span className="header-row">|</span>
            <span>社招官网</span>
            <ul className="header-list">
              <li><a href="#" style={{color: '#F37327'}}>首页</a></li>
              <li><a href="#">社会招聘</a></li>
              <li><a href="#">校园招聘</a></li>
              <li><a href="#">了解阿里</a></li>
              <li><a href="#">个人中心</a></li>
            </ul>
          </div>
          <div className="header-right">
            <span>
              欢迎来到阿里巴巴招聘网！
            </span>
            <a href="#">注册</a>
            <span style={{margin:'0 4px'}}>|</span>
            <a href="#">登陆</a>
          </div>
        </div>
      </header>
      <div className="App-banner">
        <div className="banner-box">
          <p>If not now, when?</p>
          <p>If not me, who?</p>
          <p style={{fontSize:38}}>此时此刻，非我莫属！</p>
          <div className="box-search">
            <div style={{width: '100%', height:'100%', opacity:0.1, position:'absolute',background:'#fff'}}></div>
            <input placeholder="请输入职位关键词" className="box-search-input" />
            <button className="search-but">搜索</button>
          </div>
          <div className="box-search-item">
            <span>热词搜索:</span>
            <ul>
              {
                data.map((item, index) => {
                  return (
                    <li key={index}><a href="#">{item}</a></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="App-footer">
          <div className="footer-left">
            <RollDemo data={list} />
          </div>
          <div className="footer-right">
            <div className="right-top right-te" style={{marginBottom:20}}>
              <a href="#">
                <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" />>
              </a>
            </div>
            <div className="right-bottom right-te">
              <a>
                <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
  }
}

export default Home;
