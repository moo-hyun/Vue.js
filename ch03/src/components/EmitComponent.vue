<script>
export default {
  name: "EmitComponent1",
  props: ["name", "age"],
  data() {
    return {
      myname: this.name,
      myage: this.age,
    };
  },
  //methods 정의해서 클릭 이벤트 구현
  methods: {
    btnEmit: function () {
      //상의 컴포넌트로 보낼 데이터 정의
      const emitData = {
        name: this.myname,
        age: this.myage,
      };

      //상위 컴포넌트로 myEmit 이벤트 발생
      this.$emit("myEmit", emitData);
    },
  },
};
</script>
<template>
  <h4>EmitComponent1</h4>
  <p>
    이름 : <input type="text" v-model="myname" /><br />
    나이 : <input type="text" v-model="myage" /><br />
  </p>
  <button @click="btnEmit">전달</button>
</template>

<style scoped></style>
