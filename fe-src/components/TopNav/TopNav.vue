<template>
    <header class="header">
        <nav class="header-nav">
            <router-link to="/" class="header-nav__item">home</router-link>
            <router-link to="/books" class="header-nav__item">My Books ({{booksQuantity}})</router-link>
        </nav>
    </header>
</template>
<script src="./TopNav.js"></script>