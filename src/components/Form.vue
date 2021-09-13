  
<template>
  <div class="form-cadastro-pasteis">
    <v-card class="mx-auto card" max-width="1118" elevation="9">
        <div class="card-content">
            <v-row>
                <v-col cols="8" md="8">
                    <v-card-text class="card-title">
                        <h1>Monte aqui o seu cardápio. O que está esperando?</h1>
                    </v-card-text>
                </v-col>
                <v-col cols="4" md="4">
                    <div class="switch-control">
                         <span>Comida</span>
                            <SwitchType />
                         <span>Bebida</span>
                    </div>
                </v-col>
            </v-row>
        </div>

       <div class="card-body">
            <v-form  ref="form" v-model="valid" cols="12" class="formulario">
                <v-row>
                    <v-col cols="5" md="5" class="form-input">
                        <v-text-field label="Título do Pedido" v-model="titulo_produto" :rules="tituloRules" solo required></v-text-field>
                        
                    </v-col>
                    <v-col cols="5" md="5" class="form-input">
                        <v-text-field label="Sabor" v-model="sabor_produto" :rules="saborRules" solo required></v-text-field>
                  
                    </v-col>
                    <v-col cols="2" md="2" class="form-input">
                        <vuetify-money
                            v-model="valor_produto"
                            v-bind:readonly="readonly"
                            v-bind:disabled="disabled"
                            v-bind:outlined="outlined"
                            v-bind:rules="valorRules"
                            v-bind:clearable="clearable"
                            v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                            v-bind:options="options"
                            solo
                        />

                         
                    </v-col>
                    <v-col cols="12" md="12" class="form-input">
                        <v-textarea label="Descrição" v-model="desc_produto" :rules="descricaoRules"  rows="3" name="desc_produto" solo ></v-textarea>
                        
                    </v-col>
                    <v-col cols="12" md="12" class="form-input upload">
                        <v-file-input
                            color="deep-purple accent-4"
                            v-model="imagem_produto"
                            :rules="uploadRules"
                            label=""
                            rows="4"
                            prepend-icon="mdi-image-plus"
                        >Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.</v-file-input>
                    </v-col>
                    <v-col cols="12" md="12" class="form-input buttons">
                        <v-btn class="btn btn-danger" @click="reset" rounded> Limpar </v-btn>
                        <v-btn class="btn btn-warning" @click="validate" rounded> Cadastrar </v-btn>
                    </v-col>
                </v-row>
            </v-form>
       </div>
    </v-card>

    <div class="card-item-content" >
        <v-row>
            <v-col cols="2" class="card-image">
                <div class="image">
                    <img src="../assets/imgs/teste.jpg" alt=""/>
                </div>
            </v-col>
            <v-col cols="11">
                <v-card class="mx-auto card card-item-preview" elevation="9">
                    <div class="content-title">
                        <v-row>
                            <v-col class="titulo" cols="9">
                                <h2>{{titulo_produto}}</h2>
                            </v-col>
                            <v-col class="valor" cols="3" v-if="valor_produto != null">
                                <p>R$ {{valor_produto}}</p>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="content-info">
                        <v-row>
                            <v-col cols="1">
                            </v-col>
                            <v-col cols="11">
                                <div class="sabor">
                                    <p><strong>Sabor: </strong> {{sabor_produto}}</p>
                                </div>
                                <div class="descricao">
                                    <p><strong> Descrição:</strong>  {{desc_produto}}</p> 
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
             </v-col>
        </v-row>
    </div>
  </div>
</template>
<script>
    import SwitchType from '../components/Switch.vue'

    export default {    
        data: () => ({
            valid: true,
                titulo_produto: '',
                tituloRules: [
                    v => !!v || 'Informe o título',
            ],
                sabor_produto: '',
                saborRules: [
                    v => !!v || 'Informe o sabor',
            ],
            desc_produto: '',
            valor_produto: '',
            label: "Value",
            placeholder: " ",
            readonly: false,
            disabled: false,
            outlined: true,
            clearable: true,
            valueWhenIsEmpty: "",
            options: {
                locale: "pt-BR",
                prefix: "R$",
                suffix: "",
                length: 11,
                precision: 2
            },
            valorRules: [
                v => !!v || 'Informe o valor',
            ],
            imagem_produto: null,
            uploadRules: [
                    v => !!v || 'Imagem é obrigatória',
            ]
        }),

        methods: {
            validate () {
                this.$refs.form.validate();
            },
            reset () {
                this.$refs.form.reset()
            }
        },

        components:{
            SwitchType
        }
    }

</script>

<style>

    .form-cadastro-pasteis .card{
        border-radius: 20px;
        margin: 0 auto;
         margin-bottom: 80px;
    }
        .form-cadastro-pasteis .card .card-content{
        background-color: #FFCA00;
    }
    .form-cadastro-pasteis .card .card-content .card-title h1{
        color: #A03400;
        margin: 0;
        font-style: italic;
        letter-spacing: 0px;
        font-size: 20px;
        text-indent: 35px;
    }
    .form-cadastro-pasteis .card .card-body{
        margin: -15px 0 0 0;
        padding: 0 15px 15px;
    }

    .form-cadastro-pasteis .card .card-body .formulario .form-input{
        padding: 0 10px;
    }
    .form-cadastro-pasteis .card .card-body .formulario .form-input.buttons{
        margin-bottom: -20px;
        text-align: center;
    }
    .form-cadastro-pasteis .card .card-body .formulario .form-input.buttons .btn{
        margin: 0 10px;
        width: 170px;
        height: 45px;
        font-weight: 900;
        color: #fff;
        font-size: 16px;
    }
    .form-cadastro-pasteis .card .card-body .formulario .form-input.buttons .btn-danger{
        background-color: #E43636;
    }

    .form-cadastro-pasteis .card .card-body .formulario .form-input.buttons .btn-warning{
        background-color: #FFCA00;
        color: #E43636;
    }
    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{
        border: 1px solid #E43636;
        margin: 0;
        box-shadow: none;
    }
    .form-cadastro-pasteis .card .card-body .formulario .form-input.upload .v-input .v-input__prepend-outer{
        position: absolute;
        margin-left: 0;
        margin-right: 0;
        left: 0;
        right: 0;
    }

    .switch-control{
        margin: 0 20px 0 0;
        text-align: right;
        height: 50px;
        overflow: hidden;
    }
    .switch-control span{
        margin: 0 5px;
        color: #E43636;
        display: inline-block;
        font-weight: 500;
    }
    .switch-control .switch-change{
        display: inline-block;
        margin-top: 10px;
    }

    .v-input--selection-controls {
        margin-top: 10px;
    }

    .v-text-field--filled>.v-input__control>.v-input__slot, .v-text-field--full-width>.v-input__control>.v-input__slot, .v-text-field--outlined>.v-input__control>.v-input__slot{
        background-color: #fff;
        min-height: 48px;
    }
    .v-text-field--outlined.v-input--has-state fieldset, .v-text-field--outlined.v-input--is-focused fieldset {
        border: none;
    }
    .v-file-input .v-text-field__slot{
        height: 110px;
        min-height: initial;
        text-align: center;
    }
    .v-input--has-state.error--text .v-label{
        left: 0;
        margin-left: 0;
        margin-right: 0;
        text-align: center;
        display: inline-block;
    }
    .v-text-field>.v-input__control>.v-input__slot{
        border-radius: 10px;
        border: 1px solid #E43636;
    }
    .v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{
        border: none;
    }
    .v-text-field.v-text-field--enclosed .v-text-field__details{
        margin-bottom: 0;
    }

    .card-item-content{
        max-width: 1118px;
        margin: 0 auto;
    }
     .card-item-content .card-image{
        margin-right: -100px;
        padding: 0;
     }
    .card-item-content .card-image .image{
        height: 180px;
        overflow: hidden;
        border-radius: 10px;
    }
    .card-item-content .card-image .image img{
          min-width: 100%;
          min-height: 100%;
          max-width: 100%
    }
    .card-item-content .card-item-preview{
         margin: 0 0 40px 0;
    }
      
    .card-item-content .card-item-preview .content-title{
        background-color: #E43636;
        padding: 10px 40px 10px 130px;
    }
    .card-item-content .card-item-preview .content-title .titulo h2{
        color: #FFCA00;
        font-style: italic;
    }
    .card-item-content .card-item-preview .content-title .valor p{
        text-align: center;
        color: #fff;
        font-style: italic;
        font-size: 24px;
        font-weight: 500;
    }
    .card-item-content .card-item-preview .content-info{
        padding: 25px;
    }
    .card-item-content .card-item-preview .content-info .sabor{
        margin: 0 0 10px 0;
    }
    .card-item-content .card-item-preview .content-info .sabor p{
        color: #A03400;
        font-style: italic;
        font-size: 20px;
        font-weight: 500;
    }
     .card-item-content .card-item-preview .content-info .descricao p{
        color: #A03400;
        font-style: italic;
        font-size: 20px;
    }
</style>