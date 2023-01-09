<template>
    <div class="article-card">
        <h3>{{ title }}</h3>
        <div class="author">
            <p>Por {{ author }}</p>
            <!-- <small>Fecha de publicación: {{ date.toLoacleDateString() }}</small> -->
            <small>Fecha de publicación: {{ date }}</small>
        </div>
        <figure>
            <img :src="cover" alt="cover" />
        </figure>
        <p>{{ description }}</p>
        <!-- <div class="actions">
            <a class="btn" :href="slug">Ir al post</a>
        </div> -->
        <v-btn
            depressed
            color="primary"
            :href="slug"
            >
            Ir al post
        </v-btn>
       
    </div>
</template>
<script>
export default {
  name: 'ArticleCard',
  props: {
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    date: {
      type: Date,
      default: '',
    },
    cover: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  }
}
</script>
<style>
.article-card{
    border:red 0.1rem;
    border-style: solid;
    padding-left: 2rem;
    padding-right: 2rem;  
    flex: 0 0 33%;
    margin-top:4rem ;
}
</style>
    
    