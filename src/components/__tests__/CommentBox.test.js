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
    wrapped = mount(<CommentBox />);

    //console.log(wrapped.find('textarea'));
    //console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});



