<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registration</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
                  <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                  <v-alert :value="validationerror" color="error" v-html="error"></v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="indigo" dark @click="register">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from '../services/AuthService'

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null,
        validationerror: false
      }
    },
    methods: {
      async register() {
        try {
          await AuthService.register({
            email: this.email,
            password: this.password
          })
          this.validationerror = false
        } catch(error) {
          this.error = error.response.data.error
          this.validationerror = true
        }
        
      }
    },
  }
</script>

<style scoped>
    
</style>


