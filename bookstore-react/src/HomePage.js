import './css/HomePage.css'
import '../node_modules/picnic/picnic.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import React from "react";
import Fly from './img/Fly.jpg'
import TopMenu from "./TopMenu";
function ShowBook(props) {
    return(
        <div className="ShowBook">
            <div className = "ShowBookImg">
                <img src={Fly} alt = ""/>
                <button className = "success" >查看详情</button>
            </div>
        </div>
    );
}
class ShowNovel extends React.Component {
    constructor(props) {
        super(props);
        this.state={novel:props.novel};
    }
    render() {
        return(
        <div className = "DivideDiv">
            <div className="ThemeLine">
                <p className = "ThemeInside">分类：{this.state.novel}</p>
            </div>
            <ShowBook />
            <ShowBook />
            <ShowBook />
        </div>
    );
    }


}
function HomeTabs()
{
    return(
        <div className="show">
            <div className="tabs three">
                <input className='tab-1' type='radio' name='tabgroupB' checked/>
                <label className="pseudo button toggle" htmlFor="tab-1"/>
                <input className='tab-2' type='radio' name='tabgroupB'/>
                    <label className="pseudo button toggle" htmlFor="tab-2"/>
                    <input className='tab-3' type='radio' name='tabgroupB'/>
                        <label className="pseudo button toggle" htmlFor="tab-3"/>
                        <div className="row">
                            <div>
                                <img src={Fly} height="400"/>
                            </div>

                            <div>
                                <img src={Fly} height="400"/>
                            </div>

                            <div>
                                <img src={Fly} height="400"/>
                            </div>
                        </div>
            </div>
        </div>
    );
}
function DownMenu()
{
    return(
        <div className="DownMenu">
            <p>Powered by GainLos</p>
        </div>
    );
}

function HomePage() {
    const cs = {
        novel:'小说'
    };
    const  cp = {
        novel: '教材'
    };
    return (
            <div>
                {/*<TopMenu />*/}
                {/*<hometabs/>*/}
                <ShowNovel novel = {cs.novel}/>
                <ShowNovel novel= {cp.novel}/>
                <DownMenu/>
            </div>
        );
}
export default HomePage;