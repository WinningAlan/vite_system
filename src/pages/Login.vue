<!--
 * @Author: your name
 * @Date: 2021-07-13 18:16:26
 * @LastEditTime: 2021-07-13 18:51:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\pages\Login.vue
-->
<template>
    <div class="login">
    {{loginParmas}}
        <Form :model="loginParmas" :rules="rules" ref="formRef">
            <FormItem lable="账号" name="No">
                <Input v-model:value="loginParmas.No"/>
            </FormItem>
            <FormItem lable="密码" name="Pwd">
                <Input v-model:value="loginParmas.Pwd"/>
            </FormItem>
            <Button @click="login">登录</Button>
        </Form>
    </div>
</template>
<script lang="ts" setup>
import {Form,FormItem,Input,Button} from 'ant-design-vue';
import {ref,toRaw} from "vue";
import {Login} from "../api/public"
import type {LoginParams} from "../api/typePublic.d"
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
const formRef = ref();
const router = useRouter();
const store = useStore()
const loginParmas = ref<LoginParams>({
    No:'',
    Pwd:'',
    HospitalAreaId:"ccec3b76-7e1f-e911-80cd-0050568e1b08"
})
const rules = {
    No:[
        { required: true, message: '账号必填', trigger: 'blur'}
    ],
    Pwd:[
       { required: true, message: '密码必填', trigger: 'blur'}
    ]
}

const login = ()=>{
    formRef.value?.validate()
        .then(async() => {
          console.log('values', loginParmas.value, toRaw(loginParmas.value));
          let res = await Login(toRaw(loginParmas.value));
          console.log(res);
          if(res.Status){
            console.log(router)
            store.commit("public/SET_USER",res.Data)
            router.push("/dashboard/analysis")
          }
        })
        .catch((error:any) => {
          console.log('error', error);
        });
}
</script>
