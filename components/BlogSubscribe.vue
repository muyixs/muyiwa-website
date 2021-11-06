<template>
  <div class="c-subscribe">
    <p>
      Mostly amusing myself on here tbh! Turning over cool-looking rocks and
      writing down what I find. Subscribe to get new stories by email. I love
      you.
    </p>
    <form action="">
      <input type="email" placeholder="Enter your email address" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped>
.c-subscribe {
  display: flex;
  flex-direction: column;
  margin: 130px 0;
  padding-top: 114px;
  border-top: 1px dashed rgba(0, 0, 0, 0.3);

  > * {
    width: 60%;
  }

  p {
    font-size: 2.6rem;
  }

  form {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    input[type='email'] {
      width: 72%;
      font-size: 2.2rem;
      padding: 30px 40px;
      border-radius: 10px;
      background: transparent;
      border: 1px solid $color-navy-blue;
    }

    button {
      width: 28%;
      max-width: 200px;
      border-radius: 10px;
      border: none;
      color: $color-pastel-brown;
      font-weight: 500;
      background: $color-navy-blue;
    }
  }
}
</style>
