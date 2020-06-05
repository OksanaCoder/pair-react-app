import React, { Component } from 'react';


class Comment extends Component {
   state = {
       comment: {
           comment : '',
           rate : '',
           elementID: ''
       }
   };

   updateComment = event => {
       this.setState({

                comment: {
                    comment : event.target.value,
                    rate : parseInt(event.target.value),
                    elementID: parseInt(event.target.value)
                }
         
       })
  
   }
  
   addComment = event => {
       event.preventDefault();
       console.log(this);
       
   }
//    submitComment = async e => {
//        e.preventDefault();
//        try {
//            let response  = await fetch("https://striveschool.herokuapp.com/api/comment", {
//             method: "POST",
//             body: JSON.stringify(this.state.comment),
//             headers: {
//               "Content-Type": 'application/json'
//             }
//           })

//           if (response.ok) {
//             alert('Comment saved!')
//             this.setState({
         
//                 comment: {
//                     comment : '',
//                     rate : '',
//                     elementID: ''
//                 }
              
//             })
//           } else {
//             let json = await response.json()
//             alert(json)
//           }
//         } catch (e) {
//           console.log(e)
//         }
//         }
    
//         updateComment = event => {
//             // console.log('event', event)
//             let reservation = this.state.comment
//             let currentId = event.currentTarget.id
//             console.log(currentId)
        
//             if (currentId === 'id' || currentId === 'rate') {
//               reservation[currentId] = parseInt(event.currentTarget.value)
//             } 
//             else {
//               reservation[currentId] = event.currentTarget.value
//             }
        
//             this.setState({ comment: comment })
//           }
        

    render () {
       return (
        <> 
        <div className='container'>
        <form>
        <div className="form-group">
          <input
          
            className="form-control"
            placeholder="😎 ID"
            name="ID"
            id="id"
            type="number"
        
            onChange={this.updateComment}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="😎 rate from 1 to 5"
            className="form-control"
            name="rate"
            id='rate'
            type="number"
    
            onChange={this.updateComment}
          />
        </div>
        <div className="form-group">
          <textarea
            id='comment'
            className="form-control"
            placeholder="🤬 Your Comment"
            name="message"
            rows="5"
       
            onChange={this.updateComment}
          />
        </div>

       

        <div className="form-group">
          <button className="btn btn-primary" type='submit' onClick={this.addComment}>
            Comment ➤
          </button>
        </div>

   
      </form>
      </div>
      </>
       )

    }
}

export default Comment;