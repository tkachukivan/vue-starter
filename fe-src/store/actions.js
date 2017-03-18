export const loadBooks = ({ commit, state }) => {
  if (!state.booksList) {
    commit('TOGGLE_LOADER');
    fetch('/api/books').then(res => res.json()).then((books) => {
      commit('LOAD_BOOKS', books);
      commit('COUNT_PRICES_SUM');
      commit('TOGGLE_LOADER');
    });
  }
};

export const toggleBookToMy = ({ commit, state }) => {
  commit('TOGGLE_LOADER');

  fetch(`api/book/${state.route.params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'add',
    })
  }).then(() => {
    commit('TOGGLE_BOOK_TO_MY');
    commit('COUNT_PRICES_SUM');
    commit('TOGGLE_LOADER');
  }, () => {
    commit('TOGGLE_LOADER');
  });
};

export const buyBooks = ({ commit }) => {
  commit('TOGGLE_LOADER');
  fetch('/api/buy', {
    method: 'POST'
  }).then(res => res.json()).then(({ pricesSum }) => {
    commit('TOGGLE_LOADER');
    commit('SET_PRICES_SUM', pricesSum);
    commit('TOGGLE_BUY_POPUP');
  }, () => {
    commit('TOGGLE_LOADER');
  });
};

export const closeBuyPopUp = ({ commit }) => {
  commit('BOUGHT');
  commit('RESET_PRICES_SUM');
  commit('TOGGLE_BUY_POPUP');
};

