<template>
  <button
    :class="computedClass"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button", // button, submit, reset
    },
    variant: {
      type: String,
      default: "text", // text, contained, outlined
    },
    color: {
      type: String,
      default: "primary", // primary, light
    },
    size: {
      type: String,
      default: "medium", // small, medium, large, extra-large
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass() {
      return [
        "c-btn",
        `c-btn-${this.variant}`,
        `c-btn-${this.color}`,
        `c-btn-${this.size}`,
        { "c-btn-disabled": this.disabled },
      ];
    },
  },
  methods: {
    onClick(event) {
      if (!this.disabled) {
        this.$emit("clicked", event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors";
@import "@/assets/scss/functions";
@import "@/assets/scss/mixins";

/* 기본 스타일 */
.c-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Variant: Text */
.c-btn-text {
  background-color: transparent;

  &.c-btn-primary {
    @include button-text($primary);
  }

  &.c-btn-light {
    @include button-text($light);
  }

  &.c-btn-dark {
    @include button-text($dark);
  }
}

/* Variant: Contained */
.c-btn-contained {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.c-btn-primary {
    @include button-contained($primary);
  }

  &.c-btn-light {
    @include button-contained($light, inherit, 0.95);
  }

  &.c-btn-dark {
    @include button-contained($dark, white, 1.25);
  }
}

/* Variant: Outlined */
.c-btn-outlined {
  background-color: transparent;
  border: 1px solid currentColor;
  color: inherit;

  &.c-btn-primary {
    @include button-outlined($primary);
  }

  &.c-btn-light {
    @include button-outlined($light);
  }

  &.c-btn-dark {
    @include button-outlined($dark);
  }
}

/* Size: Small */
.c-btn-small {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

/* Size: Medium */
.c-btn-medium {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

/* Size: Large */
.c-btn-large {
  font-size: 1.125rem;
  padding: 0.625rem 1.25rem;
}
/* Size: Extra Large */
.c-btn-extra-large {
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
}

/* 비활성화된 버튼 */
.c-btn-disabled {
  opacity: 0.65;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
