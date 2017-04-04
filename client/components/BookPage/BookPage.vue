<template>
  <div class="book">
    <h2 class="book__name">
      {{book.name}}
    </h2>
    <div class="book-info-wrapper">
      <div>
        <p v-if="book.series" class="book__series"><span>Series:</span> {{book.series}}</p>
        <p class="book__author"><span>Author:</span> {{book.author}}</p>
        <p class="book__genre"><span>Genre:</span> {{book.genre}}</p>
        <p class="book__price"><span>Price:</span> {{book.price}}$</p>
      </div>
      <div>
        <div v-if="book.inStock">
          <button v-if="book.added" class="button button_remove" @click="toggleBook">
            remove
          </button>
          <button v-else class="button" @click="toggleBook">
            add to my books
          </button>
        </div>
        <div v-else>
          <p class="book__not">Sorry, now we don't have this book in our stock</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./BookPage.js"></script>