import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {

    state = {comment: ''};

    //Compoenent just got rendered
    componentDidMount(){
        this.shouldNavigateAway();
    }

    //sees a new set of props
    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if(!this.props.auth) {
            this.props.history.push('/');
        }
    }
    handleChange = (event)=> {
        this.setState({comment: event.target.value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        //Call an action creator
        // to save comment to redux store
        this.props.saveComment(this.state.comment);
        //And save the comment.
        this.setState({comment:''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4> Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>            
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>    
            </div>

        );
    }
}

const mapStatetoProps = (state)=>{
    return {
        auth: state.auth
    }
}
export default connect(mapStatetoProps, actions)(CommentBox);