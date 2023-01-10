<template>
    <div>
    <v-toolbar dark color="#162130" style="height:10vh;">
      <v-toolbar-items class="btn" style="max-width: 30vw; min-width:1vw;">
        <v-hover v-slot="{ hover }">
          <v-btn flat :style="{ 'background-color': hover ? '#00e676' : 'white' }">  
            <NuxtLink class="enlace" to="/">MiBlog</NuxtLink> 
          </v-btn>
        </v-hover>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 30vw; min-width:1vw;">
        <v-hover v-slot="{ hover }">
          <v-btn flat :style="{ 'background-color': hover ? '#00e676' : 'white' }"> 
            <NuxtLink class="enlace" to="/AboutMe">Sobre mi</NuxtLink>
          </v-btn>
        </v-hover>
      </v-layout>
    </v-toolbar>
    <Nuxt />
  </div>
  </template>
  <script>
  export default {
    name: 'LayoutDefaul',
  }
  </script>

<style scoped src="@/assets/styles/default.css">
</style>