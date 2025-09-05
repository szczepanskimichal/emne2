 export function updateView() {
            if (model.app.currentPage === 'edit') updateViewEdit();
            else updateViewMain();
        }
        updateView();