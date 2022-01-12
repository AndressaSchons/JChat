<template>
    <div class="form">
        <label for="user">USUÁRIO:</label>
        <input type="text" id="user" class="login" placeholder="Usuário">
        <br />
        <label for="psswd">SENHA:</label>
        <input type="password" id="psswd" class="login" placeholder="Senha">
        <br />
        <button type="submit" id="btnSubmit">Entrar!</button>
    </div>
</template>

<script>
export default {
    name: "Login",
    methods:{
        /*const usersLogins = [];
        function valid(user){
            if (user != usersLogins){
                usersLogins[i] = user;
                return true;
            }
        }*/
      login(){
        if(this.name){
          this.$emit({name: 'Chat', params:{name:this.name}})
        } else {
          this.errorText = "Insira o login"
        }
      }
}
}

</script>

<style lang="sass">
body
    font-family: 'Montserrat', sans-serif
    background-image: url(https://i.ytimg.com/vi/B-ZdaavVKAc/maxresdefault.jpg)

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
</style>