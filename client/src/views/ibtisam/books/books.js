import React from "react";
import "./books.css";
import myStore from "../../../store";
import DashNav from '../../../StudentPortal/DashBoard/DashNav/dashNav'
import SlideBar from '../../../StudentPortal/DashBoard/SlideBar/slideBar'
import { connect } from "react-redux";

class Books extends React.Component {

    state = {
        selectedFile: null
    }

    selectedFileHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    uploadFileHandler = () => {
        myStore.dispatch({
            type: "SELECT_FILE",
            data: this.state
        });
        console.log(this.state);
    }

    render() {
        return <>
        <DashNav/>
        <SlideBar/>
            <div id="booksComponent">
                <div id="textDiv">
                    <span>Text Books</span>
                </div>

                <div id="uploadBooksMainDiv">
                    {
                        this.props.images.map((item) => {
                            return <>
                                <div className="booksDiv">
                                    {
                                        item.selectedFile ? <img className="image" src={URL.createObjectURL(item.selectedFile, { oneTimeOnly: false })} /> : null
                                    }
                                    <div className="nameDiv">
                                        <span className="span">{item.selectedFile.name} </span>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>

            <input type="file" onChange={this.selectedFileHandler}></input>
            <button onClick={this.uploadFileHandler}>Add Book</button>
        </>
    }
}

function getImage(myStore) {
    return {
        images: myStore.getData
    }
}
export default connect(getImage)(Books);

