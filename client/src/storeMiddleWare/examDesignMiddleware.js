class MiddleWare {
    static examDesignMiddleware = (data) => {
        return dispatch => {
            fetch('/createExam',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            }).then(res => {
                return res.json();
            }).then(res=>{
                console.log(res,'middleware res')
                if(res.success){
                    alert('question_Answer created')
                }
            })
        }
    }
}
export default MiddleWare;