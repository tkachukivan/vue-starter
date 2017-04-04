<template>
    <div class="buy-wrapper">
        <div class="buy">
            <p class="buy__description">
                Thank you, you bought books in sum <span>{{priceSum}}$</span>, we send order to your e-mail
            </p>
            <button class="button" @click="closeBuy">
                ok
            </button>
        </div>
    </div>
</template>
<script src="./Buy.js"></script>