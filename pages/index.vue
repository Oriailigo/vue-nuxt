<template>
  <div class="container">
    <AboutMe/>
    <div class="content">
      <main>
        <ArticleCard 
          v-for="article in articles"
          :key="article.slug"
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
      articles:[1,2,3,4,5]
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