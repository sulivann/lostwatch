import { createSelector } from 'reselect';
import * as modalActions from '../actions/modalActions';

const initialState = {
  data: {},
  modalType: false,
  isActive: false,
  content: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case modalActions.OPEN_MODAL:
      return {
        ...state,
        isActive: true,
        content: action.content
      };
    case modalActions.CLOSE_MODAL:
      return {
        ...state,
        isActive: false,
        content: '',
      };
    default:
      return state;
  }
}

export const getModalReducer = state => state.modal;

export const getModalIsActive = createSelector(
  getModalReducer,
  modal => modal.isActive,
);

export const getModalContent = createSelector(
  getModalReducer,
  modal => modal.content,
)
