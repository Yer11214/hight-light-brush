<template>
  <div>
    <span
      v-for="(fragment, index) in highlightedFragments"
      :key="index"
      :class="{ highlight: fragment.highlighted }"
      :style="{
        ...customStyle,
        backgroundColor: fragment.highlighted ? light : '',
        color: fragment.highlighted ? color : '',
      }"
    >
      {{ fragment.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "highlight",
  props: {
    // 文本颜色
    text: {
      type: String,
      required: true,
    },
    // 关键字
    keywords: {
      type: Array,
      required: true,
    },
    // 高亮颜色
    light: {
      type: String,
      default: "#fbda32",
    },
    // 文字颜色
    color: {
      type: String,
      default: "",
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // 是否只高亮第一个关键字
    highlightFirstOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    highlightedFragments() {
      if (!this.text) {
        return [];
      }

      const fragments = [];
      let remainingText = this.text;

      this.keywords.forEach((keyword) => {
        let index = remainingText
          .toLowerCase()
          .indexOf(keyword.toLowerCase());
        if (index !== -1) {
          if (this.highlightFirstOnly) {
            fragments.push({
              text: remainingText.substring(0, index),
              highlighted: false,
            });
            fragments.push({
              text: remainingText.substr(index, keyword.length),
              highlighted: true,
            });
            remainingText = remainingText.substr(index + keyword.length);
          } else {
            while (index !== -1) {
              if (index > 0) {
                fragments.push({
                  text: remainingText.substring(0, index),
                  highlighted: false,
                });
              }
              fragments.push({
                text: remainingText.substr(index, keyword.length),
                highlighted: true,
              });
              remainingText = remainingText.substr(index + keyword.length);
              index = remainingText.toLowerCase().indexOf(keyword.toLowerCase());
            }
          }
        }
      });

      if (remainingText.length > 0) {
        fragments.push({ text: remainingText, highlighted: false });
      }

      return fragments;
    },
  },
};
</script>

<style></style>
