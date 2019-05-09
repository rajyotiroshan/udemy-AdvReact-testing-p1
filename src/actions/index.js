import {SAVE_COMMENT} from 'actions/type';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}