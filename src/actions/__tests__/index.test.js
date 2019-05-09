import {SAVE_COMMENT} from 'actions/types';
import {saveComment} from 'actions';

describe('saveComment', ()=>{

    it('has the correct type', ()=>{
        let action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', ()=>{
        let action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
});