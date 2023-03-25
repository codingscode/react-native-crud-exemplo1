
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'




const App = () => {
   const [list, setList] = useState([])
   
   useEffect(() => {
      getListTeacher()
   }, [])


   const getListTeacher = async () => {
      await fetch('https://raw.githubusercontent.com/codingscode/react-native-crud-exemplo1/master/backend/db.json', {  // 'https://raw.githubusercontent.com/codingscode/react-native-crud-exemplo1/master/backend/db.json/list'
         method: 'GET'
      }).then(res => {
         return res.json()
      }).then(res => {
         if (res) {
            setList(res.list)
         }
      }).catch(err => {
         console.log(err)
      })
      
   }

   const handleRemove = () => {
      
   }

  
   return (
      <SafeAreaView >
         <Text style={styles.txtMain} >Lista Professor {list.length}</Text>
         <ScrollView contentContainerStyle={{
            paddingHorizontal: 10
         }} >
            {list.map((item, index) => {
               return (
                  <View style={styles.rowBetween} >
                     <View style={styles.item} key={index} >
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
