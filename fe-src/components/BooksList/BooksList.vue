<template>
  <div class="books-list-wrapper">
    <ul class="books-list">
      <li v-for="book in books" class="books-list__item">
        <router-link :to="{path: '/book/' + book.id }" class="books-list__book-link">
          <div class="books-list__item-info">
            <span class="books-list__item-name">
              "{{book.name}}"
            </span> by
            <span class="books-list__item-author">
              {{book.author}}
            </span>
          </div>
          <div class="books-list__item-price">
            {{book.price}}$
          </div>
        </router-link>
      </li>
    </ul>
    <div v-if="listType === 'user' && books && books.length > 0">
      <p class="books-list__price">
        Your Books cost: {{booksPrice}}$
      </p>
      <button class="button books-list__buy-button" @click="buy">
        buy books
      </button>
      <buy v-if="buyPopUp" :popUp="buyPopUp"></buy>
    </div>
  </div>
</template>
<script src="./BooksList.js"></script>