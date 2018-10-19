export const loadBooks = ({ commit, state }) => {
    if (!state.booksList) {
        commit('TOGGLE_LOADER');
        fetch('/api/books')
            .then(res => res.json())
            .then(({ booksArray, addedBooks }) => {
                commit('LOAD_BOOKS', booksArray);
                commit('COUNT_PRICES_SUM');
                commit('SET_ADDED_BOOKS', {
                    type: 'set',
                    addedBooks
                });
                commit('TOGGLE_LOADER');
            }).catch(() => {
                commit('TOGGLE_LOADER');
            });
    }
};

export const getBookById = ({ commit, state }) => {
    commit('TOGGLE_LOADER');
    return fetch(`/api/book/${state.route.params.id}`)
        .then(res => res.json())
        .then((data) => {
            commit('SET_ADDED_BOOKS', {
                type: 'set',
                addedBooks: data.addedBooks
            });
            commit('TOGGLE_LOADER');
            if (data.not_found) {
                return false;
            }
            return data.bookById;
        })
        .catch(() => {
            commit('TOGGLE_LOADER');
        });
};

export const toggleBookToMy = ({ commit, state }) => {
    commit('TOGGLE_LOADER');

    return fetch(`/api/book/${state.route.params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(({ type }) => {
            commit('TOGGLE_BOOK_TO_MY');
            commit('COUNT_PRICES_SUM');
            commit('SET_ADDED_BOOKS', {
                type
            });
            commit('TOGGLE_LOADER');
        }).catch(() => {
            commit('TOGGLE_LOADER');
        });
};

export const buyBooks = ({ commit }) => {
    commit('TOGGLE_LOADER');
    return fetch('/api/buy', {
        method: 'POST'
    }).then(res => res.json()).then(({ pricesSum }) => {
        commit('TOGGLE_LOADER');
        commit('SET_PRICES_SUM', pricesSum);
    }, () => {
        commit('TOGGLE_LOADER');
    });
};

export const closeBuyPopUp = ({ commit }) => {
    commit('BOUGHT');
    commit('SET_ADDED_BOOKS', {
        type: 'reset'
    });
    commit('RESET_PRICES_SUM');
};

