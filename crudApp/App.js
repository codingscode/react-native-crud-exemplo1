
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'



// https://nodejs-course-g2.vercel.app/api/teacher
// https://raw.githubusercontent.com/codingscode/react-native-crud-exemplo1/master/backend/db.json
// https://platypusestunneltoo.loca.lt/list



const App = () => {
   const [list, setList] = useState([])
   
   useEffect(() => {
      getListTeacher()
   }, [])


   const getListTeacher = async () => {
      await fetch('https://platypusestunneltoo.loca.lt/list', {  // 'https://raw.githubusercontent.com/codingscode/react-native-crud-exemplo1/master/backend/db.json'
         method: 'GET',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      }).then(res => {
         return res.json()
      }).then(res => {
         if (res) {
            setList(res)//setList(res.list)
         }
      }).catch(err => {
         console.log(err)
      })
      
   }

   const handleRemove = async (item) => {
      await fetch('https://platypusestunneltoo.loca.lt/list', { //await fetch('https://platypusestunneltoo.loca.lt/list', {
         method: 'DELETE',
         body: JSON.stringify({
            teacher_id: item.teacher_id
         }),
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      }).then(res => {
         return res.json()
      }).then(res => {
         console.log(res)
         getListTeacher()
      })
      .catch(err=> {
         console.log(err)
      })
      
   }

  
   return (
      <SafeAreaView >
         <Text style={styles.txtMain} >Lista Professor {list.length}</Text>
         <ScrollView contentContainerStyle={{
            paddingHorizontal: 10
         }} >
            {list.map((item, index) => {
               return (
                  <View key={index} style={styles.rowBetween} >
                     <View style={styles.item} >
                        <Text style={styles.txtName} >{item.firstname}-{item.lastname}</Text>
                        <Text style={styles.txtNormal} >{item.gender == 1 ? 'Male' : 'Female'}</Text>
                        <Text style={styles.txtNormal} >{item.tel}</Text>
                        <Text style={styles.txtNormal} >{item.email}</Text>
                        <Text style={styles.txtNormal} >{item.description}</Text>
                     </View>
                     <View>
                        <TouchableOpacity onPress={() => handleRemove(item)} >
                           <Text style={styles.txtDelete} >Delete</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               )
            })}
         </ScrollView>
      </SafeAreaView> 
   )
}

const styles = StyleSheet.create({
   txtMain: {
      fontSize: 16,
      fontWeight: 'bold',
      padding: 10
   },
   item: {
      
   },
   txtName: {
      fontSize: 16,
      fontWeight: 'bold'
   },
   txtNormal: {
      fontSize: 14,
      color: 'orange'
   },
   txtDelete: {
      color: 'red'
   },
   rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#888"
   }
   
   
})

export default App


