<template>
  <component
    :is="type"
    :href="href"
    :type="submit"
    :class="['button', size, state, variation]">
      <slot/>
  </component>
</template>

<script>
export default {
  name: "Button",
  status: "prototype",
  release: "3.5.0",
  props: {
    type: {
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(button|a)/)
      },
    },
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large)/)
      },
    },
    href: {
      type: String,
      default: null,
    },
    submit: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(null|submit)/)
      },
    },
    state: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(hover|active|focus)/)
      },
    },
    variation: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(primary|secondary)/)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  @include reset;
  @include inset-space($space-m);
  will-change: transform;
  transition: all 0.2s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: $weight-semi-bold;
  font-size: $size-m;
  font-family: $font-text;
  line-height: $line-height-m;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  box-shadow: inset 0 0 0 2px $color-primary;
  border-radius: $radius-default;
  background: transparent;
  color: $color-primary;
  cursor: pointer;
  &:hover,
  &.hover {
    color: $color-white;
    background: $color-primary;
    transform: translateZ(0) scale(1.03);
  }
  &:active,
  &.active {
    transition: none;
    background: $color-primary-dark;
    box-shadow: none;
    color: $color-white;
    transform: translateZ(0) scale(1);
  }
  &:focus,
  &.focus {
    background: $color-primary-darker;
    box-shadow: none;
    color: $color-white;
    transform: translateZ(0) scale(1);
    outline: 0;
  }
  // For icons inside buttons
  .icon {
    float: right;
    margin: -#{$space-xs} -#{$space-xs} -#{$space-s} $space-xs/2;
    color: $color-primary;
  }
  // Various button sizes
  &.large {
    @include inset-squish-space($space-s);
    font-size: $size-l;
  }
  &.medium {
    @include inset-squish-space($space-s);
    font-size: $size-m;
  }
  &.small {
    @include inset-squish-space($space-xs);
    font-size: $size-s;
  }
  // Primary button
  &.primary {
    background: $color-primary;
    color: $color-white;
    box-shadow: none;
    &:hover,
    &.hover {
      background-color: shade($color-primary, 12%);
    }
    &:active,
    &.active {
      background-color: shade($color-primary, 20%);
      transition: none;
    }
    &:focus {
      outline: 0;
    }
    .user-is-tabbing &:focus,
    &.focus {
    }
  }
}
</style>