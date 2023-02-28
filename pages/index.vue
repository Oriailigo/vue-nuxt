<template>
  <div class="container">
    <AboutMe/>
    <div class="content">
      <main>
        <ArticleCard 
          v-for="article in articles"
          :key="article.slug"
          v-bind="article"
        />
      </main>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      articles:[],
    }
  }, 
  async mounted() {
    const url = `http://localhost:9999/.netlify/functions/articles`
    const { articles } = await this.$http.$get(url)
    this.articles = articles.map((a) => ({
      ...a,
      author: a['author-name'][0],
      date: new Date(a.updated),
      cover: a.cover[0]?.thumbnails.large.url,
    }))
  },
}
</script>
<style>
main{
  display: flex;
  flex-wrap: wrap;  
}

</style>