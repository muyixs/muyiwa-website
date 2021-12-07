<template>
  <div class="c-subscribe">
    <p class="u-font-regular">
      Subscribe to my newsletter to get new updates by email on the latest
      topics and artciles I write about.
    </p>
    <form
      id="mc-embedded-subscribe-form"
      action="https://olumuyiwa.us20.list-manage.com/subscribe/post?u=c3bb4a9729ecf903a98093cc8&amp;id=dda907c6ca"
      method="post"
      name="mc-embedded-subscribe-form"
    >
      <input
        id="mce-EMAIL"
        name="EMAIL"
        type="email"
        placeholder="Enter your email address"
        required
      />
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
    margin-top: 45px;
    padding-top: 60px;
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
      background-color: transparent;
      border: 1px solid $color-navy-blue;

      @include screen('small') {
        width: 100%;
        padding: 20px 30px;
        font-size: 2rem;
      }
    }

    button {
      width: 28%;
      max-width: 200px;
      border-radius: 10px;
      border: none;
      color: white;
      font-weight: 500;
      background: $color-navy-blue;
      margin-left: 20px;
      flex-shrink: 0;

      @include screen('small') {
        width: 100%;
        max-width: none;
        margin-left: 0;
        margin-top: 20px;
        padding: 22px;
      }
    }
  }
}
</style>
