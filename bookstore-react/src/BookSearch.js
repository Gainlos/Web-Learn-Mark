import React from "react";
import './css/booksearch.css'
import '../node_modules/picnic/picnic.css'
import Fly from './img/Fly.jpg'
import BookIndex from "./BookIndex";
class ContainAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            IsClick: false,
            FistName:{}
        };
        this.ChangeClick=this.ChangeClick.bind(this);
        this.ChangeFirstName=this.ChangeFirstName.bind(this);
    }
    ChangeClick(e){
        this.setState({IsClick : !this.state.IsClick});
    }
    ChangeFirstName(e){
        this.setState({FirstName:{e}});
    }
    render() {
        let TheName="";
        const Mems=[];
        const Cata=this.props.category;
        let a=0;
        if(this.props.rows.length > 0){
            this.props.rows.forEach(
                (Product) => {
                    // console.log(1);
                    // debugger;
                    if((Product.category.indexOf(Cata) != -1 ||Product.name.indexOf(Cata) != -1) && a<3 ){
                        a+=1;
                        if(a==1) {
                            TheName=Product;}

                        Mems.push(
                            // <ShowBookImage name={Product.name}/>
                        <div className="ShowBookBookSearch">
                            <div className="ShowBookImgBookSearch">
                                <img src={Fly} alt={Product.name}/>
                                <p>{Product.name}</p>
                            </div>
                            <button className={this.state.IsClick?"error":"success"} onClick = {this.ChangeClick}>查看详情</button>
                        </div>
                                );
                    }
                    // else {
                    //     Mems.push(
                    //         <div className="ShowBookBookSearch">
                    //             <div className="ShowBookImgBookSearch">
                    //                 <img src={Fly} alt={Product.name}/>
                    //             </div>
                    //             <button className="success">查看详情</button>
                    //         </div>
                    //     );
                    // }
                }
            );
        }
        // debugger;
        const Ans=[];
        if(this.state.IsClick==false)
        {
            Ans.push(
                <div className="containBookSearch">
                    <div className="ThemeLineBookSearch">
                        <h1 className="ThemeLineBookSearchH1">搜索结果：{this.props.category}</h1>
                    </div>
                    <div>{Mems}</div>
                </div>);
        }
        else {
            Ans.push(
                <BookIndex Index={TheName}/>
            );
        }
        return (

            <div>
                {Ans}
            </div>


        );
    }
}

class BookSearch extends React.Component {

render() {


    return (
        <ContainAnswer category={this.props.category} rows={this.props.rows} />
    );}
}

export default BookSearch;