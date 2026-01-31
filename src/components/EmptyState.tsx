

import React from 'react'
import { Text, View } from 'react-native'

interface props {
  children: React.ReactNode,
}

const EmptyState = ({children}: props) => {
  return (
    <View className="flex items-center justify-center mt-16 p-2  ">
      <Text className="text-center text-slate-500 text-xl">
        {children}
      </Text>
    </View>
  )
}

export default EmptyState