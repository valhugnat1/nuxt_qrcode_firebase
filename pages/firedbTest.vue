<template>
  <section class="container">   
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>  </section>
</template>

<script>
  import { db } from '~/plugins/firebase.js'
  import { collection, getDocs, addDoc } from 'firebase/firestore';


  export default {
    name: 'TestWriteFirebase',
    data() {
      return {
        writeSuccessful: false
      }
    },
    methods: {
      async writeToFirestore() {
        try {
            const docRef = await addDoc(collection(db, "testQRCode"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
    async mounted() {
        const citiesCol = collection(db, 'testQRCode');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        console.log(cityList) 
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>