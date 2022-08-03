<template>
  <section class="about-me" id="about-me">
      <div class="inner">
        <div class="title">About me</div>
        <ul class="info">
          <li>
            <div class="info-wrapper">
              <div class="materail-icons">
                <AccountIcon />
              </div>
              <div>
                <div class="title">이름</div>
                <div class="description">권기현</div>
              </div>
            </div>
          </li>
          <li>
            <div class="info-wrapper">
              <div class="materail-icons">
                <CalendarIcon />
              </div>
              <div>
                <div class="title">생년월일</div>
                <div class="description">95.10.26</div>
              </div>
            </div>
          </li>
          <li>
            <div class="info-wrapper">
              <div class="materail-icons">
                <MapMarkerIcon />
              </div>
              <div>
                <div class="title">주소</div>
                <div class="description">경기도 용인시 기흥구</div>
              </div>
            </div>
          </li>
          <li>
            <div class="info-wrapper">
              <div class="materail-icons">
                <CellphoneIcon />
              </div>
              <div>
                <div class="title">연락처</div>
                <div class="description">010 6512 5741</div>
              </div>
            </div>
          </li>
          <li>
            <div class="info-wrapper">
              <div class="materail-icons">
                <EmailIcon />
              </div>
              <div>
                <div class="title">이메일</div>
                <div class="description">kihyun5741@gmail.com</div>
              </div>
            </div>
          </li>
          <li>
            <div class="info-wrapper">
              <div class="materail-icons">
                <SchoolIcon />
              </div>
              <div>
                <div class="title">학력</div>
                <div class="description">단국대학교 소프트웨어학과</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
import AccountIcon from 'vue-material-design-icons/Account.vue';
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import CellphoneIcon from 'vue-material-design-icons/Cellphone.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
import SchoolIcon from 'vue-material-design-icons/School.vue';

export default {
  components: {
    AccountIcon,
    CalendarIcon,
    MapMarkerIcon,
    CellphoneIcon,
    EmailIcon,
    SchoolIcon
  }
}
</script>

<style lang="scss" scoped>
.about-me {
  background-color: #fbfbfd;
  .inner {
    height: 560px;
    .info {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.3%;
        .info-wrapper {
          height: 84px;
          display: flex;
          align-items: center;
          padding-left: 25%;
          box-sizing: border-box;
          .materail-icons {
            margin-right: 20px;
          }
          .title {
            font-size: 28px;
            margin-bottom: 5px;
          }
          .description {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>