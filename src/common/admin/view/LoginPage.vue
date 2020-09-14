<template>
<v-layout>
    <v-form>
        <v-label>Entrer vos identifiants de connexions</v-label>
        <v-text-field
        v-model="userName"
        :rules="userNameRules"
        label="Nom d'utilisateur"
        required
        ></v-text-field>

        <v-text-field
        v-model="userPassword"
        :rules="userPasswordRules"
        label="Mot de passe"
        required
        ></v-text-field>
        <v-btn
        @click="sendCredentials"
        >Envoyer    
        </v-btn>
    </v-form>
</v-layout>
</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';

@Component({
  name: 'ItemMenu'
})

export default class  extends Vue {
//    https://www.synbioz.com/blog/tech/bibliotheque-authentification-vuejs
// https://vuetifyjs.com/fr-FR/components/forms/
    private userName:string ="";
    private userPassword:string ="";

    sendCredentials(){
        
    }
}
</script>

<style>

</style>