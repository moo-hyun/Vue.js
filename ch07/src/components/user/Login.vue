<script setup>
import { onBeforeMount, reactive } from "vue";
import { useAuthStore } from "../../store/auth";
import { useRouter } from "vue-router";

//라우터 가져오기
const router = useRouter();

//저장소 가져오기
const authStore = useAuthStore();

const user = reactive({
  uid: null,
  pass: null,
});

// form 전송 이벤트 핸들러
const submitLogin = () => {
  //console.log(user);
  authStore
    .login(user)
    .then((Response) => {
      router.push("/jwt/loginSuccess");
    })
    .catch((err) => {
      console.log("submitLogin catch... : " + JSON.stringify(err));
    });
};

//컴포넌트 생명주기 훅
onBeforeMount(() => {
  const user = authStore.getUser;

  // 로그인 상태 이면
  if (user) {
    router.push("/jwt/loginSuccess");
  }
});
</script>
<template>
  <h4>Login</h4>
  <form @submit.prevent="submitLogin">
    <input type="text" placeholder="아이디" v-model="user.uid" />
    <input type="text" placeholder="비밀번호" v-model="user.pass" />
    <input type="submit" value="로그인" />
  </form>
</template>
<style scoped></style>
