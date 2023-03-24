
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'




const App = () => {
   const [list, setList] = useState([])
   
   useEffect(() => {
      getListTeacher()
   }, [])


   const getListTeacher = async () => {
      await fetch('https://raw.githubusercontent.com/codingscode/react-native-crud-exemplo1/master/backend/db.json', {  // 'https://raw.githubusercontent.com/codingscode/react-native-crud-exemplo1/master/backend/db.json/list'
         method: 'GET'
      }).then(res => {
         console.log('res', res)
         return res.json()
      }).then(res => {
         if (res) {
            setList(res.list)
         }
      }).catch(err => {
         console.log(err)
      })
      
   }
  
   return (
      <SafeAreaView >
         <Text style={styles.txtMain} >Lista Professor {list.length}</Text>
      </SafeAreaView> 
   )
}

const styles = StyleSheet.create({
   txtMain: {
      fontSize: 16,
      fontWeight: 'bold'     
   },

})

export default App
