<template>
    <ul class="books">
      <Movie v-for="book of books"   :key="book.id" :movie="book"/>
    </ul>
  </template>
  <script>
    import Book from './Book.vue'
    export default {
      components:{
        Book,
      },
      data() {
        return {
          books: [{
              id: 0,
              title: 'red and black'
            },
            {
              id: 1,
              title: '1984'
            }
          ]
        }
      }
    }
  </script>