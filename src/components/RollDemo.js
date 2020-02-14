
/*eslint-disable*/
import { Form } from 'antd';
import React from 'react';
import './RollDemo.css';


class RollDemo extends React.Component {
  constructor(props) {
    super(props);
  }
    
    componentDidMount = () => {
        //文字无缝滚动
        this.industryNews = setInterval(this.taskIndustryNews, 50);
    }
    taskIndustryNews = () => {
        if (this.refs.newDiv.scrollTop >= this.refs.newDivUI.offsetHeight - this.refs.newDiv.clientHeight) {
            this.refs.newDiv.scrollTop = 0;
        }
        else {
            this.refs.newDiv.scrollTop += 1;
        }
    }


    handleIndustryNewsEnter = () => {
        clearInterval(this.industryNews);
    }
    handleIndustryNewsLeave = () => {
        this.industryNews = setInterval(this.taskIndustryNews, 50);
    }
    componentWillUnmount = () => {
        clearInterval(this.industryNews);
    }


    render() {
        const {data} = this.props;
        return (
            <div className='ceShiTable'>
                <div className='ceShiTable-title' style={{overflow: 'hidden'}}>
                    <span className='ceShiTable-text2' style={{float:'left'}}>最新职位</span>
                    <span className='ceShiTable-text2' style={{float: 'right'}}><a href="#" style={{color:'#ccc'}}>更多</a></span>
                </div>
                <div
                    ref='newDiv'
                    className='ceShiTable-body'
                    onMouseEnter={this.handleIndustryNewsEnter.bind(this)}
                    onMouseLeave={this.handleIndustryNewsLeave.bind(this)}
                >
                    <ul ref='newDivUI'>
                        {data && data.length > 0
                            ?
                            data.map((item,index) => {
                                return (
                                    <li key={index}>
                                            <span><a href="#" style={{color:'#3c99d8'}}>{item.job}</a></span>
                                            <span>{item.city}</span>
                                            <span>{item.time}</span>
                                    </li>
                                )
                            })
                            : <span className='noData'>暂无数据</span>
                        }
                    </ul>
                </div>
            </div>
        );
    }

}
const EditableFormTable = Form.create()(RollDemo);
export default EditableFormTable;