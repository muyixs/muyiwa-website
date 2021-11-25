<template>
  <div class="c-subscribe">
    <p class="u-font-regular">
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
  margin-top: 110px;
  padding-top: 114px;
  border-top: 1px dashed rgba(0, 0, 0, 0.3);

  @include screen('small') {
    margin-top: 60px;
    padding-top: 80px;
  }

  > * {
    max-width: 750px;
  }

  form {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    @include screen('small') {
      display: block;
    }

    input[type='email'] {
      width: 72%;
      font-size: 2.2rem;
      padding: 30px 40px;
      border-radius: 10px;
      background: transparent;
      border: 1px solid $color-navy-blue;

      @include screen('small') {
        width: 100%;
        padding: 22px 30px;
      }
    }

    button {
      width: 28%;
      max-width: 200px;
      border-radius: 10px;
      border: none;
      color: $color-pastel-brown;
      font-weight: 500;
      background: $color-navy-blue;
      margin-left: 20px;
      flex-shrink: 0;

      @include screen('small') {
        width: 100%;
        max-width: none;
        margin-left: 0;
        margin-top: 20px;
        padding: 25px;
      }
    }
  }
}
</style>
