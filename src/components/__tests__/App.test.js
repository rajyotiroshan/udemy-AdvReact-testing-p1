import React from 'react';
//import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', ()=> {
    const div = document.createElement('div');
    
/*     ReactDOM.render(<App/>, div);

    //Looks inside the div
    // and checks to see if the commentBox is in there
    
    //clean up the div
    //clear memory to increase performance.
    //look for the App component inside div and remove it completely.
    //console.log(div.innerHTML);

    expect(div.innerHTML).toContain('Comment Box');
    ReactDOM.unmountComponentAtNode(div); */

    //using shallow

    const wrapped = shallow(<App/>);//return a component with new function on it.that a new wrapped component.
    
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

//test for App compoenent have an instance of CommentList Component.

it('shows a CommentList', ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find(CommentList).length).toEqual(1);
});

