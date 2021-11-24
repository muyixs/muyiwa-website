<template>
  <section id="section-footer" class="c-footer">
    <h1 class="u-font-h1">CONTACT</h1>
    <p class="c-footer__subtext u-font-regular">
      Feel free to uy interests ar is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has. Some of the interesting.
    </p>
    <div class="c-footer__links">
      <a href="" class="c-footer__links-email">Say hello</a>
      <a data-text="Twitter" href="">Twitter</a>
      <a data-text="Github" href="">Github</a>
      <a data-text="Linkedin" href="">Linkedin</a>
    </div>
    <div class="c-footer__credit">
      <span>© {{ new Date().getUTCFullYear() }}</span>
      <span>Lorem ipsum dolor sit</span>
    </div>
  </section>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped>
.c-footer {
  margin: 160px 0 20px;
  padding-top: 100px;
  border-top: 1px dashed rgba(0, 0, 0, 0.3);

  &__subtext {
    max-width: 750px;
    margin-top: 40px;
  }

  &__links {
    margin-top: 100px;
    display: flex;
    align-items: center;

    > * {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 2.6rem;
      font-weight: 400;

      &:not(:first-child) {
        margin-left: 60px;
        color: inherit;

        position: relative;
        &::before {
          position: absolute;
          content: attr(data-text);
          top: 0;
          left: 0;
          color: $color-turquoise;
          width: 0%;
          overflow: hidden;
          transition: 0.3s ease-in-out;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
    }

    &-email {
      --size: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: var(--size);
      height: var(--size);
      color: var(--bg-color);
      background-color: $color-navy-blue;
      flex-shrink: 0;
      transition: 1.2s $easeOutExpo;
      color: white;
      font-size: 1.8rem;
      font-weight: 400;

      &:hover {
        transform: scale(1.12);
      }
    }
  }

  &__credit {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    text-transform: uppercase;
    font-size: 1.8rem;
  }
}
</style>
