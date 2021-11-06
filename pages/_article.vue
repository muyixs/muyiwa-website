<template>
  <div class="c-article">
    <div class="c-article__container">
      <p class="c-article__tag">SOFTWARE ARCHITECTURE</p>
      <h1 class="u-font-h1">Quantum computing</h1>
      <p class="c-article__excerpt u-font-regular">
        The experience a reader gets on a blog has a lot to do with how content
        is structured and relayed. Something we were keen on is relaying
        information.
      </p>
      <p class="c-article__date">
        <span>NOV 10, 2021</span><span>4 MIN READ</span>
      </p>
      <div class="c-article__content">
        <p>
          The experience a reader gets on a blog has a lot to do with how
          content is structured and relayed. Something we were keen on is
          relaying information in a very neat manner. We tried to declutter our
          home page so only important information is displayed. We also greatly
          used white space to enhance readability by making the website look
          simple and uncluttered. This way, we are able to deliver information
          to our readers without distractions. Also, something important we did
          was to have the latest post styled a bit differently at the top of the
          home page, this way, we’re able to draw a reader’s attention to this
          latest article when you land on the page.
        </p>
        <p>
          The experience a reader gets on a blog has a lot to do with how
          content is structured and relayed. Something we were keen on is
          relaying information in a very neat manner. We tried to declutter our
          home page so only important information is displayed. We also greatly
          used white space to enhance readability by making the website look
          simple and uncluttered. This way, we are able to deliver information
          to our readers without distractions. Also, something important we did
          was to have the latest post styled a bit differently at the top of the
          home page, this way, we’re able to draw a reader’s attention to this
          latest article when you land on the page.
        </p>
        <p>
          The experience a reader gets on a blog has a lot to do with how
          content is structured and relayed. Something we were keen on is
          relaying information in a very neat manner. We tried to declutter our
          home page so only important information is displayed. We also greatly
          used white space to enhance readability by making the website look
          simple and uncluttered. This way, we are able to deliver information
          to our readers without distractions. Also, something important we did
          was to have the latest post styled a bit differently at the top of the
          home page, this way, we’re able to draw a reader’s attention to this
          latest article when you land on the page.
        </p>
      </div>
    </div>
    <div class="c-article__posts-wrap">
      <h3>More Articles</h3>
      <blog-post tags="Software design" />
      <blog-post tags="artificial intelligence" />
    </div>
    <blog-subscribe />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {},
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.c-article {
  padding-top: 13vh;

  &__container {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
  }

  &__excerpt {
    margin-top: 24px;
    // font-size: 2rem;
    line-height: 33px;
  }

  &__tag,
  &__date {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__date {
    margin-top: 28px;
    display: flex;
    align-items: center;

    & > :first-child {
      display: flex;
      align-items: center;

      &::after {
        content: '';
        display: inline-block;
        $size: 6px;
        width: $size;
        height: $size;
        background-color: rgba(0, 0, 0, 0.8);
        margin: 0 10px;
        border-radius: 100%;
      }
    }
  }

  &__content {
    margin-top: 80px;

    p {
      margin-bottom: 50px;
      font-size: 2.2rem;
      line-height: 36px;
    }
  }

  &__posts-wrap {
    margin-top: 190px;

    h3 {
      font-size: 2.8rem;
      text-transform: uppercase;
      margin-bottom: 60px;
      font-weight: 500;
    }
  }
}
</style>
