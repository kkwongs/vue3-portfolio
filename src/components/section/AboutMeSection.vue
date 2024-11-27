<template>
  <SectionLayout title="About me">
    <ul class="info-container">
      <li class="info-item" v-for="item in items" :key="item">
        <div>
          <component v-if="!!item.icon" :is="item.icon" />
        </div>
        <div>
          <div>{{ item.label }}</div>
          <div>{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </SectionLayout>
</template>

<script>
import { markRaw } from "vue";
import SectionLayout from "@/components/section/SectionLayout.vue";

export default {
  components: { SectionLayout },
  data() {
    return {
      items: [
        { label: "이름", content: "권기현" },
        { label: "생년월일", content: "1995.10.26" },
        { label: "주소", content: "경기도 용인시 기흥구" },
        { label: "연락처", content: "010-6512-5741" },
        { label: "이메일", content: "kihyun5741@gmail.com" },
        { label: "학력", content: "단국대학교 소프트웨어학과" },
      ],
    };
  },
  mounted() {
    this.setIcon();
  },
  methods: {
    async setIcon() {
      this.items[0].icon = markRaw(
        (await import("vue-material-design-icons/Account.vue")).default
      );
      this.items[1].icon = markRaw(
        (await import("vue-material-design-icons/Calendar.vue")).default
      );
      this.items[2].icon = markRaw(
        (await import("vue-material-design-icons/MapMarker.vue")).default
      );
      this.items[3].icon = markRaw(
        (await import("vue-material-design-icons/Cellphone.vue")).default
      );
      this.items[4].icon = markRaw(
        (await import("vue-material-design-icons/Email.vue")).default
      );
      this.items[5].icon = markRaw(
        (await import("vue-material-design-icons/School.vue")).default
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.section-wrapper {
  background-color: #fbfbfd;
  .info-container {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 16px;
    .info-item {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 20px;
      min-width: 320px;

      > :last-child {
        display: grid;
        gap: 8px;
        > :first-child {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
