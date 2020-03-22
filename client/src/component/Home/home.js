import React from 'react';
const Max_ITEM = 3;
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen : false,
            item : []
        }
       
    }
    componentDidMount(){
        fetch('/getQuaterData',{
            method: 'GET',
        }).then(res=>{
            return res.json();
        }).then(res =>{
            console.log(res)
            this.setState({
                item: res.quarterData
            })
        })
    }
    getItem = () => {
        if(this.state.isOpen){
            return this.state.item
        }
        return this.state.item.slice(0,Max_ITEM);
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    } 
    render(){
        console.log(this.state.item)
        let allItem =  this.getItem().map(item => {
            return <div>
                <tr><b>course</b>: {item.courseName}</tr>
                <tr><b>campus</b>: {item.campus}</tr>
                <tr><b>city</b>: {item.city}</tr>
                <tr><b>day</b>: {item.day}</tr>
                <tr><b>quaterfee</b>: {item.quaterfee}</tr>

            </div>
        })
        return <div>
           <div>{allItem}</div>
            <button onClick={this.toggle}>{this.state.isOpen ? 'less' : 'more'}</button>
        </div>
    }
}
export default Home

// const MAX_ITEMS = 3;

// class home extends React.Component{
//   componentWillMount() {
//     this.state = {
//       isOpen: false,
//     };
//     this.items = [
//      'Item 1',
//      'Item 2',
//      'Item 3',
//      'Item 4',
//      'Item 5',
//      'Item 6',
//     ];
//   }
  
//   toggle = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   }
  
//   getRenderedItems() {
//     if (this.state.isOpen) {
//       return this.items;
//     }
//     return this.items.slice(0, MAX_ITEMS);
//   }

//   render() {
//     return(
//       <div>
//         {this.getRenderedItems().map((item, id) => (
//           <div key={id}>{item}</div>
//         ))}
//         <button onClick={this.toggle}>
//           {this.state.isOpen ? 'less' : 'more'}
//         </button>
//       </div>
//     );
//   }
// }
// export default home;