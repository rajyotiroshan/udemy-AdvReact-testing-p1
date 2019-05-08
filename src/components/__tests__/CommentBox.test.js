import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

//befoere every single it()
beforeEach(()=>{
    wrapped = mount(<CommentBox />);
});

//after every single it()
afterEach(()=>{
    //
    wrapped.unmount();
});

it('has a textarea and a button', ()=> {

    //console.log(wrapped.find('textarea'));
    //console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});


it(' has a textarea that user can typed in', ()=>{

    wrapped.find('textarea')//1. ref to textarea.
    .simulate('change', {//2. simulate a change event
        target: {value: 'new Comment'} //3.fake event object:: merge with the event object passed to the handler.
    }); 
    
    wrapped.update();//4.force update the
    
    expect(
        wrapped.find('textarea')//find textarea ref
        .prop('value')//access it's value prop
        ).toEqual('new Comment');
    
});



