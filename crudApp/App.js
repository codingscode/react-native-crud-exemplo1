
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'



const App = () => {
   
   useEffect(() => {
      getListTeacher()
   }, [])


   const getListTeacher = () => {
      fetch('https://nodejs-course-g2.vercel.app/api/teacher', {
         method: 'GET'
      }).then(res => {
         return res.json()
      }).then(res => {
         console.log(res)
      }).catch(err => {
         console.log(err)
      })
      
   }
  
   return (
      <SafeAreaView >
         <Text style={styles.txtMain} >Lista Professor</Text>
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


/*
{
   "list": [
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null },
      { "teacher_id": 3, "firstname": "Jon", "lastname": "Sina", "gender": 1, "tel": "09999999", "email": "sina@gmail.com", "description": null }
   
   ]
}


npm install -g json-server
json-server --watch db.json

















*/



