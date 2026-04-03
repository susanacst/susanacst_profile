<script setup>
import img1 from '../assets/captura-ejemplo.jpg'
const projects = [
  {
    title: "Project title",
    description: "Lorem ipsum dolor sit amet...",
    image: img1,
    github: "https://github.com/susanacst",
    demo: "https://proyecto-ejemplo.com"
  }
]
</script>

<template>
  <section id="proyects">
    <h2>Proyects</h2>

    <div class="card-proyect-container">
      <div class="card" v-for="(project, index) in projects" :key="index">
        
        <div class="img">
          <img :src="project.image" alt="project">
        </div>

        <div class="text">
          <p class="h3">{{ project.title }}</p>

          <div class="info-card">
            <p class="summary-proyect">
              {{ project.description }}
            </p>

            <div class="buttons-proyect-container">
              <a :href="project.github"><i class="fa-brands fa-github"></i></a>
              <a :href="project.demo"><i class="fa-solid fa-globe"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>