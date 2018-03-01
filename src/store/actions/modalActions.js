export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(content) {
  return {
    type: OPEN_MODAL,
    content: content,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
