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
      articles:[
        {
          title: "Mi primer post",
          slug:"mi-primer-post",
          date: new Date()
        }
        
      ]
    }
  }
}
</script>
<style>
main{
  display: flex;
  flex-wrap: wrap;  
}

</style>