<template>
  
  <div class="box  px-4 py-16">
    <!-- si no coloco esto no me anda -->
    <p>{{$route.params.slug}}</p> 
    <article class="post">
      <h1>{{ post.title }}</h1>
      <div class="author">
        <p>Por {{ post.author }}</p>
        <small>Fecha de publicación: {{ post.updated }}</small>
      </div>
      <p>{{ post.description }}</p>
      <figure>
        <img :src="post.cover" :alt="post.cover" />
        <figcaption>Portada - {{ post.title }}</figcaption>
      </figure>
      <VueMarkdown class="markdown">{{ post.content }}</VueMarkdown>
    </article>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'ArticlePage',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      post: {
        slug: 'mi-primer-post',
        title: 'Mi ultra primer post',
        author: 'Diana Martínez',
        updated: '8/06/2022',
        description: 'Lorem ispum dolor sit amet',
        cover: 'https://via.placeholder.com/1024x420',
        content: '# Title\n\n## Second title\n\nLorem ipsum dolor sit amet',
      },
    }
  },
  head() {
    return {
      title: this.post?.title,
      meta: [{ name: 'description', content: this.post?.description || '' }],
    }
  },
}
</script>
<style>

img{
  width: 50%;
  height: 50%;
}
</style>