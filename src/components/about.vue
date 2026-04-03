<template>
  <section id="about">
    <div class="welcome-paragraph">
      <h3>Hey World, I'm Susan!</h3>

      <div class="profile-img">
        <picture>
          <img :src="profileImg" alt="profile">
        </picture>
      </div>

      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="contact-icons">
      <a href="https://github.com/susanacst"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/susanasct/"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="mailto:susanasct098@gmail.com"><i class="fa-regular fa-envelope"></i></a>
    </div>

    <div class="main-container-buttons">
      <a href="https://drive.google.com/...">
        <button class="primary-button">
          <i class="fa-regular fa-star"></i>
          download cv
          <i class="fa-regular fa-star"></i>
        </button>
      </a>
    </div>
  </section>
</template>

<script setup>
  import profileImg from '../assets/img-profile.jpg'  
</script>