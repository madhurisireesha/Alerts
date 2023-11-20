import Loader from 'react-loader-spinner'
import { Component } from "react";
import AlertNoti from '../AlertNoti'
import './index.css'

class Notification extends Component{
    state={
        isLoading:true
    }
    renderLoader=()=>{
        this.setState({
            isLoading:false
        })
    }
    render(){
        const{isLoading}=this.state
        return(
            
            <>
            {isLoading?this.renderLoader():
            <div className="alertcontainer">
                <AlertNoti>
                    <h1>Alert Notifications</h1>
                <div className="o1">
                <div className="one">
                    <img src="" alt="success" className="imagi"/>
                    
                
                </div>
                <div className="two">
                <h1 className="success">Success</h1>
                    <p className="msg">You can access all the files in the folder</p>
                </div>
                </div>
                </AlertNoti>
                <AlertNoti>
                <div className="o1">
                <div className="one">
                    <img src="" alt="success" className="imagi"/>
                    
                
                </div>
                <div className="two">
                <h1 className="error">Error</h1>
                    <p className="msg">Sorry,you are not authorized to delete this file</p>
                </div>
                </div>
                </AlertNoti>
                <AlertNoti>
                <div className="o1">
                <div className="one">
                    <img src="" alt="success" className="imagi"/>
                   
                
                </div>
                <div className="two">
                <h1 className="warning">Warning</h1>
                    <p className="msg">Viewers of this file can see comments and suggestions</p>
                </div>
                </div>
                </AlertNoti>
                <AlertNoti>
                <div className="o1">

                <div className="one">
                    <img src="" alt="success" className="imagi"/>
                   
                
                </div>
                <div className="two">
                <h1 className="info">Info</h1>
                    <p className="msg">Anyone on the internet can view this file</p>
                </div>
                </div>
                </AlertNoti>
            </div>
        
        }
            </>
        )
    }
}
export default Notification