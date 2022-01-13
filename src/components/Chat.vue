<template>

    <div class="all">
        <header>
            <nav>
                <img src="https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000053730/ae361e8e-dbea-4a4f-a121-e0a04481de1d.png" alt="Logo da empresa">JChat
            </nav>
        </header>

        <div class="form" v-if="show = false" >
            <form action="">
                <label for="user">USUÁRIO:</label>
                <input type="text" id="user" class="login" placeholder="Usuário" v-model="userName">
                <br />
                <button type="button" v-on:click="loginFlag" >Entrar!</button>
                <input type="button" v-on:click="loginFlag" id="btnSubmit">Entrar
            </form>
        </div>

        <section id="app" class="containerTela" v-else-if="show = true">

            <div class="columns" style="height: 100%">
                <div class="column" style="max-width: 90px">
                    <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                    <h5 class="nMensg">2</h5>
                    <!--Inserir css com o numero de mensagens-->
                </div>

                <div class="column chat">
                    <div class="containerChat" style="max-width: 100%">
                        <div class="headerConversa">
                          <img src="https://i2.wp.com/www.portalzendaat.com.br/wp-content/uploads/2016/06/pertenecer-a-un-grupo-comunidad-1.jpg">
                          <h3 class="title is-4 nomeConversa">Marias Fifi</h3>
                          <!-- burger menu: sair da sala/definir prioridade-->
                        </div>
                        <div class="msg">
                          <h4 class="userName"><strong>Diogo</strong></h4>
                          <h6 class="mensagem">Hello. How are you today?</h6>
                        </div>

                        <div class="msg">
                            <h4 class="userName"><strong>Kevin</strong></h4>
                            <h6 class="mensagem">Hello.</h6>
                        </div>

                        <div class="mensagenssssss">
                            <ul id="chatBox">
                                <li v-for="(msg, index) in messages" :key="index">
                                    <h4 class="userName"><strong>{{ msg.author }}</strong></h4>
                                    <h6 class="mensagem">{{ msg.msg }}</h6>

                                </li>
                            </ul>
                        </div>


                        <div class="envioMensagem">
                            <form @submit.prevent = "sendMessage">

                                <input type="text" id="msg" name="msg" class="envioMsg" v-model:value="msg" />
                                <button class="button send">Enviar</button>
                            </form>



                        </div>

                  </div>
                </div>



                <div class="column" style="max-width: 70px; height: 100%; background-color: white">
                    <div class="pessoaOnline">
                        <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                        <h3  class="nomeConversa">Nome</h3>
                    </div>
                    <div class="pessoaOnline">
                        <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                        <h3  class="nomeConversa">Nome</h3>
                    </div>
                    <div class="pessoaOnline">
                        <img src="https://caocidadao.com.br/wp-content/uploads/2019/09/user.png" alt="">
                        <h3  class="nomeConversa">Nome</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import io from 'socket.io-client';
import app from "@/App";
const socket = io('http://localhost:3000');

//import Login from './Login.vue'
let flag;
export default {
    name: "Chat",

    data() {
        return {
            show: true,
            userName: "",
            users: [],
            msg: "",
            messages: [],

        }
    },
    methods: {

        loginFlag: function(){
          if (userName.length != 0){
              this.show = false;
              socket.emit('user', this.userName);
              this.userName = '';
              return
          }
        },

        sendMessage: function (){
            let message = {
                author: this.userName,
                msg: this.msg,
            }
            socket.emit('message', message);
            this.msg = ''
        }
    },
    created: function () {
        socket.on('newMessage', msg=>{
            this.messages.push(msg);
        });
        socket.on('user', userName =>{
            this.userName.push(userName);
        });
    },

    mounted() {
        socket.on('message', function (message) {
            app.message.push(message);
            app.$nextTick(function (){
                var messageBox = document.getElementById('chatBox');
                messageBox.scrollTop = messageBox.scrollHeight;
            })
        })

    },
    components:{

  }

}
</script>

<style lang="sass">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@300&family=Source+Sans+Pro:wght@300&display=swap')

body
    background-color: #b3d4fc
    margin: 0
    padding: 0
    font-family: 'Source Sans Pro', sans-serif
    overflow: hidden
    height: calc(100vh + 40px)


header
    display: inline-block
    background-color: rgb(46,52,59)
    width: 100%
    height: 25px
    color: white
    font-size: 20px
    text-align: center
    img
        width: 20px

.form
    line-height: 30px
    font-size: larger
    background-color: #b3d4fc
    padding: 20px
    margin: 20% 30% 20% 30%

#btnSubmit
    background-color: rgb(29, 187, 162)
    color: #fff
    line-height: 1.2
    text-transform: uppercase
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    display: flex
    justify-content: center
    align-items: center
    border: none
    width: 100%
    height: 40px
    border-radius: 5px
    -webkit-transition: all 0.4s
    -o-transition: all 0.4s
    -moz-transition: all 0.4s
    transition: all 0.4s

.login
    font-size: 18px
    color: #555555
    line-height: 1.2
    display: block
    width: 100%
    height: 30px
    background: transparent
    border-radius: 5px
    border: none

.containerTela
    width: 100%
    height: 100%

.containerTela
    margin-top: 0
    height: calc(100vh - 40px)
    img
        width: 50px
        border-radius: 10px

.containerChat
    background-color: pink
    position: relative

.headerConversa
    background-color: #284670
    color: white
    img
        width: 50px
        border-radius: 15px
        margin: 10px 10px 0 10px
    img, h3
        display: inline-block

.nomeConversa
    color: white
    text-align: left

.chat
    background-color: pink
    margin-top: 9px

.envioMensagem
    width: 100%
    height: 10px
    position: absolute
    margin-top: 500px

.mensagem
    text-align: left
    margin-left: 15px

.msg
    margin: 5px 3px

.envioMsg
    width: 80%
    height: 40px
    border: none
    border-radius: 5px
    margin: 3px

.send
    margin-top: 3px

.userName
    color: aquamarine
    text-align: left
    margin-left: 10px

.onlines
    ul
        list-style-type: none
        padding: 0

.pessoaOnline
    color: white
    background-color: white
    padding: 10px
    display: block

.pessoaOnline
    img
        border: 3px solid green
        border-radius: 30px

</style>
